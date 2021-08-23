import { ComponentProps, memo } from "react";

export type AProps = Omit<ComponentProps<"a">, "target" | "rel">;

export default memo(function A({ children, ...props }: AProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
});
