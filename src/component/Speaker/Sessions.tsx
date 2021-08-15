import { css } from "@emotion/css";
import React, { memo, useEffect } from "react";
import { animated, useSprings } from "react-spring";
import type { SessionProps } from "./Session";
import Session from "./Session";

export type SessionsProps = { sessions: SessionProps[] };

const cssSessions = css`
  label: Sessions;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`;

export default memo(function Sessions({ sessions }: SessionsProps) {
  const [springs, api] = useSprings(sessions.length, () => ({
    opacity: 0,
    transform: "translateX(50%)",
  }));
  useEffect(() => {
    api.start((i) => ({
      opacity: 1,
      transform: "translateX(0%)",
      delay: i * 500,
    }));
    // on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={cssSessions}>
      {sessions.map(({ slug, name }, i) => (
        <animated.div key={slug} style={springs[i]}>
          <Session slug={slug} name={name} />
        </animated.div>
      ))}
    </div>
  );
});
