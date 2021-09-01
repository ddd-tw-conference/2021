import { css, cx, keyframes } from "@emotion/css";
import { Container, Paper, Typography, useTheme } from "@material-ui/core";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import useWindowScroll from "@react-hook/window-scroll";
import useWindowSizeCsr from "@site/src/hook/useWindowSizeCsr";
import Image from "@theme/IdealImage";
import { ReactNode, useMemo, useRef } from "react";
import { animated, config, useSpring } from "react-spring";
import scrollIntoView from "scroll-into-view-if-needed";

const cssIntroCard = css`
  label: IntroCard;
  min-height: 150vh;
  position: relative;
`;

const cssSticky = css`
  label: Sticky;
  overflow: hidden;
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  overflow: hidden;
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
  background-color: rgba(255, 255, 255, 0.8);

  html[data-theme="dark"] & {
    background-color: rgba(0, 0, 0, 0.8);
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
  const theme = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const [windowWidth, windowHeight] = useWindowSizeCsr();
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
  const imgWidth = useMemo(() => {
    if (!windowHeight || !windowWidth) return 0;
    const width = Math.ceil((windowHeight * 1920) / 1280);
    const minWidth = Math.min(windowWidth, theme.breakpoints.values.lg);
    return Math.max(width, minWidth);
  }, [theme.breakpoints.values.lg, windowHeight, windowWidth]);
  const imgHeight = useMemo(
    () => Math.floor((imgWidth / 1920) * 1280),
    [imgWidth]
  );
  const cssImg = useMemo(() => {
    if (!windowHeight || !imgWidth) return "";
    return css`
      label: Img;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: ${imgHeight}px;
      width: ${imgWidth}px;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      & > * {
        width: 100%;
        height: 100%;
      }
    `;
  }, [imgHeight, imgWidth, windowHeight]);
  const cssImgBlur = useMemo(() => {
    if (!imgWidth) return "";
    return css`
      label: ImgBlur;
      height: ${imgHeight * 1.05}px;
      width: ${imgWidth * 1.05}px;
      filter: blur(5px);
    `;
  }, [imgHeight, imgWidth]);
  const imgBlurStyles = useSpring({
    opacity: started ? 1 : 0,
    config: config.gentle,
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
      <div className={cssSticky}>
        <div className={cssImg}>
          <Image img={img} />
          <animated.div
            className={cx(cssImg, cssImgBlur)}
            style={imgBlurStyles}
          >
            <Image img={img} />
          </animated.div>
        </div>
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
