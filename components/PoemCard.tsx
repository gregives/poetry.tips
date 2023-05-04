"use client";

import { Optional, Poem } from "@/types";
import { Loading } from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type PoemProperties = JSX.IntrinsicElements["article"] & {
  poem: Optional<Poem, "options">;
};

export function PoemCard({
  poem: { response, options },
  className,
  children,
  ...properties
}: PoemProperties) {
  const [copied, setCopied] = useState(false);
  const [copying, setCopying] = useState(false);
  const [regenerating, setRegenerating] = useState(false);

  const router = useRouter();

  const copyResponse = async () => {
    setCopying(true);
    await navigator.clipboard.writeText(response);
    setCopying(false);
    setCopied(true);
  };

  const regenerateResponse = async () => {
    setRegenerating(true);
    localStorage.setItem("options", JSON.stringify(options));
    router.push("/generate");
  };

  return (
    <article
      className={twMerge("flex flex-col bg-white rounded-3xl", className)}
      {...properties}
    >
      <div className="flex-1 p-6 whitespace-pre-line">{children}</div>
      <div className="px-6 pb-6 pt-2 space-y-4">
        <button
          type="button"
          className="flex w-full justify-center items-center space-x-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 py-3 px-4 font-medium hover:from-blue-100 hover:to-blue-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
          onClick={copyResponse}
        >
          {copying && <Loading />}
          {copied ? "Copied" : "Copy"}
        </button>
        {options && (
          <button
            type="button"
            className="flex w-full justify-center items-center space-x-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 py-3 px-4 font-medium hover:from-gray-100 hover:to-gray-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
            onClick={regenerateResponse}
          >
            {regenerating && <Loading />}
            <span>
              Regenerate{" "}
              <span className="font-normal opacity-60">(1 credit)</span>
            </span>
          </button>
        )}
      </div>
    </article>
  );
}
