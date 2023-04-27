import { useId } from "react";

type GridPatternProperties = JSX.IntrinsicElements["svg"] & {
  width: number;
  height: number;
  x: number;
  y: number;
  squares: [number, number][];
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...properties
}: GridPatternProperties) {
  let patternId = useId();

  return (
    <svg aria-hidden="true" {...properties}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
