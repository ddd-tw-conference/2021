import Speeches, { I18n } from "@site/src/pageContent/schedule/speeches";
import { memo } from "react";

const i18n: I18n = {
  head: {
    foundation: "基石",
    heuristics: "啟發",
    footprints: "足跡",
  },
  other: {
    checkIn: "Check In",
    opening: "Opening",
    break: "中場休息",
    LunchBreak: "Lunch Break",
  },
  session: {
    "getting-to-ddd-pragmatic-or-principled": {
      slug: "getting-to-ddd-pragmatic-or-principled",
      title: "一窺堂奧 - 領域驅動設計：是基於臨場務實還是有原則可參考?",
      guest: [{ name: "Julie Lerman" }],
    },
    "event-modeling-as-a-way-to-entirely-manage-the-software-development-life-cycle":
      {
        slug: "event-modeling-as-a-way-to-entirely-manage-the-software-development-life-cycle",
        title: "通過事件建模作為管理軟件開發生命週期的方式",
        guest: [{ name: "Adam Dymitruk" }],
      },
    "complexity-thinking-in-domain-driven-design": {
      slug: "complexity-thinking-in-domain-driven-design",
      title: "領域驅動設計中的複雜性思維",
      guest: [{ name: "王威" }],
    },
    "continuous-architecture-embracing-multiple-viewpoints-for-sustainable-solutions":
      {
        slug: "continuous-architecture-embracing-multiple-viewpoints-for-sustainable-solutions",
        title: "持續演進的架構 - 擁抱多元利害關係人視角",
        guest: [{ name: "高翊凱" }],
      },
    "the-toolbox-for-initiating-agile-transformation": {
      slug: "the-toolbox-for-initiating-agile-transformation",
      title: "啟動敏捷轉型的工具箱",
      guest: [{ name: "柯仁傑" }],
    },
    "a-practical-guide-for-domain-driven-design-teams": {
      slug: "a-practical-guide-for-domain-driven-design-teams",
      title: "領域驅動設計團隊實踐指南",
      guest: [{ name: "張逸" }],
    },
    "start-from-scratch-essentials-of-game-development-agile-ddd": {
      slug: "start-from-scratch-essentials-of-game-development-agile-ddd",
      title: "從0開始,遊戲開發奧義: Agile x DDD",
      guest: [{ name: "李孟萱" }],
    },
    "tdd-ddd-bdd-well-explained": {
      slug: "tdd-ddd-bdd-well-explained",
      title: "TDD, DDD, & BDD Well Explained",
      guest: [{ name: "劉鳯軒" }],
    },
    "application-modernization-steps-and-implementation": {
      slug: "application-modernization-steps-and-implementation",
      title: "應用現代化的步驟與實作",
      guest: [{ name: "王鈞平" }],
    },
    "concept-model-what-why-and-how": {
      slug: "concept-model-what-why-and-how",
      title: "概念模型：What, Why and How",
      guest: [{ name: "亢江妹" }],
    },
    "that-year-the-pit-we-stepped-on-together": {
      slug: "that-year-the-pit-we-stepped-on-together",
      title: "那一年，我們一起踩過的坑",
      guest: [{ name: "簡維德" }],
    },
    "autonomy-is-that-what-we-really-want": {
      slug: "autonomy-is-that-what-we-really-want",
      title: "我們真的需要 Autonomy 嗎？",
      guest: [{ name: "Evelyn Van Kelle" }, { name: "Kenny Baas-Schwegler" }],
    },
    "insurance-ddd-middle-platform-microservices-cathay-pacific-property-insurance-besafe-platform-experience-sharing":
      {
        slug: "insurance-ddd-middle-platform-microservices-cathay-pacific-property-insurance-besafe-platform-experience-sharing",
        title: "保險×DDD×中台×微服務-國泰產險BeSafe平台經驗分享",
        guest: [{ name: "張安邦" }],
      },
    "it-s-all-about-the-domain-honey-experiences-from-15-years-of-domain-driven-design":
      {
        slug: "it-s-all-about-the-domain-honey-experiences-from-15-years-of-domain-driven-design",
        title: "關乎於領域，親愛的！ 我在領域驅動設計15 年當中的經驗",
        guest: [{ name: "Dr. Carola Lilienthal" }],
      },
    "developing-domain-storytelling-or-how-ddd-influenced-modeling-practices": {
      slug: "developing-domain-storytelling-or-how-ddd-influenced-modeling-practices",
      title: "開發 Domain Storytelling: DDD 如何影響建模實作",
      guest: [{ name: "Dr. Stefan Hofer" }],
    },
    "rising-from-the-ashes-agile-team-rising-model-helps-you-from-defeat-to-victory":
      {
        slug: "rising-from-the-ashes-agile-team-rising-model-helps-you-from-defeat-to-victory",
        title:
          "浴火重生！敏捷團隊重生模型 (Agile Team Rising Model)，從絕敗走向卓越",
        guest: [{ name: "Hermes" }],
      },
    "evolutionary-aws-lambda-with-hexagonal-architecture": {
      slug: "evolutionary-aws-lambda-with-hexagonal-architecture",
      title: "通過六邊形架構進化的 AWS Lambda",
      guest: [{ name: "Luca Mezzalira" }],
    },
    "towards-ddd-and-microservices-based-on-database-formalization-analysis-demand-development-model":
      {
        slug: "towards-ddd-and-microservices-based-on-database-formalization-analysis-demand-development-model",
        title: "以資料庫正規化分析需求開發模式走向DDD與微服務",
        guest: [{ name: "陸浩翔" }],
      },
    "when-dci-conjunction-with-ddd": {
      slug: "when-dci-conjunction-with-ddd",
      title: "當 DCI 遇到 DDD",
      guest: [{ name: "陳建村" }],
    },
  },
};

export default memo(function Page() {
  return <Speeches {...i18n} />;
});
