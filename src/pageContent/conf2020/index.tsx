import Layout from "@site/src/component/Layout";
import React, { createContext, memo, ReactNode, useContext } from "react";
import Article from "./Article";
import Video from "./Video";

export type I18n = {
  title: string;
  description: string;
  speeches: ReactNode;
  workshops: ReactNode;
  conferencesEveryYears: ReactNode;
  forward2021: ReactNode;
};

const I18nContext = createContext({} as I18n);

export const useI18n = () => useContext(I18nContext);

export default memo(function Conf2020({ i18n }: { i18n: I18n }) {
  return (
    <I18nContext.Provider value={i18n}>
      <Layout title={i18n.title} description={i18n.description}>
        <Video />
        <Article />
      </Layout>
    </I18nContext.Provider>
  );
});
