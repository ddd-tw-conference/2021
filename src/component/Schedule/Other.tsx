import { Typography } from "@material-ui/core";
import type { ReactNode } from "react";
import { memo } from "react";
import ItemContainer from "./ItemContainer";
import Time from "./Time";

export type OtherProps = {
  title: ReactNode;
  time: ReactNode;
};

export default memo(function Other({ title, time }: OtherProps) {
  return (
    <ItemContainer type="other">
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <Time>{time}</Time>
    </ItemContainer>
  );
});
