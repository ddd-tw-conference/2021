import { css } from "@emotion/css";
import BackhandIndexPointingRightIcon from "@site/src/icon/BackhandIndexPointingRightIcon";
import { memo, useEffect, useState } from "react";
import { animated, config, useSpring } from "react-spring";

const cssContainer = css`
  label: Container;
  font-size: 0.9em;
  position: relative;
  display: flex;
  align-items: center;
`;

export type PointRightProps = {
  hovered?: boolean;
};

export default memo(function PointRight({ hovered }: PointRightProps) {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((frame) => (frame + 1) % 2);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const styles = useSpring({
    transform: `translateX(${hovered ? 2 : frame ? -4 : -12}px)`,
    config: hovered ? config.wobbly : config.slow,
  });
  return (
    <animated.div className={cssContainer} style={styles}>
      <BackhandIndexPointingRightIcon fontSize="inherit" />
    </animated.div>
  );
});
