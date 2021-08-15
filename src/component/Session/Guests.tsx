import { css } from "@emotion/css";
import React, { memo } from "react";
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
  return (
    <div className={cssGuests}>
      <ul className={cssList}>
        {guests.map(({ name, slug, image }) => (
          <Guest key={slug} name={name} slug={slug} image={image} />
        ))}
      </ul>
    </div>
  );
});
