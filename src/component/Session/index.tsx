import bg from "!file-loader!@site/asset/image/bg.svg";
import { css } from "@emotion/css";
import { Collapse, Container, Slide, Typography } from "@material-ui/core";
import Layout from "@site/src/component/Layout";
import useShowUp from "@site/src/hook/useShowUp";
import type { ReactNode } from "react";
import React, { memo } from "react";
import { animated, config, useSpring } from "react-spring";
import MuiTheme from "../MuiTheme";
import type { BeforeSessionArrProps } from "./BeforeSessionArr";
import BeforeSessionArr from "./BeforeSessionArr";
import type { GuestsProps } from "./Guests";
import Guests from "./Guests";

export type SessionI18n = {
  name: string;
  description: string;
  detail: ReactNode;
  beforeSession: BeforeSessionArrProps["links"];
  guests: GuestsProps["guests"];
};

export type SessionCommonInfo = {};

export type SessionProps = SessionI18n & SessionCommonInfo;

const cssTitle = css`
  label: Title;
  padding: 32px 0 16px 0;
  background: url(${bg});
  background-size: cover;
  background-position: center;
  color: var(--ifm-color-gray-100);
`;

const cssContainer = css`
  label: Container;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const cssDetail = css`
  label: Detail;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default memo(function ({
  name,
  description,
  detail,
  beforeSession,
  guests,
}: SessionProps) {
  const showUp = useShowUp();
  const slideUpStyles = useSpring({
    opacity: showUp ? 1 : 0,
    transform: showUp ? "translateY(0px)" : "translateY(64px)",
    config: config.slow,
  });
  return (
    <Layout title={name} description={description}>
      <div className={cssTitle}>
        <MuiTheme dark>
          <Container maxWidth="md" className={cssContainer}>
            <Slide in={showUp}>
              <Typography variant="h4" component="h1" color="inherit">
                {name}
              </Typography>
            </Slide>
            {<Guests guests={guests} />}
          </Container>
        </MuiTheme>
      </div>
      <animated.div style={slideUpStyles}>
        <Collapse in={showUp}>
          <Container maxWidth="md">
            <div className={cssDetail}>{detail}</div>
            {BeforeSessionArr && BeforeSessionArr.length > 0 ? (
              <BeforeSessionArr links={beforeSession} />
            ) : null}
          </Container>
        </Collapse>
      </animated.div>
    </Layout>
  );
});
