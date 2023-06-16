import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GiftIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Loading } from "./Loading";

type LogInProperties = {
  open: boolean;
  onClose: () => void;
  callbackUrl?: string;
};

export function LogIn({ open, onClose, callbackUrl }: LogInProperties) {
  const [emailSent, setEmailSent] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const { handleSubmit, register } = useForm();

  const signInWithEmail = handleSubmit(async ({ email }) => {
    setEmailLoading(true);
    await signIn("email", {
      email,
      callbackUrl,
      redirect: false,
    });
    setEmailLoading(false);
    setEmailSent(true);
  });

  const signInWithGoogle = async () => {
    setGoogleLoading(true);
    await signIn("google", {
      callbackUrl,
    });
    setGoogleLoading(false);
  };

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
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white px-6 pb-6 pt-8 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-sm">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                    <GiftIcon
                      className="h-6 w-6 text-blue-600"
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
                        Create a free account to generate 5 poems for free. Get
                        started today.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-y-8">
                  <form onSubmit={signInWithEmail} className="space-y-4">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="block w-full rounded-xl border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 disabled:opacity-60"
                      placeholder="Email address"
                      required
                      disabled={emailSent}
                      {...register("email", {
                        required: true,
                      })}
                    />
                    {emailSent ? (
                      <div className="flex w-full justify-center items-center space-x-4 rounded-xl ring-1 ring-indigo-100 py-3 px-4 font-medium text-blue-600 cursor-not-allowed">
                        Check your email
                      </div>
                    ) : (
                      <button className="flex w-full justify-center items-center space-x-4 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 py-3 px-4 font-medium hover:from-indigo-100 hover:to-indigo-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 shadow-md shadow-indigo-500/10 border-b-2 border-b-indigo-800/10">
                        {emailLoading && <Loading />}
                        <span>Log in with email</span>
                      </button>
                    )}
                  </form>
                  <button
                    type="button"
                    className="flex w-full justify-center items-center space-x-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 py-3 px-4 font-medium hover:from-gray-100 hover:to-gray-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 shadow-md shadow-gray-500/5 border-b-2 border-b-black/5"
                    onClick={signInWithGoogle}
                  >
                    {googleLoading ? (
                      <Loading />
                    ) : (
                      <Image
                        alt=""
                        src="https://authjs.dev/img/providers/google.svg"
                        className="w-4 h-4"
                        width={16}
                        height={16}
                      />
                    )}
                    <span>Log in with Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex w-full justify-center items-center space-x-4 rounded-xl py-3 px-4 font-medium ring-1 ring-gray-100 hover:ring-gray-200 focus-visible:ring-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
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
