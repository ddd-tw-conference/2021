import { css } from "@emotion/css";
import { useTheme } from "@material-ui/core";
import Layout from "@site/src/component/Layout";
import React, { memo, useMemo } from "react";
import Banner from "./Banner/Banner";
import BasicInfo from "./BasicInfo";
import IntroBlock from "./IntroBlock";

const cssBody = css`
  padding-top: 24px;
  padding-bottom: 80px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default memo(function Home() {
  const theme = useTheme();

  const cssHome = useMemo(
    () => css`
      max-width: ${theme.breakpoints.values.lg}px;
      margin: auto;
      background: var(--body-bg);
    `,
    [theme.breakpoints.values.lg]
  );
  return (
    <Layout>
      <div className={cssHome}>
        <Banner />
        <div className={cssBody}>
          <BasicInfo />
          <IntroBlock />
        </div>
      </div>
    </Layout>
  );
});
