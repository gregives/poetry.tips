"use client";

import { Optional, Poem } from "@/types";
import { Loading } from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

type PoemProperties = JSX.IntrinsicElements["article"] & {
  poem: Optional<Poem, "options">;
};

export function PoemCard({
  poem: { response, options },
  className,
  children,
  ...properties
}: PoemProperties) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const shareAvailable = typeof navigator.share === "function";

  const shareResponse = async () => {
    await navigator.share({
      text: `${response}\n\nGenerate your own poem on poetry.tips`,
    });
  };

  const copyResponse = async () => {
    await navigator.clipboard.writeText(
      `${response}\n\nGenerate your own poem on poetry.tips`
    );
    setCopied(true);
  };

  const regenerateResponse = async () => {
    localStorage.setItem("options", JSON.stringify(options));
    router.push("/generate");
  };

  return (
    <article
      className={twMerge("flex flex-col bg-white rounded-3xl", className)}
      {...properties}
    >
      <div
        className={twMerge(
          "flex-1 p-6 whitespace-pre-line",
          options?.type === "Diamante" && "text-center"
        )}
      >
        {children}
      </div>
      <div className="px-6 pb-6 pt-2 flex items-stretch space-x-3">
        <button
          type="button"
          className="flex w-full justify-center items-center space-x-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 py-3 px-4 font-medium hover:from-blue-100 hover:to-blue-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
          onClick={shareAvailable ? shareResponse : copyResponse}
        >
          {shareAvailable
            ? "Share"
            : copied
            ? "Copied to clipboard"
            : "Copy to clipboard"}
        </button>
        <Menu as="div" className="relative">
          <Menu.Button className="h-full flex items-center text-gray-500 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 py-3 px-1 font-medium hover:from-gray-100 hover:to-gray-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800">
            <span className="sr-only">Open options</span>
            <EllipsisVerticalIcon className="h-6 w-6" aria-hidden="true" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {shareAvailable && (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={copyResponse}
                        className={twMerge(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full text-left px-4 py-2 text-sm"
                        )}
                      >
                        Copy to clipboard
                      </button>
                    )}
                  </Menu.Item>
                )}
                {options && (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={regenerateResponse}
                        className={twMerge(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full text-left px-4 py-2 text-sm"
                        )}
                      >
                        Regenerate{" "}
                        <span className="opacity-60">(1 credit)</span>
                      </button>
                    )}
                  </Menu.Item>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </article>
  );
}
