import bg from "!file-loader!./bg.svg";
import { OpenInNew } from ".pnpm/@material-ui+icons@5.0.0-alpha.37_2dfd7b75e581d7ae5b28282a038747f7/node_modules/@material-ui/icons";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import { css } from "@emotion/css";
import {
  Box,
  Button,
  Container,
  Tab,
  Tabs,
  TabsProps,
  Typography,
} from "@material-ui/core";
import A from "@site/src/component/A";
import FootPrintsVertical from "@site/src/component/FootPrintVertical/FootPrintsVertical";
import Layout from "@site/src/component/Layout";
import MuiTheme from "@site/src/component/MuiTheme";
import Rocket from "@site/src/icon/Rocket";
import throttle from "lodash/throttle";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";

const title = translate({ message: "Review 2020" });
const description =
  "Our first conference, DDDTW 2020, was a physical meeting that aims to promote DDD in Taiwan. Through speeches and workshops, the participants perceived that DDD is more than a technical terms, but focusing on business knowledge and problem solving. Last year, over 200 people joined the conference and we got speakers from Taiwan, Europe, and China, learning how DDD is implemented in different places.";

const breakingWidth = 640;

const cssSplash = css`
  label: Splash;
  background: url(${bg});
  background-position: center;
  background-size: cover;
`;

const cssTabLabel = css`
  label: TabLabel;
  text-align: right;
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

const cssArticle = css`
  label: Article;
  background-size: cover;
`;

const cssBackLink = css`
  label: BackLink;
  transition: transform 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &:hover {
    transform: scale(1.2);
  }
`;

const videoIds = ["ezEALMvRxJY", "WZzdLfewgfw"];

export default memo(() => {
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
    <Layout title={title} description={description}>
      <MuiTheme dark>
        <div className={cssSplash}>
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
                        <Translate>{"Speeches"}</Translate>
                      </div>
                    }
                  />
                  <Tab
                    label={
                      <div className={cssTabLabel}>
                        {"Day 2"}
                        <br />
                        <Translate>{"Workshops"}</Translate>
                      </div>
                    }
                  />
                </Tabs>
                <div className={cssIframe} ref={refYT} />
              </Box>
            </Container>
          </Box>
        </div>
        <div className={cssArticle}>
          <Box mt={-12}>
            <FootPrintsVertical size={3} />
          </Box>
          <Container maxWidth="md">
            <Box
              pt={3}
              pb={3}
              display="flex"
              flexWrap="nowrap"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              gap={3}
            >
              <Typography variant="h1">{title}</Typography>
              <Typography>{description}</Typography>
            </Box>
          </Container>
          <FootPrintsVertical size={4} />
          <Box
            width="fit-content"
            pt={6}
            pb={24}
            m="auto"
            display="flex"
            flexWrap="nowrap"
            flexDirection="column"
            alignItems="center"
            gap={3}
          >
            <Button
              variant="contained"
              size="large"
              className={cssBackLink}
              component={A}
              href="https://conf2020.ddd-tw.com"
              endIcon={<OpenInNew />}
            >
              <Typography variant="h6" component="span">
                <Translate>{"Conference 2020 Official Site"}</Translate>
              </Typography>
            </Button>
            <FootPrintsVertical size={5} />
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={cssBackLink}
              component={Link}
              to="/"
            >
              <Box
                display="flex"
                flexDirection="column"
                fontSize="6em"
                alignItems="center"
                gap={1}
              >
                <Rocket fontSize="inherit" />
                <Typography variant="h3" component="span">
                  <Translate>{"Forward 2021"}</Translate>
                </Typography>
              </Box>
            </Button>
            <FootPrintsVertical size={7} />
          </Box>
        </div>
      </MuiTheme>
    </Layout>
  );
});
