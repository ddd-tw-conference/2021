import { Typography } from "@material-ui/core";
import A from "@site/src/component/A";
import React, { memo } from "react";

export type BeforeSessionProps = {
  name: string;
  link: string;
};

export default memo(function BeforeSession({ name, link }: BeforeSessionProps) {
  return (
    <Typography component="li">
      <A href={link}>{name}</A>
    </Typography>
  );
});
