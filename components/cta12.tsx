interface Cta12Props extends React.ComponentPropsWithoutRef<"div"> {
  heading: string;
  description: string;
  actions?: React.ReactNode;
}

const Cta12 = ({
  heading,
  description,
  actions,
  className,
  ...props
}: Cta12Props) => {
  return (
    <div className={className} {...props}>
      <div className="rounded-lg bg-accent p-8 md:rounded-xl lg:p-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-5xl lg:mb-6 lg:text-6xl">
            {heading}
          </h2>
          <p className="mb-8 text-lg font-medium text-muted-foreground lg:text-xl">
            {description}
          </p>
          {actions}
        </div>
      </div>
    </div>
  );
};

export { Cta12 };
