import { poemTypes } from "@/poems";
import { PoemType } from "@/types";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type CallToActionButtonProperties = Omit<
  React.ComponentProps<typeof Link>,
  "href"
> & {
  type?: PoemType["name"];
};

export function CallToActionButton({
  type,
  className,
  ...properties
}: CallToActionButtonProperties) {
  const poemType = poemTypes.find((poem) => poem.name === type) ?? poemTypes[0];

  return (
    <Link
      className={twMerge(
        "flex w-full justify-center items-center space-x-4 rounded-xl py-3 px-4 font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:brightness-95 hover:saturate-150",
        poemType.classNames.background,
        poemType.classNames.title,
        poemType.classNames.focusVisible,
        className
      )}
      href={poemType.href}
      {...properties}
    />
  );
}
