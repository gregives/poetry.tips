"use client";

import { Optional, Poem } from "@/types";
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
  const router = useRouter();

  return (
    <article
      className={twMerge("flex flex-col bg-white rounded-3xl", className)}
      {...properties}
    >
      <div className="flex-1 p-6 whitespace-pre-line">{children}</div>
      <div className="px-6 pb-6 space-y-4">
        <button
          type="button"
          className="block w-full rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 py-3 px-4 font-medium hover:from-blue-100 hover:to-blue-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
          onClick={async () => {
            await navigator.clipboard.writeText(response);
            setCopied(true);
          }}
        >
          {copied ? "Copied" : "Copy"}
        </button>
        {options && (
          <button
            type="button"
            className="block w-full rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 py-3 px-4 font-medium hover:from-gray-100 hover:to-gray-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
            onClick={() => {
              localStorage.setItem("options", JSON.stringify(options));
              router.push("/generate");
            }}
          >
            Regenerate{" "}
            <span className="font-normal opacity-60">(1 credit)</span>
          </button>
        )}
      </div>
    </article>
  );
}
