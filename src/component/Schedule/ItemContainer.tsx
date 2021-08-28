import { css, cx } from "@emotion/css";
import type { ComponentProps, ElementType } from "react";
import { memo, useMemo } from "react";

const cssContainer = css`
  label: Container;
  padding: 0.5em;
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;
  border-color: var(--ifm-color-primary-light);
  & > * {
    position: sticky;
    top: 72px;
  }
  html[data-theme="dark"] & {
    border-color: var(--ifm-color-primary-dark);
  }
`;

const cssBreak = css`
  label: Break;
  text-align: center;
  border-color: transparent;
  html[data-theme="dark"] & {
    border-color: transparent;
  }
`;

const cssOther = css`
  label: Break;
  text-align: center;
  border-color: var(--ifm-color-primary-lightest);
  html[data-theme="dark"] & {
    border-color: var(--ifm-color-primary-darkest);
  }
`;

export type ItemProps = {
  Component?: ElementType;
  type?: "normal" | "break" | "other";
} & ComponentProps<"div">;

export default memo(function Item<T extends ElementType>({
  Component = "div",
  type = "normal",
  className,
  children,
  ...props
}: {
  Component?: T;
  type?: "normal" | "break" | "other";
} & ComponentProps<T>) {
  const cls = useMemo(
    () =>
      cx(
        cssContainer,
        type === "break" && cssBreak,
        type === "other" && cssOther,
        className
      ),
    [className, type]
  );
  return (
    <Component className={cls} {...props}>
      <div>{children}</div>
    </Component>
  );
});
