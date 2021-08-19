import { css } from "@emotion/css";
import { useTheme } from "@material-ui/core";
import Layout from "@site/src/component/Layout";
import React, {
  createContext,
  memo,
  ReactNode,
  useContext,
  useMemo,
} from "react";
import Banner from "./Banner/Banner";
import BasicInfo from "./BasicInfo";
import IntroBlock from "./IntroBlock";

export type I18n = {
  description: string;
  aboutUs: ReactNode;
  aboutUsArticle: ReactNode;
  pastYear: ReactNode;
  pastYearArticle: ReactNode;
  thisYear: ReactNode;
  thisYearArticle: ReactNode;
  joinNow: ReactNode;
};

const I18nContext = createContext({} as I18n);

export const useI18n = () => useContext(I18nContext);

const cssBody = css`
  padding-top: 24px;
  padding-bottom: 80px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default memo(function Home({ i18n }: { i18n: I18n }) {
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
    <I18nContext.Provider value={i18n}>
      <Layout description={i18n.description}>
        <div className={cssHome}>
          <Banner />
          <div className={cssBody}>
            <BasicInfo />
          </div>
          <IntroBlock />
        </div>
      </Layout>
    </I18nContext.Provider>
  );
});
