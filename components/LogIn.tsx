import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GiftIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";
import Image from "next/image";

type LogInProperties = {
  open: boolean;
  onClose: () => void;
  callbackUrl?: string;
};

export function LogIn({ open, onClose, callbackUrl }: LogInProperties) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <GiftIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Generate your poem
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Create a free account to generate your poem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <button
                    type="button"
                    className="flex w-full justify-center items-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 py-3 px-4 font-medium hover:from-gray-100 hover:to-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                    onClick={() =>
                      signIn("google", {
                        callbackUrl,
                      })
                    }
                  >
                    <Image
                      alt=""
                      src="https://authjs.dev/img/providers/google.svg"
                      className="w-4 h-4 mr-4"
                      width={32}
                      height={32}
                    />
                    Log in with Google
                  </button>
                  <button
                    type="button"
                    className="flex w-full justify-center items-center rounded-xl py-3 px-4 font-medium ring-1 ring-gray-100 hover:ring-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-800"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
