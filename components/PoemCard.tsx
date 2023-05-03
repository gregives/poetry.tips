import { twMerge } from "tailwind-merge";

type PoemProperties = JSX.IntrinsicElements["article"];

export function PoemCard({ className, ...properties }: PoemProperties) {
  return (
    <article
      className={twMerge(
        "bg-white rounded-3xl p-6 whitespace-pre-line",
        className
      )}
      {...properties}
    />
  );
}
