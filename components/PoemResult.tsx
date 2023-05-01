"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PoemCard } from "./PoemCard";

const textDecoder = new TextDecoder();

export function PoemResult() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const generate = searchParams.get("generate");

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const options = localStorage.getItem("options");

      if (options === null || generate !== "true") {
        return;
      }

      const response = await fetch("/api/generate", {
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

      setLoading(false);
      router.replace("/saved");
    })();
  }, [generate, router]);

  if (generate !== "true") {
    return null;
  }

  return (
    <PoemCard>
      {result}
      {loading && (
        <span className="text-gray-300 animate-blink">{"\u258C"}</span>
      )}
    </PoemCard>
  );
}
