import Link from "@docusaurus/Link";
import { css } from "@emotion/css";
import type { TypographyProps } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { memo, useCallback, useState } from "react";
import { animated, config, useSpring } from "react-spring";
import PointRight from "./PointRight";

export type ToScheduleProps = {
  to: string;
} & TypographyProps;

const cssToSchedule = css`
  label: ToSchedule;
  display: flex;
  gap: 0.5em;
`;

export default memo(function ToSchedule({
  to,
  children,
  ...props
}: ToScheduleProps) {
  const [hovered, setHovered] = useState(false);
  const hover = useCallback(() => {
    setHovered(true);
  }, []);
  const unHover = useCallback(() => {
    setHovered(false);
  }, []);
  const styles = useSpring({
    transform: `scale(${hovered ? 1.1 : 1})`,
    config: config.wobbly,
  });
  return (
    <animated.div style={styles} onMouseOver={hover} onMouseOut={unHover}>
      <Typography className={cssToSchedule} component={Link} to={to} {...props}>
        <PointRight hovered={hovered} />
        {children}
      </Typography>
    </animated.div>
  );
});
