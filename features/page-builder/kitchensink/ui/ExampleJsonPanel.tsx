"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

type ExampleJsonPanelProps = {
  exampleSource: string | null;
};

export function ExampleJsonPanel(props: ExampleJsonPanelProps) {
  const { exampleSource } = props;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => {
      setCopied(false);
    }, 1500);

    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    if (!exampleSource) return;

    try {
      await navigator.clipboard.writeText(exampleSource);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="bg-black text-white relative ">
      <Button
        type="button"
        variant="ghost"
        size="small"
        onClick={handleCopy}
        disabled={!exampleSource}
        className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white absolute top-4 right-4"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        {copied ? "Copied" : "Copy"}
      </Button>
      <pre className="min-w-max whitespace-pre  text-xs leading-6 p-4 ">
        <code>{exampleSource ?? "No valid example.json content loaded."}</code>
      </pre>
    </div >
  );
}
