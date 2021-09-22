import { css } from "@emotion/css";
import A from "@site/src/component/A";
import Image from "@theme/IdealImage";
import type { ReactNode } from "react";
import { memo, useMemo } from "react";

const cssA = css`
  label: A;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, filter 0.3s ease;
  border-radius: 1em;
  padding: 1em;
  overflow: hidden;
  background-color: var(--ifm-color-gray-100);
  @media (min-width: 997px) {
    filter: grayscale(1) brightness(0.8) contrast(0.9) brightness(1.1);
    background-color: transparent;
    html[data-theme="dark"] & {
      filter: grayscale(1) brightness(1.5) contrast(0.5) brightness(1.5);
    }
    &:hover,
    html[data-theme="dark"] &:hover {
      filter: none;
      background-color: var(--ifm-color-gray-100);
    }
  }
`;

export type SponsorProps = {
  link: string;
  logo: ReactNode;
  height: number;
  width: number;
  area: number;
  padding?: boolean;
};

export default memo(function Sponsor({
  link,
  logo,
  height,
  width,
  area,
}: SponsorProps) {
  const size = useMemo(() => {
    const ratio = Math.sqrt(area / height / width);
    return {
      height: ratio * height,
      width: ratio * width,
    };
  }, [area, height, width]);
  return (
    <A href={link} className={cssA}>
      {typeof logo === "string" ? (
        <img
          alt="sponsor"
          className={css`
            label: img;
            width: ${size.width}px;
            height: ${size.height}px;
          `}
          src={logo}
        />
      ) : (
        <div
          className={css`
            label: Image;
            position: relative;
            width: ${size.width}px;
            height: ${size.height}px;
            & > *,
            & > * > * {
              width: 100%;
              height: 100%;
            }
          `}
        >
          <Image img={logo} size={size.width} />
        </div>
      )}
    </A>
  );
});
