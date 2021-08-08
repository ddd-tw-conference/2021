import Link from "@docusaurus/Link";
import { css } from "@emotion/css";
import Image from "@theme/IdealImage";
import React, { memo } from "react";

const imageSize = 64;

const speakers: SpeakerProps[] = [
  {
    slug: "julielerman",
    image: require("@site/src/speakers/julielermanProfileImage.png"),
  },
  {
    slug: "lucamezzalira",
    image: require("@site/src/speakers/lucamezzaliraProfileImage.png"),
  },
  {
    slug: "cairolali",
    image: require("@site/src/speakers/cairolaliProfileImage.png"),
  },
];

type SpeakerProps = {
  slug: string;
  image: string;
};

const Speaker = (() => {
  const cssLink = css`
    label: Link;
    border-radius: 50%;
    border-style: solid;
    border-color: var(--ifm-link-color);
    border-width: 4px;
    --size: ${imageSize}px;
    height: var(--size);
    width: var(--size);
    & > * {
      border-radius: 50%;
      overflow: hidden;
    }
    & > *,
    & > * > * {
      height: 100%;
      width: 100%;
    }
    transition: border-width 0.3s ease, transform 0.3s ease;
    &:hover {
      border-width: 0px;
      transform: scale(1.1);
    }
  `;
  return memo(function Speaker({ slug, image }: SpeakerProps) {
    return (
      <Link className={cssLink} to={`/speakers/${slug}`}>
        <div>
          <Image img={image} size={imageSize} height={imageSize} />
        </div>
      </Link>
    );
  });
})();

const cssSpeakers = css`
  label: Speakers;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
`;

export default memo(function Speakers() {
  return (
    <div className={cssSpeakers}>
      {speakers.map(({ slug, image }) => (
        <Speaker key={slug} slug={slug} image={image} />
      ))}
    </div>
  );
});
