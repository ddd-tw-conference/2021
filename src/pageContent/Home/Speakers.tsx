import Link from "@docusaurus/Link";
import { css } from "@emotion/css";
import useToggle from "@site/src/hook/useToggle";
import Image from "@theme/IdealImage";
import React, { memo } from "react";
import { animated, config, useSpring } from "react-spring";

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
  {
    slug: "2954201",
    image: require("@site/src/speakers/2954201ProfileImage.png"),
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
    border-radius: 50%;
    overflow: hidden;
    & > *,
    & > * > *,
    & > * > * > * {
      height: 100%;
      width: 100%;
    }
    & > * {
      border-radius: 50%;
      overflow: hidden;
    }
  `;
  return memo(function Speaker({ slug, image }: SpeakerProps) {
    const toggle = useToggle();
    const style = useSpring({
      transform: toggle.active ? "scale(1.1)" : "scale(1)",
      borderWidth: toggle.active ? 0 : 4,
      config: config.wobbly,
    });
    return (
      <animated.div
        className={cssLink}
        style={style}
        onMouseEnter={toggle.on}
        onMouseLeave={toggle.off}
      >
        <div>
          <Link to={`/speakers/${slug}`}>
            <Image img={image} size={imageSize} height={imageSize} />
          </Link>
        </div>
      </animated.div>
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
