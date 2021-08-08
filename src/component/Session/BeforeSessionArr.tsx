import { css } from "@emotion/css";
import React, { memo } from "react";
import type { BeforeSessionProps } from "./BeforeSession";
import BeforeSession from "./BeforeSession";

export type BeforeSessionArrProps = { links: BeforeSessionProps[] };

const cssBeforeSessionArr = css`
  label: BeforeSessionArr;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export default memo(function BeforeSessionArr({
  links,
}: BeforeSessionArrProps) {
  return (
    <div className={cssBeforeSessionArr}>
      <ul>
        {links.map(({ name, link }) => (
          <BeforeSession key={link} name={name} link={link} />
        ))}
      </ul>
    </div>
  );
});
