import Link from "@docusaurus/Link";
import { css } from "@emotion/css";
import useToggle from "@site/src/hook/useToggle";
import Image from "@theme/IdealImage";
import React, { memo, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { animated, config, useSpring, useSprings } from "react-spring";

const imageSize = 100;

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
    slug: "hofstef",
    image: require("@site/src/speakers/hofstefProfileImage.png"),
  },
  {
    slug: "adymitruk",
    image: require("@site/src/speakers/adymitrukProfileImage.png"),
  },
  {
    slug: "evelynvankelle",
    image: require("@site/src/speakers/evelynvankelleProfileImage.png"),
  },
  {
    slug: "kenny_baas",
    image: require("@site/src/speakers/kenny_baasProfileImage.png"),
  },
  {
    slug: "teddy.chen.tw",
    image: require("@site/src/speakers/teddy.chen.twProfileImage.png"),
  },
  {
    slug: "kojenchieh",
    image: require("@site/src/speakers/kojenchiehProfileImage.png"),
  },
  {
    slug: "rexwang",
    image: require("@site/src/speakers/rexwangProfileImage.png"),
  },
  {
    slug: "brucezhang",
    image: require("@site/src/speakers/brucezhangProfileImage.png"),
  },
  {
    slug: "weiwangdavid",
    image: require("@site/src/speakers/weiwangdavidProfileImage.png"),
  },
  {
    slug: "kangjiangmei",
    image: require("@site/src/speakers/kangjiangmeiProfileImage.png"),
  },
  {
    slug: "kimkao",
    image: require("@site/src/speakers/kimkaoProfileImage.png"),
  },
  {
    slug: "fong1143",
    image: require("@site/src/speakers/fong1143ProfileImage.png"),
  },
  {
    slug: "wade.chien",
    image: require("@site/src/speakers/wade.chienProfileImage.png"),
  },
  {
    slug: "twbenlu",
    image: require("@site/src/speakers/twbenluProfileImage.png"),
  },
  {
    slug: "wcre1107",
    image: require("@site/src/speakers/wcre1107ProfileImage.png"),
  },
  {
    slug: "herchg",
    image: require("@site/src/speakers/herchgProfileImage.png"),
  },
  {
    slug: "sandy-wu",
    image: require("@site/src/speakers/sandy-wuProfileImage.png"),
  },
  {
    slug: "river0825",
    image: require("@site/src/speakers/river0825ProfileImage.png"),
  },
  {
    slug: "blues-ho",
    image: require("@site/src/speakers/blues-hoProfileImage.png"),
  },
  {
    slug: "morty",
    image: require("@site/src/speakers/mortyProfileImage.png"),
  },
  {
    slug: "eanlee",
    image: require("@site/src/speakers/eanleeProfileImage.png"),
  },
  {
    slug: "chiwencheng",
    image: require("@site/src/speakers/chiwenchengProfileImage.png"),
  },
  {
    slug: "max",
    image: require("@site/src/speakers/maxProfileImage.png"),
  },
  {
    slug: "msli",
    image: require("@site/src/speakers/msliProfileImage.png"),
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
  const [springs, api] = useSprings(speakers.length, () => ({
    transform: "scale(0)",
  }));
  const { ref, inView } = useInView();
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (started || inView) return;
    api.start((i) => ({ transform: "scale(1)", delay: i * 60 }));
    setStarted(true);
  }, [api, inView, started]);
  return (
    <div className={cssSpeakers} ref={ref}>
      {speakers.map(({ slug, image }, i) => (
        <animated.div key={slug} style={springs[i]}>
          <Speaker slug={slug} image={image} />
        </animated.div>
      ))}
    </div>
  );
});
