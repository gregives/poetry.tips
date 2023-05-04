import type { MDXComponents } from "mdx/types";

export function Anchor(properties: JSX.IntrinsicElements["a"]) {
  return (
    <a
      className="underline underline-offset-2 rounded-lg -m-1 p-1 focus:outline-none focus-visible:no-underline focus-visible:outline-2 focus-visible:outline-gray-800"
      {...properties}
    />
  );
}

export function Heading1(properties: JSX.IntrinsicElements["h1"]) {
  return (
    <h1
      className="lg:text-center text-4xl/snug sm:text-5xl/snug md:text-6xl/snug font-bold tracking-tight text-gray-800 mb-8 sm:mb-16 lg:-mx-24"
      {...properties}
    />
  );
}

export function Heading2(properties: JSX.IntrinsicElements["h2"]) {
  return (
    <h2
      className="text-2xl font-bold tracking-tight text-gray-900 mt-12 mb-8"
      {...properties}
    />
  );
}

export function Heading3(properties: JSX.IntrinsicElements["h2"]) {
  return (
    <h3 className="text-lg font-bold text-gray-900 mt-8 mb-4" {...properties} />
  );
}

export function Paragraph(properties: JSX.IntrinsicElements["p"]) {
  return <p className="my-8" {...properties} />;
}

export function OrderedList(properties: JSX.IntrinsicElements["ol"]) {
  return <ul className="leading-8 list-decimal" {...properties} />;
}

export function UnorderedList(properties: JSX.IntrinsicElements["ul"]) {
  return <ul className="leading-8 list-disc" {...properties} />;
}

export function ListItem(properties: JSX.IntrinsicElements["li"]) {
  return <li className="pl-1 ml-4" {...properties} />;
}

export function Pre(properties: JSX.IntrinsicElements["pre"]) {
  return (
    <div className="bg-gray-100 rounded-3xl p-6 whitespace-pre-line">
      {properties.children}
    </div>
  );
}

export function Div(properties: JSX.IntrinsicElements["code"]) {
  return <div>{properties.children}</div>;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: Anchor,
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    p: Paragraph,
    ol: OrderedList,
    ul: UnorderedList,
    li: ListItem,
    pre: Pre,
    code: Div,
    ...components,
  };
}
