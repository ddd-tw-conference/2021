import { css } from "@emotion/css";
import React, { memo, useEffect } from "react";
import { animated, useSprings } from "react-spring";
import type { GuestProps } from "./Guest";
import Guest from "./Guest";

export type GuestsProps = { guests: GuestProps[] };

const cssGuests = css`
  label: Guests;
`;

const cssList = css`
  label: List;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-left: 0;
  margin-bottom: 0;
`;

export default memo(function Guests({ guests }: GuestsProps) {
  const [springs, api] = useSprings(guests.length, () => ({
    opacity: 0,
    transform: "scale(0)",
  }));
  useEffect(() => {
    api.start((i) => ({
      opacity: 1,
      transform: "scale(1)",
      delay: i * 300,
    }));
    // on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={cssGuests}>
      <ul className={cssList}>
        {guests.map(({ name, slug, image }, i) => (
          <animated.div key={slug} style={springs[i]}>
            <Guest name={name} slug={slug} image={image} />
          </animated.div>
        ))}
      </ul>
    </div>
  );
});
