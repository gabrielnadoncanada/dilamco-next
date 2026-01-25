import { Asterisk, CornerDownRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Process1Props {
  className?: string;
  [key: string]: any;
  heading: string;
  description: string;
  steps: {
    step: string;
    title: string;
    description: string;
  }[];
  actions?: React.ReactNode;
}

const Process1 = ({
  className,
  heading,
  description,
  steps,
  actions,
  ...props
}: Process1Props) => {
  const process = steps;

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
      <div className="top-10 col-span-3 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
        <div className="relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl">
          {" "}
          <h1 className="w-fit">{heading}</h1>
          <Asterisk className="absolute -top-2 -right-2 size-5 text-orange-500 md:size-10 lg:-right-14" />
        </div>
        <p className="text-base text-foreground/50">{description}</p>

        {actions ? (
          actions
        ) : (
          <Button
            variant="ghost"
            className="flex items-center justify-start gap-2"
          >
            <CornerDownRight className="text-orange-500" />
            Get in touch
          </Button>
        )}
      </div>
      <ul className="relative col-span-3 w-full lg:pl-22">
        {process.map((step, index) => (
          <li
            key={index}
            className="relative flex flex-col justify-between gap-10 border-t py-8 md:flex-row lg:py-10"
          >
            <Illustration className="absolute top-4 right-0" />

            <div className="flex size-12 items-center justify-center bg-muted px-4 py-1 tracking-tighter">
              0{index + 1}
            </div>
            <div className="">
              <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl">
                {step.title}
              </h3>
              <p className="text-foreground/50">{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Process1 };

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
    </svg>
  );
};
