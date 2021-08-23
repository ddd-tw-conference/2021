import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/brucezhang";
import escape from "lodash/escape";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "張逸",
  title: [escape("《解構領域驅動設計》作者"), escape("場量科技聯合創始人")],
  description:
    "張逸，高質量編碼實踐者，領域驅動設計佈道師，微服務系統架構師，大數據平台架構師，敏捷轉型諮詢師。熱衷於程式語言學習與技藝提升，致力於將企業架構、精實需求管理、領域驅動設計與微服務架構完美結合，打造面向企業的業務中台；致力於將資料倉儲、資料串流處理、機器學習與高性能存儲完美結合，打造面向行業的智能數據中台。",
  detail: (
    <Typography>
      {
        "張逸，高質量編碼實踐者，領域驅動設計佈道師，微服務系統架構師，大數據平台架構師，敏捷轉型諮詢師。熱衷於程式語言學習與技藝提升，致力於將企業架構、精實需求管理、領域驅動設計與微服務架構完美結合，打造面向企業的業務中台；致力於將資料倉儲、資料串流處理、機器學習與高性能存儲完美結合，打造面向行業的智能數據中台。"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "a-practical-guide-for-domain-driven-design-teams",
      name: "領域驅動設計團隊實踐指南",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
