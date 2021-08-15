import bg from "!file-loader!@site/asset/image/bg.svg";
import { css } from "@emotion/css";
import { Container, Typography } from "@material-ui/core";
import useShowUp from "@site/src/hook/useShowUp";
import Image from "@theme/IdealImage";
import React, { memo, ReactNode, useEffect, useRef } from "react";
import { animated, config, useSpring } from "react-spring";
import Typed from "typed.js";
import Layout from "../Layout";
import MuiTheme from "../MuiTheme";
import { narrowBreakPoint } from "./css";
import type { LinksProps } from "./Links";
import Links from "./Links";
import type { SessionsProps } from "./Sessions";
import Sessions from "./Sessions";

export type SpeakerI18n = {
  name: string;
  realName?: string;
  title: string[];
  description: string;
  detail: ReactNode;
  sessions: SessionsProps["sessions"];
  ogImage?: string;
};

export type SpeakerCommonInfo = {
  links: LinksProps["links"];
  profileImage: string;
};

export type SpeakerProps = SpeakerI18n & SpeakerCommonInfo;

const containerSize = "md" as const;
const imageSize = 300;
const imageBorderWidth = 16;

const cssSpeaker = css`
  label: Speaker;
  --imageSize: 300px;
  ${narrowBreakPoint} {
    --imageSize: 250px;
  }
`;

const cssBanner = css`
  label: Banner;
  background: url(${bg});
  background-position: center;
  background-size: cover;
  color: var(--ifm-color-gray-100);
`;

const cssBannerContainer = css`
  label: BannerContainer;
  height: 100%;
`;

const cssBannerContent = css`
  label: BannerContent;
  min-height: calc(var(--imageSize) / 2);
  padding-left: calc(var(--imageSize) + ${imageBorderWidth * 2}px + 16px);
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  ${narrowBreakPoint} {
    min-height: calc(var(--imageSize) / 2 - 16px);
    padding-top: 16px;
    padding-left: 0;
    padding-bottom: calc(var(--imageSize) / 2);
    align-items: center;
  }
`;

const cssBannerTitle = css`
  label: BannerTitle;
`;

const cssUnderBannerContainer = css`
  label: UnderBannerContainer;
  position: relative;
`;

const cssImgPosition = css`
  label: ImgPosition;
  position: absolute;
  top: 0;
  left: auto;
  height: 0;
  width: 0;
  transform: translateX(16px);
  pointer-events: none;
  ${narrowBreakPoint} {
    left: 50%;
    transform: translateX(calc(0px - var(--imageSize) / 2));
  }
`;

const cssImgAni = css`
  label: ImgAni;
  height: var(--imageSize);
  width: var(--imageSize);
  transform-origin: top;
`;

const cssImg = css`
  label: Img;
  height: 100%;
  width: 100%;
  border-width: ${imageBorderWidth}px;
  border-color: var(--ifm-background-color);
  border-style: solid;
  border-radius: 50%;
  overflow: hidden;
  transform: translateY(-50%);
  & > * {
    height: 100%;
    width: 100%;
  }
`;

const cssMainBlock = css`
  label: MainBlock;
  display: flex;
  flex-direction: column;
  gap: 16px;
  --mainBlockMarginTop: 16px;
  margin-top: var(--mainBlockMarginTop);
  margin-bottom: 32px;
`;

const cssInfo = css`
  label: Info;
  min-height: calc(var(--imageSize) / 2 - var(--mainBlockMarginTop));
  padding-left: calc(var(--imageSize) + ${imageBorderWidth * 2}px + 16px);
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${narrowBreakPoint} {
    min-height: auto;
    padding-top: calc(var(--imageSize) / 2 + ${imageBorderWidth}px);
    padding-left: 0;
  }
`;

const cssDetail = css`
  label: Detail;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const useProfileImageStyles = () => {
  const show = useShowUp();
  const styles = useSpring({
    transform: show ? "scale(1)" : "scale(0)",
    config: config.slow,
  });
  return styles;
};

export default memo(function Speaker({
  name,
  realName,
  title,
  description,
  detail,
  links,
  profileImage,
  ogImage,
  sessions,
}: SpeakerProps) {
  const refTitle = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (title.length === 0) return;
    if (!refTitle.current) return;
    console.log("title", title);
    const typed = new Typed(refTitle.current, {
      strings: title,
      loop: title.length > 1,
      startDelay: 300,
      backDelay: 1000,
      typeSpeed: 60,
    });
    return () => {
      typed.destroy();
    };
  }, [title]);
  const profileImageStyles = useProfileImageStyles();
  return (
    <Layout title={name} description={description} image={ogImage}>
      <div className={cssSpeaker}>
        <div className={cssBanner}>
          <MuiTheme dark>
            <Container maxWidth={containerSize} className={cssBannerContainer}>
              <div className={cssBannerContent}>
                <Typography variant="h4" component="h1" color="inherit">
                  {name}
                </Typography>
                {title.length > 0 ? (
                  <div>
                    <Typography
                      className={cssBannerTitle}
                      component="span"
                      ref={refTitle}
                    />
                  </div>
                ) : null}
              </div>
            </Container>
          </MuiTheme>
        </div>
        <Container maxWidth={containerSize} className={cssUnderBannerContainer}>
          <div className={cssImgPosition}>
            <animated.div className={cssImgAni} style={profileImageStyles}>
              <div className={cssImg}>
                <Image img={profileImage} height={imageSize} size={imageSize} />
              </div>
            </animated.div>
          </div>
          <div className={cssMainBlock}>
            <div className={cssInfo}>
              <Links links={links} />
              <Sessions sessions={sessions} />
            </div>
            <div className={cssDetail}>{detail}</div>
          </div>
        </Container>
      </div>
    </Layout>
  );
});
