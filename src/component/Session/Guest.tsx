import Link from "@docusaurus/Link";
import { css } from "@emotion/css";
import { Typography } from "@material-ui/core";
import Image from "@theme/IdealImage";
import React, { memo } from "react";

const imageSize = 64;

export type GuestProps = {
  name: string;
  slug: string;
  image: string;
};

const cssGuest = css`
  label: Guest;
  list-style: none;
`;

const cssLink = css`
  label: Link;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const cssImg = css`
  label: Img;
  height: ${imageSize}px;
  width: ${imageSize}px;
  overflow: hidden;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: currentColor;
  & > * {
    height: 100%;
    width: 100%;
  }
`;

export default memo(function Guest({ name, slug, image }: GuestProps) {
  return (
    <li className={cssGuest}>
      <Link className={cssLink} to={`/speakers/${slug}`}>
        <div className={cssImg}>
          <Image img={image} height={imageSize} size={imageSize} />
        </div>
        <Typography component="div">{name}</Typography>
      </Link>
    </li>
  );
});
