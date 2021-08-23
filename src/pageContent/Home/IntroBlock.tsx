import { css } from "@emotion/css";
import { memo } from "react";
import { useI18n } from ".";
import IntroCard from "./IntroCard";

const cssContainer = css`
  label: Container;
`;

export default memo(function () {
  const i18n = useI18n();
  return (
    <div className={cssContainer}>
      <IntroCard
        img={require("./aboutUs.jpg")}
        title={i18n.aboutUs}
        content={i18n.aboutUsArticle}
      />
      <IntroCard
        img={require("./pastYear.jpg")}
        title={i18n.pastYear}
        content={i18n.pastYearArticle}
      />
      <IntroCard
        img={require("./thisYear.jpg")}
        title={i18n.thisYear}
        content={i18n.thisYearArticle}
      />
    </div>
  );
});
