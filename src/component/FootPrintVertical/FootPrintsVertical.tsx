import { css } from "@emotion/css";
import React, { memo, ReactNode, useCallback, useEffect, useMemo } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { animated, useSprings } from "react-spring";
import Foot from "./Foot";

export type FootPrintsVerticalProps = {
  size?: number;
  invert?: boolean;
  children?: ReactNode;
};

const cls = css`
  width: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  gap: 16px;
`;

const inViewOptions: IntersectionOptions = {
  rootMargin: "0px 0px -30px 0px",
};

const delay = 300;

export default memo(function FootPrintsVertical({
  size = 7,
  invert,
  children,
}: FootPrintsVerticalProps) {
  const inView = useInView(inViewOptions);
  const totalSize = useMemo(
    () =>
      size + (!children ? 0 : Array.isArray(children) ? children.length : 1),
    [children, size]
  );
  const springItems = useCallback(
    (i: number) => ({
      opacity: inView.inView ? 1 : 0,
      scale: inView.inView ? 1 : 0.8,
      delay: i * delay,
    }),
    [inView.inView]
  );
  const [springs, api] = useSprings(totalSize, springItems);
  useEffect(() => {
    api.stop();
    api.start(springItems);
  }, [api, inView.inView, springItems]);
  return (
    <div className={cls} ref={inView.ref}>
      {springs.map((styles, i) =>
        i < size ? (
          <animated.div key={i} style={styles as any}>
            <Foot foot={(i + (invert ? 1 : 0)) % 2 === 0 ? "left" : "right"} />
          </animated.div>
        ) : !children ? null : Array.isArray(children) ? (
          <animated.div key={i} style={styles}>
            {children[i - size]}
          </animated.div>
        ) : (
          <animated.div key={i} style={styles}>
            {children}
          </animated.div>
        )
      )}
    </div>
  );
});
