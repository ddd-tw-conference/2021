import { css } from "@emotion/css";
import { Container } from "@material-ui/core";
import React, { memo } from "react";
import { useI18n } from ".";
import IntroCard from "./IntroCard";

const cssContainer = css`
  gap: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 5;
  }
  > * {
    flex: 1;
    height: 100%;
    min-width: min(360px, 100%);
  }
`;

export default memo(function () {
  const i18n = useI18n();
  return (
    <Container className={cssContainer}>
      <IntroCard
        img={require("./aboutUs.png")}
        title={i18n.aboutUs}
        content={i18n.aboutUsArticle}
      />
      <IntroCard
        img={require("./pastYear.png")}
        title={i18n.pastYear}
        content={i18n.pastYearArticle}
      />
      <IntroCard
        img={require("./thisYear.png")}
        title={i18n.thisYear}
        content={i18n.thisYearArticle}
      />
    </Container>
  );
});
