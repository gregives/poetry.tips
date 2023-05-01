import { GridPattern } from "./GridPattern";
import { twMerge } from "tailwind-merge";

type HeroPatternProperties = {
  className?: string;
};

export function HeroPattern({ className }: HeroPatternProperties) {
  return (
    <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
      <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem]">
        <div
          className={twMerge(
            "absolute inset-0 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-red-50 to-red-100",
            className,
            "bg-gradient-to-r"
          )}
        >
          <GridPattern
            width={72}
            height={56}
            x={-12}
            y={4}
            squares={[
              [4, 3],
              [2, 1],
              [7, 3],
              [10, 6],
            ]}
            className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black stroke-black mix-blend-overlay"
          />
        </div>
      </div>
    </div>
  );
}
