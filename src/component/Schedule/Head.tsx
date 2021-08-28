import { css } from "@emotion/css";
import { Typography } from "@material-ui/core";
import type { ComponentProps } from "react";
import { memo } from "react";

export type HeadProps = ComponentProps<"th">;

const cssInner = css`
  label: Inner;
  border-radius: 4px;
  padding: 0.5em;
  white-space: nowrap;
  background-color: var(--ifm-color-primary-lightest);
  color: var(--ifm-color-primary-darkest);
  html[data-theme="dark"] & {
    background-color: var(--ifm-color-primary-darkest);
    color: var(--ifm-color-primary-);
  }
`;

export default memo(function Head({ children, ...props }: HeadProps) {
  return (
    <th {...props}>
      <div className={cssInner}>
        <Typography variant="h5" component="h2">
          {children}
        </Typography>
      </div>
    </th>
  );
});
