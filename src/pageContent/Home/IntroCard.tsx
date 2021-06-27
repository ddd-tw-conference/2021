import { css } from "@emotion/css";
import { Paper, Typography } from "@material-ui/core";
import useShowInView from "@site/src/hook/useShowInView";
import Image from "@theme/IdealImage";
import React, { ReactNode } from "react";
import { animated } from "react-spring";

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
  const introCardShowInView = useShowInView();
  const articleShowInView = useShowInView();
  return (
    <Paper
      component={animated.div}
      className={cssIntroCard}
      style={introCardShowInView.style as any}
      ref={introCardShowInView.ref}
    >
      <div className={cssImgBlock}>
        <div className={cssImgInner}>
          <Image img={img} max={width} />
        </div>
      </div>
      <animated.div
        className={cssArticle}
        style={articleShowInView.style}
        ref={articleShowInView.ref}
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
