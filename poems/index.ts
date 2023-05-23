import slugify from "@sindresorhus/slugify";
import colors from "tailwindcss/colors";

import { acrostic } from "./acrostic";
import { ballad } from "./ballad";
import { blankVerse } from "./blankVerse";
import { cinquain } from "./cinquain";
import { couplet } from "./couplet";
import { diamante } from "./diamante";
import { elegy } from "./elegy";
import { epigram } from "./epigram";
import { freeVerse } from "./freeVerse";
import { haiku } from "./haiku";
import { limerick } from "./limerick";
import { lovePoem } from "./lovePoem";
import { narrativePoem } from "./narrativePoem";
import { ode } from "./ode";
import { pantoum } from "./pantoum";
import { sestina } from "./sestina";
import { sonnet } from "./sonnet";
import { terzaRima } from "./terzaRima";
import { villanelle } from "./villanelle";
import { randomPoem } from "./randomPoem";

const classNames = [
  {
    color: colors.red,
    background: "bg-gradient-to-br from-red-50 to-red-100",
    title: "text-red-800",
    shadow: "shadow-md shadow-red-500/10 ring-1 ring-red-800/5",
    focusWithin: "focus-within:outline-red-500",
    focusVisible: "focus-visible:outline-red-500",
  },
  {
    color: colors.orange,
    background: "bg-gradient-to-br from-orange-50 to-orange-100",
    title: "text-orange-800",
    shadow: "shadow-md shadow-orange-500/10 ring-1 ring-orange-800/5",
    focusWithin: "focus-within:outline-orange-500",
    focusVisible: "focus-visible:outline-orange-500",
  },
  {
    color: colors.amber,
    background: "bg-gradient-to-br from-amber-50 to-amber-100",
    title: "text-amber-800",
    shadow: "shadow-md shadow-amber-500/10 ring-1 ring-amber-800/5",
    focusWithin: "focus-within:outline-amber-500",
    focusVisible: "focus-visible:outline-amber-500",
  },
  {
    color: colors.yellow,
    background: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    title: "text-yellow-800",
    shadow: "shadow-md shadow-yellow-500/10 ring-1 ring-yellow-800/5",
    focusWithin: "focus-within:outline-yellow-500",
    focusVisible: "focus-visible:outline-yellow-500",
  },
  {
    color: colors.lime,
    background: "bg-gradient-to-br from-lime-50 to-lime-100",
    title: "text-lime-800",
    shadow: "shadow-md shadow-lime-500/10 ring-1 ring-lime-800/5",
    focusWithin: "focus-within:outline-lime-500",
    focusVisible: "focus-visible:outline-lime-500",
  },
  {
    color: colors.green,
    background: "bg-gradient-to-br from-green-50 to-green-100",
    title: "text-green-800",
    shadow: "shadow-md shadow-green-500/10 ring-1 ring-green-800/5",
    focusWithin: "focus-within:outline-green-500",
    focusVisible: "focus-visible:outline-green-500",
  },
  {
    color: colors.emerald,
    background: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    title: "text-emerald-800",
    shadow: "shadow-md shadow-emerald-500/10 ring-1 ring-emerald-800/5",
    focusWithin: "focus-within:outline-emerald-500",
    focusVisible: "focus-visible:outline-emerald-500",
  },
  {
    color: colors.teal,
    background: "bg-gradient-to-br from-teal-50 to-teal-100",
    title: "text-teal-800",
    shadow: "shadow-md shadow-teal-500/10 ring-1 ring-teal-800/5",
    focusWithin: "focus-within:outline-teal-500",
    focusVisible: "focus-visible:outline-teal-500",
  },
  {
    color: colors.cyan,
    background: "bg-gradient-to-br from-cyan-50 to-cyan-100",
    title: "text-cyan-800",
    shadow: "shadow-md shadow-cyan-500/10 ring-1 ring-cyan-800/5",
    focusWithin: "focus-within:outline-cyan-500",
    focusVisible: "focus-visible:outline-cyan-500",
  },
  {
    color: colors.sky,
    background: "bg-gradient-to-br from-sky-50 to-sky-100",
    title: "text-sky-800",
    shadow: "shadow-md shadow-sky-500/10 ring-1 ring-sky-800/5",
    focusWithin: "focus-within:outline-sky-500",
    focusVisible: "focus-visible:outline-sky-500",
  },
  {
    color: colors.blue,
    background: "bg-gradient-to-br from-blue-50 to-blue-100",
    title: "text-blue-800",
    shadow: "shadow-md shadow-blue-500/10 ring-1 ring-blue-800/5",
    focusWithin: "focus-within:outline-blue-500",
    focusVisible: "focus-visible:outline-blue-500",
  },
  {
    color: colors.indigo,
    background: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    title: "text-indigo-800",
    shadow: "shadow-md shadow-indigo-500/10 ring-1 ring-indigo-800/5",
    focusWithin: "focus-within:outline-indigo-500",
    focusVisible: "focus-visible:outline-indigo-500",
  },
  {
    color: colors.violet,
    background: "bg-gradient-to-br from-violet-50 to-violet-100",
    title: "text-violet-800",
    shadow: "shadow-md shadow-violet-500/10 ring-1 ring-violet-800/5",
    focusWithin: "focus-within:outline-violet-500",
    focusVisible: "focus-visible:outline-violet-500",
  },
  {
    color: colors.purple,
    background: "bg-gradient-to-br from-purple-50 to-purple-100",
    title: "text-purple-800",
    shadow: "shadow-md shadow-purple-500/10 ring-1 ring-purple-800/5",
    focusWithin: "focus-within:outline-purple-500",
    focusVisible: "focus-visible:outline-purple-500",
  },
  {
    color: colors.fuchsia,
    background: "bg-gradient-to-br from-fuchsia-50 to-fuchsia-100",
    title: "text-fuchsia-800",
    shadow: "shadow-md shadow-fuchsia-500/10 ring-1 ring-fuchsia-800/5",
    focusWithin: "focus-within:outline-fuchsia-500",
    focusVisible: "focus-visible:outline-fuchsia-500",
  },
  {
    color: colors.pink,
    background: "bg-gradient-to-br from-pink-50 to-pink-100",
    title: "text-pink-800",
    shadow: "shadow-md shadow-pink-500/10 ring-1 ring-pink-800/5",
    focusWithin: "focus-within:outline-pink-500",
    focusVisible: "focus-visible:outline-pink-500",
  },
  {
    color: colors.rose,
    background: "bg-gradient-to-br from-rose-50 to-rose-100",
    title: "text-rose-800",
    shadow: "shadow-md shadow-rose-500/10 ring-1 ring-rose-800/5",
    focusWithin: "focus-within:outline-rose-500",
    focusVisible: "focus-visible:outline-rose-500",
  },
];

export const poemTypes = [
  randomPoem,
  acrostic,
  ballad,
  blankVerse,
  cinquain,
  couplet,
  diamante,
  elegy,
  epigram,
  freeVerse,
  haiku,
  limerick,
  lovePoem,
  narrativePoem,
  ode,
  pantoum,
  sestina,
  sonnet,
  terzaRima,
  villanelle,
].map((poem, index) => ({
  ...poem,
  slug: slugify(poem.name),
  href: "/poem/" + slugify(poem.name),
  classNames: classNames[index % classNames.length],
  indefiniteArticle: ["a", "e", "i", "o", "u"].includes(
    poem.name[0].toLowerCase()
  )
    ? "an"
    : "a",
}));

export const poemTypesWithoutRandom = poemTypes.filter(
  (poem) => poem.name !== "Random Poem"
);
