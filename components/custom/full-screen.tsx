import { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

const fullScreen = cva(["w-full h-full flex items-center justify-center"], {
  variants: {
    orientation: {
      row: "flex-row",
      column: "flex-col",
    },
  },
  defaultVariants: {
    orientation: "column",
  },
});

export interface FullScreenProps extends VariantProps<typeof fullScreen> {
  children: ReactNode;
  className?: string;
}

export default function FullScreen({
  children,
  orientation,
  className,
}: FullScreenProps) {
  return (
    <div
      className={clsx(
        fullScreen({
          orientation,
        }),
        className,
      )}
    >
      {children}
    </div>
  );
}
