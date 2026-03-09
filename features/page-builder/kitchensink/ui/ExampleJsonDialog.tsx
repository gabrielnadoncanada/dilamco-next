"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileJson } from "lucide-react";
import { ExampleJsonPanel } from "./ExampleJsonPanel";

type ExampleJsonDialogProps = {
  title: string;
  examplePath: string | null;
  exampleSource: string | null;
};

export function ExampleJsonDialog(props: ExampleJsonDialogProps) {
  const { title, examplePath, exampleSource } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" size="sm" className="gap-2">
          <FileJson className="size-4" />
          Example JSON
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] max-w-6xl gap-0 overflow-hidden p-0 sm:max-w-6xl">
        <DialogHeader className="border-b border-border/70 px-6 py-5">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Real content loaded from <span className="font-mono">{examplePath ?? "missing example path"}</span>.
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-hidden">
          <ExampleJsonPanel exampleSource={exampleSource} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
