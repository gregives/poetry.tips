"use client";

import { poemTypes } from "@/poems";
import { FormEvent, Fragment, useLayoutEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { LogIn } from "./LogIn";
import { useRouter } from "next/navigation";
import { Options, PoemType } from "@/types";
import { Loading } from "./Loading";
import { Dialog, Transition } from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

type PoemGeneratorProperties = {
  type?: PoemType["name"];
};

export function PoemGenerator({ type }: PoemGeneratorProperties) {
  const { classNames } =
    poemTypes.find((poem) => poem.name === type) ?? poemTypes[0];

  const [hint, setHint] = useState<string>();
  const [hintTitle, setHintTitle] = useState<string>();
  const [hintVisible, setHintVisible] = useState(false);

  const [generating, setGenerating] = useState(false);
  const [logInOpen, setLogInOpen] = useState(false);
  const [textIndent, setTextIndent] = useState("152.594px");

  const { data: session } = useSession();
  const router = useRouter();

  const { register, handleSubmit, watch } = useForm<Options>({
    defaultValues: {
      type: type ?? "Random Poem",
      prompt: "",
    },
  });

  const promptRef = useRef<HTMLDivElement>(null);
  const updateTextIndent = () => {
    if (promptRef.current !== null) {
      setTextIndent(
        window
          .getComputedStyle(promptRef.current, null)
          .getPropertyValue("width")
      );
    }
  };

  useLayoutEffect(() => {
    updateTextIndent();
    window.addEventListener("resize", updateTextIndent);
    return () => {
      window.removeEventListener("resize", updateTextIndent);
    };
  }, []);

  const resizeTextarea = (event: FormEvent<HTMLTextAreaElement>) => {
    const textarea = event.target as HTMLTextAreaElement;

    if (textarea !== null) {
      textarea.style.height = "";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  const generatePoem = handleSubmit((options) => {
    localStorage.setItem("options", JSON.stringify(options));

    if (session) {
      setGenerating(true);
      router.push("/generate");
    } else {
      setLogInOpen(true);
    }
  });

  const poem =
    poemTypes.find((poem) => poem.name === watch("type")) ?? poemTypes[0];

  return (
    <form className="mx-auto max-w-4xl space-y-8" onSubmit={generatePoem}>
      <div className="relative">
        <label
          htmlFor="type"
          className="flex items-center text-sm font-medium leading-6 text-gray-900"
        >
          <span
            className={twMerge(
              "inline-block rounded-full w-6 h-6 text-center mr-3",
              classNames.background
            )}
          >
            1
          </span>
          Select the type of poem
        </label>
        <select
          id="type"
          className="mt-4 block w-full bg-transparent backdrop-blur-sm rounded-xl border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
          required
          {...register("type", {
            required: true,
          })}
        >
          {poemTypes.map((poem) => (
            <option key={poem.name}>{poem.name}</option>
          ))}
        </select>
      </div>
      {poem.options.map((option, index) => (
        <div key={option.name} className="relative">
          <label
            htmlFor={option.name}
            className="flex items-center text-sm font-medium leading-6 text-gray-900"
          >
            <span
              className={twMerge(
                "inline-block rounded-full w-6 h-6 text-center mr-3",
                classNames.background
              )}
            >
              {index + 2}
            </span>
            {option.label}
          </label>
          <button
            className="group absolute top-0 right-0 rounded-full focus:outline-none focus-visible:outline-2 focus:outline-gray-800"
            onClick={() => {
              setHint(option.hint);
              setHintTitle(option.label);
              setHintVisible(true);
            }}
          >
            <span className="sr-only">
              Help with &quot;{option.label}&quot;
            </span>
            <QuestionMarkCircleIcon
              className="h-6 w-6 text-gray-400 group-hover:text-gray-600"
              aria-hidden="true"
            />
          </button>
          <input
            id={option.name}
            placeholder={option.placeholder}
            className="mt-4 block w-full bg-transparent backdrop-blur-sm rounded-xl border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
            {...register(option.name, {
              required: true,
            })}
          />
        </div>
      ))}
      <div className="relative">
        <label
          htmlFor="prompt"
          className="flex items-center text-sm font-medium leading-6 text-gray-900"
        >
          <span
            className={twMerge(
              "inline-block rounded-full w-6 h-6 text-center mr-3",
              classNames.background
            )}
          >
            {poem.options.length + 2}
          </span>
          Describe your poem
        </label>
        <button
          className="group absolute top-0 right-0 rounded-full focus:outline-none focus-visible:outline-2 focus:outline-gray-800"
          onClick={() => {
            setHint(
              "Describe what you want the poem to be about. You should include the theme or subject of the poem and any relevant information you want to be included, such as the characters' backgrounds or the setting of the poem."
            );
            setHintTitle("Describe your poem");
            setHintVisible(true);
          }}
        >
          <span className="sr-only">
            Help with &quot;Describe your poem&quot;
          </span>
          <QuestionMarkCircleIcon
            className="h-6 w-6 text-gray-400 group-hover:text-gray-600"
            aria-hidden="true"
          />
        </button>
        <div className="relative mt-4">
          <textarea
            rows={4}
            id="prompt"
            className="block w-full bg-transparent backdrop-blur-sm rounded-xl border-0 py-3 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800 resize-none"
            placeholder="a knight in shining armour"
            required
            style={{
              textIndent,
            }}
            {...register("prompt", {
              required: true,
            })}
            onInput={resizeTextarea}
          />
          <div
            ref={promptRef}
            className="absolute left-0 top-0 pt-3 pl-4 text-gray-900 pointer-events-none box-content"
          >
            Write a poem about&nbsp;
          </div>
        </div>
      </div>
      <button
        className={twMerge(
          "flex w-full justify-center items-center space-x-4 rounded-xl py-3 px-4 font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:brightness-95 hover:saturate-150",
          classNames.background,
          classNames.shadow,
          classNames.title,
          classNames.focusVisible
        )}
      >
        {generating && <Loading />}
        <span>
          Generate poem{" "}
          {session && (
            <span className="font-normal opacity-80">(1 credit)</span>
          )}
        </span>
      </button>
      <Transition.Root show={hintVisible} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setHintVisible(false)}
        >
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
                    <div className="text-center">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {hintTitle}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{hint}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button
                      type="button"
                      className="flex w-full justify-center items-center space-x-4 rounded-xl py-3 px-4 font-medium ring-1 ring-gray-100 hover:ring-gray-200 focus-visible:ring-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                      onClick={() => setHintVisible(false)}
                    >
                      Okay
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <LogIn
        open={logInOpen}
        onClose={() => setLogInOpen(false)}
        callbackUrl="/generate"
      />
    </form>
  );
}
