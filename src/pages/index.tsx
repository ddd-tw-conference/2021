import mainBg from "!file-loader!./mainBg.svg";
import wave from "!file-loader!./wave.svg";
import commonBg from "!file-loader!@site/src/bg/common.svg";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { css, keyframes } from "@emotion/css";
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
} from "@material-ui/core";
import { CalendarToday } from "@material-ui/icons";
import Layout from "@site/src/component/Layout";
import Image from "@theme/IdealImage";
import React, { ReactNode, useMemo } from "react";

const bannerHeight = "calc(100vh - var(--ifm-navbar-height) - 126px)";

function IntroCard({
  img,
  title,
  content,
}: {
  img: string;
  title?: ReactNode;
  content?: ReactNode;
}) {
  const width = 360;
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="nowrap"
      borderRadius={4}
      overflow="hidden"
      gap={2}
      alignItems="stretch"
      textAlign="center"
      maxWidth={width}
      height="auto"
      bgcolor="var(--text-bg)"
    >
      <Box
        overflow="hidden"
        sx={{
          position: "relative",
          "&:before": {
            content: `""`,
            paddingTop: "calc(100% * 240 / 360)",
            float: "left",
          },
          "&:after": {
            display: "block",
            content: `""`,
            clear: "both",
          },
        }}
      >
        <Image img={img} max={width} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="nowrap"
        alignItems="stretch"
        textAlign="center"
        gap={2}
        pt={3}
        pb={4}
        pr={2}
        pl={2}
      >
        <Typography variant="h6">{title}</Typography>
        {typeof content === "string" ? (
          <Typography>{content}</Typography>
        ) : (
          content
        )}
      </Box>
    </Box>
  );
}

const keyFramesBgRotate = keyframes`
  from {
    background-position: 1024px;
  }
  to {
    background-position: 3096px;
  }
`;

const cssBannerContainer = css`
  label: BannerContainer;
  position: relative;
  overflow: hidden;
`;

const cssBannerAurora = css`
  label: BannerAurora;
  background-image: linear-gradient(
    to right,
    #333333,
    #333333,
    #333333,
    #333333,
    #34343a,
    #323642,
    #2c394a,
    #223c52,
    #223c52,
    #223c52,
    #223c52,
    #2c394a,
    #323642,
    #34343a,
    #333333,
    #333333,
    #333333,
    #333333
  );
  background-size: 2048px;
  background-repeat: revert;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  animation: ${keyFramesBgRotate} 20s linear infinite;
`;

const cssWave = css`
  label: Wave;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left;
`;

const keyFramesHue = keyframes`
  label: Hue;
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

const cssHue = css`
  label: cssHue;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  animation: ${keyFramesHue} 18s linear infinite;
`;

const cssBannerMain = css`
  label: Main;
  width: 100%;
  --height: max(300px, min(500px, ${bannerHeight}));
  /* max-height: min(${bannerHeight}, 500px);
  min-height: 300px; */
  max-width: min(calc(var(--height) * 3900 / 2300), 100%);
  background: url(${mainBg});
  margin: auto;
  position: relative;
  margin: auto;
  position: relative;
  background-position: top center;
  background-repeat: no-repeat;
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
`;

export default function Home() {
  const theme = useTheme();
  return (
    <Layout>
      <div className={cssBannerContainer}>
        <div className={cssHue}>
          <div className={cssBannerAurora} />
          <div className={cssWave} />
        </div>
        <div className={cssBannerMain} />
      </div>
      <Box
        pt={3}
        pb={10}
        gap={3}
        display="flex"
        flexDirection="column"
        alignItems="flex-center"
        sx={{ background: `url(${commonBg})`, backgroundSize: "cover" }}
      >
        <Container>
          <Box
            width="fit-content"
            bgcolor="var(--text-bg)"
            borderRadius={4}
            margin="auto"
            pt={3}
            pb={3}
            pr={2}
            pl={2}
            gap={4}
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
          >
            <Box display="flex" gap={1} alignItems="center">
              <CalendarToday />
              <Typography component="div">{"10/15, 10/16"}</Typography>
            </Box>
            <Button
              variant="contained"
              disabled
              className={css`
                // ssr issue
                &:disabled {
                  color: rgba(0, 0, 0, 0.3);
                  background-color: rgba(0, 0, 0, 0.12);

                  html[data-theme="dark"] & {
                    color: rgba(255, 255, 255, 0.3);
                    background-color: rgba(255, 255, 255, 0.12);
                  }
                }
              `}
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="inherit">
                  <Translate>{"Join Now"}</Translate>
                </Typography>
                <Typography
                  className={css`
                    font-size: 0.875em;
                    text-transform: none;
                    color: #f00;
                  `}
                >
                  <Translate>{"Coming soon"}</Translate>
                </Typography>
              </Box>
            </Button>
          </Box>
        </Container>
        <Container>
          <Box
            gap={3}
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="stretch"
            sx={useMemo(
              () => ({
                [theme.breakpoints.down("md")]: {
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 5,
                },
                "&>*": {
                  flex: 1,
                  height: "100%",
                  minWidth: "min(360px, 100%)",
                },
              }),
              [theme.breakpoints]
            )}
          >
            <IntroCard
              img={require("./aboutUs.png")}
              title={<Translate>{"About Us"}</Translate>}
              content={
                <>
                  <Typography>
                    {
                      "Domain Driven Design(DDD) Taiwan  is a DDD community that has continued to devote time and effort to promoting DDD in Taiwan."
                    }
                  </Typography>
                  <Typography>
                    {
                      "Established in 2018 by engineers who enjoy learning and sharing software knowledge. Now we are a group of DDD enthusiasts including software engineers, architects, product managers, designers and so on."
                    }
                  </Typography>
                  <Typography>
                    {
                      "Until now, the community has 20 volunteers and we have hosted over 50 meetups in 2 years and keep working on increasing our influence."
                    }
                  </Typography>
                </>
              }
            />
            <IntroCard
              img={require("./pastYear.png")}
              title={<Translate>{"Conference 2020"}</Translate>}
              content={
                <>
                  <Typography>
                    {
                      "Our first conference, DDDTW 2020, was a physical meeting that aims to promote DDD in Taiwan. Through speeches and workshops, the participants perceived that DDD is more than a technical terms, but focusing on business knowledge and problem solving. Last year, over 200 people joined the conference and we got speakers from Taiwan, Europe, and China, learning how DDD is implemented in different places."
                    }
                  </Typography>
                  <Button variant="contained" component={Link} to="/conf2020">
                    <Translate>{"Review 2020"}</Translate>
                  </Button>
                </>
              }
            />
            <IntroCard
              img={require("./thisYear.png")}
              title={<Translate>{"This Year"}</Translate>}
              content={
                <Typography>
                  {`This year, DDDTW 2021, we are going to invite more people with solid experience in practicing DDD in their works. We wish the participants could be encouraged, enlightened, and enchanted by true stories in the industries. The conference has two days, one day for offline workshops, one day for online speeches. Let's follow the footprints of the pioneers from all over the world and "Tackling Complexity in the Heart of Software".`}
                </Typography>
              }
            />
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
