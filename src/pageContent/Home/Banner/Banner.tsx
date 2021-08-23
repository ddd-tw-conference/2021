import upper from "!file-loader!./upper.svg";
import { css } from "@emotion/css";
import useThemeContext from "@theme/hooks/useThemeContext";
import Granim from "granim";
import { memo, useEffect, useMemo, useRef, useState } from "react";

const bannerHeight = "calc(100vh - var(--ifm-navbar-height) - 126px)";

const cssBannerContainer = css`
  label: BannerContainer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
`;

const cssUpper = css`
  background: url(${upper});
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;
  flex: 1;
  transform: scale(1.1) translateX(0%) translateY(3%);
  --height: max(300px, min(500px, ${bannerHeight}));
  margin: auto;
  max-width: min(calc(var(--height) * 3900 / 2300), 100%);
  &:before {
    content: "";
    padding-top: calc(100% * 2300 / 3900);
    float: left;
  }
  &:after {
    display: block;
    content: "";
    clear: both;
  }
  transition: filter 0.3s ease-in-out;
  html[data-theme="light"] & {
    filter: invert(1);
  }
`;

const cssWaveLayer = css`
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: filter 0.3s ease-in-out;
`;

const cssGranim = css`
  position: absolute;
  top: 0;
  left: 0;
`;

const cssWavePath = css`
  fill: #fff;
  isolation: isolate;
  opacity: 0.02;
  transition: fill 0.3s ease-in-out, opacity 0.3s ease-in-out;
  html[data-theme="light"] & {
    opacity: 0.3;
  }
`;

const initRects = {
  width: 0,
  height: 0,
};

export default memo(function Banner() {
  const { isDarkTheme } = useThemeContext();
  const [rects, setRects] = useState(initRects);
  const [inited, setInited] = useState(false);
  const granimInstance = useRef(null);
  const refContainer = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let cancel = false;
    const res = () => {
      if (cancel) return;
      if (!refContainer.current) return;
      const rects = refContainer.current.getBoundingClientRect();
      setRects({
        width: rects.width,
        height: rects.height,
      });
    };
    res();
    setInited(true);
    const handler = () => {
      if (granimInstance.current) {
        granimInstance.current.pause();
      }
      res();
    };
    window.addEventListener("resize", handler);
    return () => {
      cancel = true;
      window.removeEventListener("resize", handler);
    };
  }, []);
  useEffect(() => {
    let cancel = false;
    setTimeout(() => {
      if (!cancel && granimInstance.current) {
        granimInstance.current.play();
      }
    }, 300);
    return () => {
      cancel = true;
    };
  }, [rects]);
  useEffect(() => {
    if (!inited) return;
    granimInstance.current = new Granim({
      element: `.${cssGranim}`,
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ["#333333", "#0d1b2a"],
            ["#1b263b", "#415a77"],
            ["#522e38", "#602437"],
            ["#283d3b", "#197278"],
          ],
        },
        light: {
          gradients: [
            ["#b9b9b9", "#becbe0"],
            ["#d0dbf6", "#ffffff"],
            ["#ffe7f2", "#ffdef0"],
            ["#e0faf6", "#ebffff"],
          ],
        },
      },
    });
    return () => {
      if (!granimInstance.current) return;
      granimInstance.current.destroy();
      granimInstance.current = null;
    };
  }, [inited]);
  useEffect(() => {
    if (!inited) return;
    if (!granimInstance.current) return;
    granimInstance.current.changeState(isDarkTheme ? "default-state" : "light");
  }, [inited, isDarkTheme]);

  const cssWave = useMemo(
    () => css`
      height: 300px;
      width: 848px;
      transform: scaleX(max(${(rects.width / 848) * 2}, 1))
        scaleY(max(${rects.height / 300}, 1));
      z-index: 1;
    `,
    [rects.height, rects.width]
  );
  return (
    <div className={cssBannerContainer} ref={refContainer}>
      <div className={cssUpper} />
      <div className={cssWaveLayer}>
        <svg viewBox="0 0 3913.89 2307.28" className={cssWave}>
          <path
            className={cssWavePath}
            d="M-221.87,313.84s1275.69,394.55,1863.72,423S3335,561.11,3651.8,568.64C4214.63,582,4433.18,701.2,4433.18,701.2l-45.68,825.94s-1426.42,288-1936.42,294.58c-490,6.31-1497.36-23.14-1930.58,61-378.83,73.56-771.89,312.84-771.89,312.84Z"
          />
          <path
            className={cssWavePath}
            d="M-241.44,496s1351.61-97,1939.64-68.56S3280.48,871.63,3593,923.72c567.81,94.64,818.07,94.64,818.07,94.64l-45.68,570.75S3572.23,2053.8,2804.63,1847.7c-473.29-127.07-1432.4-377.19-2229.45-267.83C192.86,1632.32-268.44,1883-268.44,1883Z"
          />
          <path
            className={cssWavePath}
            d="M-163,639.41s1348.86-114.66,1936.89-86.22,1500.9,377.22,1817.69,370.52c597.33-12.64,892.85-31.15,892.85-31.15l-62.29,782.8s-760,172.34-1441,29.07c-476.4-100.22-1505.84-89.21-2302.89,20.15C295.91,1777-190.32,2029.52-190.32,2029.52Z"
          />
          <path
            className={cssWavePath}
            d="M-105.56,708.09s1348.87-114.67,1936.89-86.22S3438.07,902.17,3753.5,872.13C4327.63,817.45,4548.44,889,4548.44,889l-45.68,978.74s-912,818.55-1523.17,310.42C2605.25,1866.91,1532.7,1683.94,735.65,1793.3c-382.31,52.46-868.55,304.94-868.55,304.94Z"
          />
        </svg>
      </div>
      <canvas
        className={cssGranim}
        width={rects.width}
        height={rects.height}
      ></canvas>
    </div>
  );
});
