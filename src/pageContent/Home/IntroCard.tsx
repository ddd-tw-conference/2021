import { css, cx } from "@emotion/css";
import { Container, Paper, Typography } from "@material-ui/core";
import useWindowScroll from "@react-hook/window-scroll";
import { useWindowHeight } from "@react-hook/window-size";
import useThemeContext from "@theme/hooks/useThemeContext";
import React, { ReactNode, useMemo, useRef } from "react";
import { animated, config, useSpring } from "react-spring";

const cssIntroCard = css`
  label: IntroCard;
  height: 200vh;
  position: relative;
`;

const cssImgBlock = css`
  label: ImgBlock;
  overflow: hidden;
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  overflow: hidden;
`;

const cssImgBlockInner = css`
  label: ImgBlockInner;
  margin: -0.8vw;
  flex: 1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const cssArticle = css`
  label: Article;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const cssArticlePaper = css`
  label: ArticlePaper;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 36px 18px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.72);

  html[data-theme="dark"] & {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const cssArticleContent = css`
  label: ArticleContent;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const start = -0.2;
const finish = 0;

export default function IntroCard({
  img,
  title,
  content,
}: {
  img: string;
  title?: ReactNode;
  content?: ReactNode;
}) {
  const { isDarkTheme } = useThemeContext();
  const ref = useRef<HTMLDivElement | null>(null);
  const windowHeight = useWindowHeight();
  const windowScroll = useWindowScroll(30);
  const position = useMemo(() => {
    if (!ref.current) return 0;
    if (!windowHeight) return 0;
    // useEffect deps
    if (windowScroll) (() => {})();
    const y = ref.current.getBoundingClientRect().top;
    const position = -y / (windowHeight * 1.5);
    return position;
  }, [windowHeight, windowScroll]);
  const transitionPosition = useMemo(() => {
    const pos = (position - start) / (finish - start);
    if (pos < 0) return 0;
    if (pos > 1) return 1;
    return pos;
  }, [position]);
  const articleStyles = useSpring({
    opacity: transitionPosition,
    transform: `translateY(${(1 - transitionPosition) * -30}px)`,
    config: config.wobbly,
  });
  const imgStyles = useSpring({
    filter: `sepia(${0.1 + 0.3 * transitionPosition}) blur(${
      0.5 + transitionPosition * 0.5
    }vw) brightness(${
      1.1 - transitionPosition * (isDarkTheme ? 0.5 : 0.1)
    }) grayscale(${isDarkTheme ? 0 : transitionPosition * 30}%)`,
    config: config.gentle,
  });
  const titleStyles = useSpring({
    transform: `translateY(${(1 - transitionPosition) * -30}px)`,
    config: config.wobbly,
  });
  const contentStyles = useSpring({
    transform: `translateY(${(1 - transitionPosition) * 60}px)`,
    config: config.wobbly,
  });
  return (
    <div className={cssIntroCard} ref={ref}>
      <div className={cssImgBlock}>
        <animated.div
          className={cx(
            cssImgBlockInner,
            css`
              background-image: url(${img});
            `
          )}
          style={imgStyles}
        />
        <animated.div className={cssArticle} style={articleStyles}>
          <Container maxWidth="sm">
            <Paper className={cssArticlePaper}>
              <animated.div style={titleStyles}>
                <Typography variant="h4" component="h1">
                  {title}
                </Typography>
              </animated.div>
              <animated.div className={cssArticleContent} style={contentStyles}>
                {typeof content === "string" ? (
                  <Typography>{content}</Typography>
                ) : (
                  content
                )}
              </animated.div>
            </Paper>
          </Container>
        </animated.div>
      </div>
    </div>
  );
}
