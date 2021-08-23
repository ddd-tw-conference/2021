import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/a-practical-guide-for-domain-driven-design-teams";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "概念模型：What, Why and How",
  description:
    "在產品設計的過程中，如何把用戶場景、準確地提煉成“概念（Concept）”，又如何把“概念（Concept）”整理清楚，構建成領域模型，對於複雜的業務產品是非常核心的；如果一開始概念提煉錯了、模型構建錯了，一定會出現產品不好用、功能不好加，為技術架構帶來災難，進而拖垮整個產品。提煉概念，在體驗設計師、BA和架構師之間其實是相同的；對“概念”達成一致，領域模型也呼之欲出，進而能讓應用和技術的架構設計良好地映射到業務和用戶場景。本次分享從團隊中體驗設計、BA和技術人員的視角，用實例說明如何協同起來構建概念模型，指導技術設計。",
  detail: (
    <>
      <Typography>
        {
          "在產品設計的過程中，如何把用戶場景、準確地提煉成“概念（Concept）”，又如何把“概念（Concept）”整理清楚，構建成領域模型，對於複雜的業務產品是非常核心的；如果一開始概念提煉錯了、模型構建錯了，一定會出現產品不好用、功能不好加，為技術架構帶來災難，進而拖垮整個產品。提煉概念，在體驗設計師、BA和架構師之間其實是相同的；對“概念”達成一致，領域模型也呼之欲出，進而能讓應用和技術的架構設計良好地映射到業務和用戶場景。本次分享從團隊中體驗設計、BA和技術人員的視角，用實例說明如何協同起來構建概念模型，指導技術設計。"
        }
      </Typography>
      <ol>
        <Typography component="li">{"概念？領域？"}</Typography>
        <Typography component="li">{"為什麼概念模型是根本"}</Typography>
        <Typography component="li">{"構建概念模型"}</Typography>
        <ol>
          <Typography component="li">
            {`體驗視角：從用戶場景和機會創想提煉“概念”，創作原型`}
          </Typography>
          <Typography component="li">
            {`需求視角：從原型充實“概念”要素及“概念”之間的關係`}
          </Typography>
          <Typography component="li">
            {`技術視角：從方案視角檢驗概念及其關係，進行反饋和優化`}
          </Typography>
          <Typography component="li">
            {`協同視角：構建概念模型，定義設計原則`}
          </Typography>
        </ol>
        <Typography component="li">{"要點提示"}</Typography>
      </ol>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <Typography>
        {"了解什麼是概念模型、必要性、應用場景及構建概念模型的大致思路和示例"}
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "亢江妹",
      slug: "kangjiangmei",
      image: require("@site/src/speakers/kangjiangmeiProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
