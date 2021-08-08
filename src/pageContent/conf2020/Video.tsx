import bg from "!file-loader!@site/asset/image/bg.svg";
import { css } from "@emotion/css";
import { Box, Container, Tab, Tabs, TabsProps } from "@material-ui/core";
import MuiTheme from "@site/src/component/MuiTheme";
import throttle from "lodash/throttle";
import React, {
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { useI18n } from ".";

export type I18n = {
  title: string;
  description: string;
  speeches: ReactNode;
  workshops: ReactNode;
  conferencesEveryYears: ReactNode;
  forward2021: ReactNode;
};

const breakingWidth = 640;

const cssVideoBlock = css`
  label: Splash;
  background: url(${bg});
  background-position: center;
  background-size: cover;
`;

const classesTabs: TabsProps["classes"] = {
  flexContainer: css`
    align-items: flex-end;
  `,
};

const cssTabLabel = css`
  label: TabLabel;
  text-align: right;
  @media (max-width: ${breakingWidth}px) {
    text-align: left;
  }
`;

const cssContainerNoPadding = css`
  label: ShowBox;
  margin-left: 0;
  margin-right: 0;
  padding-right: 0;
  padding-left: 0;
`;

const cssIframe = css`
  label: Iframe;
  aspect-ratio: 560 / 315;
  flex: 1;
  @media (max-width: ${breakingWidth}px) {
    width: 100%;
  }
`;

const videoIds = ["ezEALMvRxJY", "WZzdLfewgfw"];

export default memo(function Video() {
  const i18n = useI18n();
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState<number>(undefined);
  const wide = width === undefined || width > breakingWidth;
  const refYT = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!refYT.current) return;
    const player = new YT.Player(refYT.current, {
      height: "100%",
      width: "100%",
      videoId: videoIds[value],
      playerVars: {
        autoplay: 1,
      },
      events: {
        onStateChange: (e) => {
          if (e.data === YT.PlayerState.ENDED) {
            setValue((value) => (value + 1) % videoIds.length);
          }
        },
      },
    });
    return () => {
      player.destroy();
    };
  }, [value]);
  useEffect(() => {
    let cancel = false;
    const handleResize = () => {
      if (cancel) return;
      setWidth(window.innerWidth);
    };
    handleResize();
    const throttleResize = throttle(handleResize, 300);
    window.addEventListener("resize", throttleResize);
    return () => {
      cancel = true;
      window.removeEventListener("resize", throttleResize);
    };
  }, []);
  const handleChange: TabsProps["onChange"] = useCallback(
    (e: any, value: number) => {
      setValue(value);
    },
    []
  );
  return (
    <MuiTheme dark>
      <div className={cssVideoBlock}>
        <Box pt={3} pb={18}>
          <Container
            maxWidth="md"
            className={wide ? undefined : cssContainerNoPadding}
          >
            <Box
              display="flex"
              flexWrap="nowrap"
              flexDirection={wide ? "row" : "column"}
            >
              <Tabs
                orientation={wide ? "vertical" : "horizontal"}
                classes={classesTabs}
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Conf 2020 Recap Videos"
              >
                <Tab
                  label={
                    <div className={cssTabLabel}>
                      {"Day 1"}
                      <br />
                      {i18n.speeches}
                    </div>
                  }
                />
                <Tab
                  label={
                    <div className={cssTabLabel}>
                      {"Day 2"}
                      <br />
                      {i18n.workshops}
                    </div>
                  }
                />
              </Tabs>
              <div className={cssIframe} ref={refYT} />
            </Box>
          </Container>
        </Box>
      </div>
    </MuiTheme>
  );
});
