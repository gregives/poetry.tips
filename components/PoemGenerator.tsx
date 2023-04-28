"use client";

import { poems } from "@/poems";
import { useId, useState } from "react";
import { twMerge } from "tailwind-merge";
import { PoemResult } from "@/components/PoemResult";
import { useForm } from "react-hook-form";
import type { Options } from "@/app/api/generate/route";

const textDecoder = new TextDecoder();

export function PoemGenerator({
  type,
}: {
  type?: (typeof poems)[number]["name"];
}) {
  const [error, setError] = useState<string>();
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const poem = poems.find((poem) => poem.name === type) ?? poems[0];

  const typeId = useId();
  const promptId = useId();

  const { register, handleSubmit, watch } = useForm<Options>({
    defaultValues: {
      type: type ?? "Random poem",
      prompt: "",
    },
  });

  const generatePoem = handleSubmit(async ({ type, prompt }) => {
    setError(undefined);
    setResult("");
    setShowResult(true);
    setLoading(true);

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type,
        prompt,
      }),
    });

    if (!response.ok || response.body === null) {
      setError("Something went wrong, try again?");
      return;
    }

    const reader = response.body.getReader();

    while (true) {
      const { value, done } = await reader.read();

      if (done) {
        break;
      }

      const chunk = textDecoder.decode(value);
      setResult((previous) => previous + chunk);
    }

    setLoading(false);
  });

  return (
    <form className="mx-auto max-w-4xl space-y-8" onSubmit={generatePoem}>
      <div>
        <label
          htmlFor={typeId}
          className="flex items-center text-sm font-medium leading-6 text-gray-900"
        >
          <span
            className={twMerge(
              "inline-block rounded-full w-6 h-6 text-center mr-3",
              poem.classNames.background
            )}
          >
            1
          </span>
          Select the type of poem
        </label>
        <select
          id={typeId}
          className="mt-4 block w-full rounded-xl border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-800"
          {...register("type")}
        >
          <option>Random poem</option>
          {poems.map((poem) => (
            <option key={poem.name}>{poem.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor={promptId}
          className="flex items-center text-sm font-medium leading-6 text-gray-900"
        >
          <span
            className={twMerge(
              "inline-block rounded-full w-6 h-6 text-center mr-3",
              poem.classNames.background
            )}
          >
            2
          </span>
          Describe your poem
        </label>
        <div className="relative mt-4">
          <div className="absolute left-0 top-0 py-3 px-4 text-gray-900 pointer-events-none">
            Write a poem about
          </div>
          <textarea
            rows={4}
            id={promptId}
            className="indent-[15.25ch] block w-full rounded-xl border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 resize-none"
            placeholder="a knight in shining armour"
            {...register("prompt")}
          />
        </div>
      </div>
      <button
        className={twMerge(
          "block w-full rounded-xl py-3 px-4 font-medium focus:outline-none focus-visible:ring-2 hover:brightness-95 hover:saturate-150",
          poem.classNames.background,
          poem.classNames.title,
          poem.classNames.focusVisible
        )}
      >
        Generate poem
      </button>
      <PoemResult
        result={result}
        options={watch()}
        onClose={() => setShowResult(false)}
        open={showResult}
        loading={loading}
      />
    </form>
  );
}
