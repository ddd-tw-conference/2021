import { css } from "@emotion/css";
import { Typography } from "@material-ui/core";
import { memo } from "react";

const cls = css`
  text-align: center;
`;

export default memo(function CopyRight() {
  return (
    <Typography component="div" className={cls}>
      {"©2021 Domain Driven Design Taiwan. All rights reserved."}
    </Typography>
  );
});
