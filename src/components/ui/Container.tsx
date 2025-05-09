import React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  paddingX?: "none" | "sm" | "md" | "lg";
  paddingY?: "none" | "sm" | "md" | "lg";
  as?: React.ElementType;
};

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-screen-2xl",
  full: "w-full",
};

const paddingX = {
  none: "",
  sm: "px-4",
  md: "px-4 sm:px-6",
  lg: "px-4 sm:px-6 lg:px-8",
};

const paddingY = {
  none: "",
  sm: "py-4",
  md: "py-8",
  lg: "py-12",
};

export const Container = ({
  children,
  className,
  size = "lg",
  paddingX: px = "md",
  paddingY: py = "none",
  as: Component = "div",
}: ContainerProps) => {
  return (
    <Component
      className={cn(
        "mx-auto",
        containerSizes[size],
        paddingX[px],
        paddingY[py],
        className
      )}
    >
      {children}
    </Component>
  );
}; 