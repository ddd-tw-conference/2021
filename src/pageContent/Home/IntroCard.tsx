import { css } from "@emotion/css";
import { Paper, Typography } from "@material-ui/core";
import Image from "@theme/IdealImage";
import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

const width = 360;

const cssIntroCard = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  gap: 16px;
  align-items: stretch;
  text-align: center;
  max-width: ${width}px;
  height: auto;
`;

const cssImgBlock = css`
  overflow: hidden;
  position: relative;
  &:before {
    content: "";
    padding-top: calc(100% * 240 / 360);
    float: left;
  }
  &:after {
    display: block;
    content: "";
    clear: both;
  }
`;

const cssImgInner = css`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  & > * {
    height: 100%;
    width: 100%;
  }
`;

const cssArticle = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  text-align: center;
  gap: 16px;
  padding: 24px 16px 32px 16px;
`;

export default function IntroCard({
  img,
  title,
  content,
}: {
  img: string;
  title?: ReactNode;
  content?: ReactNode;
}) {
  const { ref: refArticle, inView: inViewContent } = useInView();
  const styleArticle = useSpring({
    opacity: inViewContent ? 1 : 0,
    y: inViewContent ? 0 : 16,
  });

  const { ref: refIntroCard, inView: inViewIntroCard } = useInView();
  const styleIntroCard = useSpring({
    opacity: inViewIntroCard ? 1 : 0,
    y: inViewIntroCard ? 0 : 16,
  });
  return (
    <Paper
      component={animated.div}
      className={cssIntroCard}
      style={styleIntroCard as any}
      ref={refIntroCard}
    >
      <div className={cssImgBlock}>
        <div className={cssImgInner}>
          <Image img={img} max={width} />
        </div>
      </div>
      <animated.div
        style={styleArticle}
        className={cssArticle}
        ref={refArticle}
      >
        <Typography variant="h6">{title}</Typography>
        {typeof content === "string" ? (
          <Typography>{content}</Typography>
        ) : (
          content
        )}
      </animated.div>
    </Paper>
  );
}
