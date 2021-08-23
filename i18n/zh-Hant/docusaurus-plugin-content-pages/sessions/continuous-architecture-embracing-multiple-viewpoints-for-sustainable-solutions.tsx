import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/continuous-architecture-embracing-multiple-viewpoints-for-sustainable-solutions";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "持續演進的架構 - 擁抱多元利害關係人視角",
  description:
    "在建構系統架構時，經常期望可以建構可長遠維運的良好架構，但是往往囿於一時的熱門技術導入，缺乏了對整體發展的關注。持續良好架構主要築基於對於多重視角的綜合整理，並且依循領域驅動設計的業務發展變遷推進，若能兼顧著從安全、時間、與應對業務變動的轉折上，找到一個指引設計的方式，那麼建構出來的解決方案方可持續運行。",
  detail: (
    <>
      <Typography>
        {
          "在建構系統架構時，經常期望可以建構可長遠維運的良好架構，但是往往囿於一時的熱門技術導入，缺乏了對整體發展的關注。持續良好架構主要築基於對於多重視角的綜合整理，並且依循領域驅動設計的業務發展變遷推進，若能兼顧著從安全、時間、與應對業務變動的轉折上，找到一個指引設計的方式，那麼建構出來的解決方案方可持續運行。"
        }
      </Typography>
      <Typography>
        {
          "在持續演進的架構設計中，主要萃取了來自知名了 System Software Architecture 的核心思想，擁抱多元的系統構面設計，並融入常見的領域驅動設計中的戰略設計指引，以及在面對評估戰術實踐設計時，如何選擇採納市場上的成熟方案作出選擇指南。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <Typography>{"聽眾應當能在參與本議程後理解到"}</Typography>
      <ol>
        <Typography component="li">{"什麼是持續架構"}</Typography>
        <Typography component="li">
          {"如何從多元視角中兼顧不同角色的期望"}
        </Typography>
        <Typography component="li">{"如何將之與領域驅動設計銜接"}</Typography>
        <Typography component="li">{"對應市場可行方案的選擇作法"}</Typography>
      </ol>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "高翊凱",
      slug: "kimkao",
      image: require("@site/src/speakers/kimkaoProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
