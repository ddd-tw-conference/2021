import { css } from "@emotion/css";
import React, { memo } from "react";
import { narrowBreakPoint } from "./css";
import type { LinkProps } from "./Link";
import Link from "./Link";

export type LinksProps = { links: LinkProps[] };

const cssLinks = css`
  label: Links;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  ${narrowBreakPoint} {
    justify-content: center;
  }
`;

export default memo(function Links({ links }: LinksProps) {
  return (
    <div className={cssLinks}>
      {links.map(({ type, link }) => (
        <Link key={type} type={type} link={link} />
      ))}
    </div>
  );
});
