import { css } from "@emotion/css";
import { memo, useEffect } from "react";
import { animated, useSprings } from "react-spring";
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
  const [springs, api] = useSprings(links.length, () => ({
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
    <div className={cssLinks}>
      {links.map(({ type, link }, i) => (
        <animated.div key={type} style={springs[i]}>
          <Link type={type} link={link} />
        </animated.div>
      ))}
    </div>
  );
});
