import { Typography } from "@material-ui/core";
import type { ReactNode } from "react";
import { memo } from "react";
import ItemContainer from "./ItemContainer";
import Time from "./Time";

export type BreakProps = {
  title: ReactNode;
  time: ReactNode;
};

export default memo(function Break({ title, time }: BreakProps) {
  return (
    <ItemContainer type="break">
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <Time>{time}</Time>
    </ItemContainer>
  );
});
