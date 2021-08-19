import { css, cx, keyframes } from "@emotion/css";
import { Container, Paper, Typography } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import useWindowScroll from "@react-hook/window-scroll";
import { useWindowHeight } from "@react-hook/window-size";
import useThemeContext from "@theme/hooks/useThemeContext";
import React, { ReactNode, useMemo, useRef } from "react";
import { animated, config, useSpring } from "react-spring";
import scrollIntoView from "scroll-into-view-if-needed";

const cssIntroCard = css`
  label: IntroCard;
  min-height: 150vh;
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

const cssBottomViewAnchor = css`
  label: cssBottomViewAnchor;
  position: absolute;
  bottom: 0;
  height: 100vh;
`;

const keyframesUpIcon = keyframes`
  label: UpIcon;
  0%, 100% {
    transform: scaleX(1.8) scaleY(1) translateY(0px);
  }
  35% {
    transform: scaleX(1.6) scaleY(1.1) translateY(-10px);
  }
`;

const cssUpIconBlock = css`
  label: UpIconBlock;
  position: absolute;
  top: 8px;
  display: flex;
  width: 100%;
  justify-content: center;
  opacity: 0.7;
  & svg {
    font-size: 48px;
    animation: ${keyframesUpIcon} 1.2s ease-in-out infinite;
  }
`;

const startingPosition = -0.66;
const startedPosition = 0;
const finishingPosition = 0.33;

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
    const rect = ref.current.getBoundingClientRect();
    const y = rect.top;
    const position = -y / rect.height;
    return position;
  }, [windowHeight, windowScroll]);
  const started = useMemo(() => position > startedPosition, [position]);
  const transitionPosition = useMemo(() => {
    const pos =
      (position - startingPosition) / (finishingPosition - startingPosition);
    if (pos < 0) return 0;
    if (pos > 1) return 1;
    return pos;
  }, [position]);
  const articleStyles = useSpring({
    opacity: transitionPosition,
    transform: `translateY(${(1 - transitionPosition) * -50}vh)`,
    config: config.gentle,
  });
  const imgStyles = useSpring({
    filter: [
      `sepia(${started ? 0.4 : 0.1})`,
      `blur(${started ? 2 : 0.5}vw)`,
      `brightness(${!started ? 1.1 : isDarkTheme ? 0.6 : 1})`,
      `grayscale(${!started ? 0 : isDarkTheme ? 0 : 30}%)`,
    ].join(" "),
    config: config.slow,
  });
  const titleStyles = useSpring({
    transform: `translateY(${(1 - transitionPosition) * -25}vh)`,
    config: config.gentle,
  });
  const contentStyles = useSpring({
    transform: `translateY(${(1 - transitionPosition) * 75}vh)`,
    config: config.gentle,
  });
  const bottomViewAnchorRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      className={cssIntroCard}
      ref={ref}
      onClick={() => {
        if (!bottomViewAnchorRef.current) return;
        scrollIntoView(bottomViewAnchorRef.current, { behavior: "smooth" });
      }}
    >
      <div className={cssBottomViewAnchor} ref={bottomViewAnchorRef} />
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
      <div className={cssUpIconBlock}>
        <KeyboardArrowUp />
      </div>
    </div>
  );
}
