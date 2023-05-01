import { ImageResponse } from "next/server";
import { poems } from "@/poems";
import { generatePoemMetadata } from "./generatePoemMetadata";

const InterRegular = fetch(
  new URL("@/assets/InterRegular.woff", import.meta.url)
).then((response) => response.arrayBuffer());

const InterBold = fetch(
  new URL("@/assets/InterBold.woff", import.meta.url)
).then((response) => response.arrayBuffer());

type OpenGraphImageProperties = {
  title?: string;
  description?: string;
  color?: (typeof poems)[number]["classNames"]["color"];
};

const defaultMetadata = generatePoemMetadata();

export async function createOpenGraphImage({
  title = defaultMetadata.title,
  description = defaultMetadata.description,
  color = poems[0].classNames.color,
}: OpenGraphImageProperties) {
  title = title.replace(/^AI /, "");

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, ${color[200]}, white)`,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(to top right, #ffffffff, #ffffff00 50%)",
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <div
          style={{
            backgroundImage:
              "linear-gradient(to top left, #ffffffff, #ffffff00 50%)",
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <div
          style={{
            color: color[700],
            fontSize: 48,
            display: "flex",
            alignItems: "center",
            marginLeft: -16,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            style={{
              width: "1.2em",
              height: "1.2em",
              marginRight: 24,
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>
          poetry.tips
        </div>
        <h1
          style={{
            fontSize: 500 / title.length + 50,
            letterSpacing: "-0.025em",
            color: color[800],
            fontWeight: "bold",
            marginTop: 64,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            marginTop: 32,
            fontSize: 32,
            lineHeight: 1.5,
            maxWidth: 1000,
          }}
        >
          {description}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: await InterRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: await InterBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
