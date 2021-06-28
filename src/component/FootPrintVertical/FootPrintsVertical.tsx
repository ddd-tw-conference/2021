import { Box } from "@material-ui/core";
import React, { memo, useCallback, useEffect } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { animated, useSprings } from "react-spring";
import Foot from "./Foot";

export type FootPrintsVerticalProps = {
  size?: number;
};

const inViewOptions: IntersectionOptions = {
  threshold: 0.3,
};

export default memo(function FootPrintsVertical({
  size = 7,
}: FootPrintsVerticalProps) {
  const inView = useInView(inViewOptions);
  const springItems = useCallback(
    (i: number) => ({
      opacity: inView.inView ? 1 : 0,
      scale: inView.inView ? 1 : 0.8,
      delay: i * 500,
    }),
    [inView.inView]
  );
  const [springs, api] = useSprings(size, springItems);
  useEffect(() => {
    api.stop();
    api.start(springItems);
  }, [api, inView.inView, springItems]);
  return (
    <Box
      width="min-content"
      m="auto"
      display="flex"
      flexDirection="column"
      flexWrap="nowrap"
      alignItems="center"
      gap={2}
      ref={inView.ref}
    >
      {springs.map((styles, i) => (
        <animated.div key={i} style={styles as any}>
          <Foot key={i} foot={i % 2 === 0 ? "left" : "right"} />
        </animated.div>
      ))}
    </Box>
  );
});
