"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PoemCard } from "./PoemCard";
import { Options } from "@/types";

const textDecoder = new TextDecoder();

export function PoemResult() {
  const [result, setResult] = useState("");
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState<Options>();

  const router = useRouter();
  const searchParams = useSearchParams();
  const generate = searchParams.get("generate");

  useEffect(() => {
    (async () => {
      const options = localStorage.getItem("options");

      if (options === null || generate !== "true") {
        // Hide the poem result as soon as possible
        setVisible(false);
        router.replace("/saved");
        return;
      }

      setOptions(JSON.parse(options));

      const response = await fetch("/api/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: options,
      });

      if (!response.ok || response.body === null) {
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

      setResult((previous) => {
        fetch("/api/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            options: JSON.parse(options),
            response: previous,
            createdAt: Date.now(),
          }),
        });

        return previous;
      });

      window.history.replaceState(null, document.title, "/saved");
      localStorage.removeItem("options");
      setLoading(false);
    })();
  }, [generate, router]);

  if (generate !== "true" || !visible) {
    return null;
  }

  return (
    <PoemCard
      poem={{
        options,
        response: result,
        createdAt: Date.now(),
      }}
    >
      {result}
      {loading && (
        <span className="text-gray-300 animate-blink">{"\u258C"}</span>
      )}
    </PoemCard>
  );
}
