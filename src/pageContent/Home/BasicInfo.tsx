import Translate from "@docusaurus/Translate";
import { css } from "@emotion/css";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import { CalendarToday } from "@material-ui/icons";
import useShowInView from "@site/src/hook/useShowInView";
import React, { memo } from "react";
import { IntersectionOptions } from "react-intersection-observer";
import { animated } from "react-spring";

const cssBasicInfo = css`
  width: fit-content;
  border-radius: 4;
  margin: auto;
  padding: 24px 16px;
  gap: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const useShowInViewOptions: IntersectionOptions = {
  rootMargin: "0px",
};

export default memo(function BasicInfo() {
  const showInView = useShowInView(useShowInViewOptions);
  return (
    <Paper
      className={cssBasicInfo}
      component={animated.div}
      style={showInView.style as any}
      ref={showInView.ref}
    >
      <Box display="flex" gap={1} alignItems="center">
        <CalendarToday />
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography component="div">{"10/15 Workshops"}</Typography>
          <Typography component="div">{"10/16 Speeches, online"}</Typography>
        </Box>
      </Box>
      <Button variant="contained" disabled>
        <Box display="flex" flexDirection="column">
          <Typography variant="inherit">
            <Translate>{"Join Now"}</Translate>
          </Typography>
          <Typography
            className={css`
              font-size: 0.875em;
              text-transform: none;
              color: #f00;
            `}
          >
            <Translate>{"Coming soon"}</Translate>
          </Typography>
        </Box>
      </Button>
    </Paper>
  );
});
