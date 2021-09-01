import { css } from "@emotion/css";
import { Typography } from "@material-ui/core";
import { memo, ReactNode } from "react";

export type TimeProps = {
  children?: ReactNode;
};

const cssTime = css`
  label: cssTime;
  font-family: "Wire One", sans-serif;
  font-size: 1.5rem;
  white-space: nowrap;
`;

export default memo(function Time({ children }: TimeProps) {
  return <Typography className={cssTime}>{children}</Typography>;
});
