import { Typography } from "@material-ui/core";
import A from "@site/src/component/A";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/kenny_baas";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Kenny Baas-Schwegler",
  title: [
    "Deep Democratic Domain-Driven Designer",
    "Socio-technical architect",
  ],
  description:
    "社會科技 (social-technical) 和領域驅動設計架構師。 「深度民主 Deep Democracy 」視覺和協作建模的推動者。",
  detail: (
    <>
      <Typography>
        {
          "社會科技 (social-technical) 和領域驅動設計架構師。 「深度民主 Deep Democracy 」視覺和協作建模的推動者。"
        }
      </Typography>
      <Typography>
        {
          "很多知識都在設計和建模軟體時被丟失了—— 在傳話遊戲中層層轉達中遺失，由於在沒有共享語言、以及沒有視覺化圖像和發揮多元觀點的智慧下就想討論複雜性，溝通反而令人更加疑惑。在開發軟體時丟失的知識會影響軟體產品的可持續性、質量和價值。 Kenny Baas-Schwegler 是一位社會科技系統架構師。他融合了領域驅動設計和持續交付等 IT 方法，並通過使用可視化協作實踐、Cynefin 框架和深度民主來促進變革。 "
        }
      </Typography>
      <Typography>
        {
          "Kenny 授權並協作使組織、團隊和人群能夠設計和構建可持續的優良軟體產品。 Kenny 的核心原則之一是共享知識。為此，他在自己的網站 "
        }
        <A href="https://baasie.com/">{"baasie.com"}</A>
        {
          " 上寫了一篇博客，並幫助策劃了 Leanpub 圖書視覺協作工具。除了寫作之外，他還作為 Virtual Domain-Driven Design ("
        }
        <A href="https://virtualddd.com/">{"virtualddd.com"}</A>
        {
          ") 和 Domain Driven Design Nederland 的組織者分享了領域驅動設計社群的經驗。他喜歡通過在會議和聚會上擔任公開演講者，發表演講和帶領實作工作坊。"
        }
      </Typography>
    </>
  ),
  sessions: [
    {
      slug: "autonomy-is-that-what-we-really-want",
      name: "我們真的需要 Autonomy 嗎？",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
