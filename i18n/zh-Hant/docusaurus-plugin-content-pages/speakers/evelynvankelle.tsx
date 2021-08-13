import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/evelynvankelle";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Evelyn Van Kelle",
  title: [
    "Strategic Software Delivery Consultant",
    "Socio-technical architect",
    "Public speaker",
  ],
  description:
    "試圖梳理「社會科技」 (socio-technical，強調組織的技術與人的因素的最佳結合，重新設計完成工作的方法)在軟體開發的可能性。",
  detail: (
    <>
      <Typography>
        {
          "試圖梳理「社會科技」 (socio-technical，強調組織的技術與人的因素的最佳結合，重新設計完成工作的方法)在軟體開發的可能性。"
        }
      </Typography>
      <Typography>
        {
          "Evelyn van Kelle 是一名戰略性軟體交付顧問，在培訓、建議和指導組織和團隊設計社會科技系統方面擁有豐富的經驗。在優化交付和團隊流程方面，她的社會科學碩士學位帶來了新穎、有價值的觀點。"
        }
      </Typography>
      <Typography>
        {
          "作為「在脈絡/上下文中塑造意義」(context shaping meaning) 的堅定支持者，她首先專注於了解公司和團隊文化。她工作的出發點是要找到要解決的實際問題並增加業務價值。 Evelyn 深信，我們需要對現實有共同的認識，包括共同的價值觀、目標和語言，以便在團隊中發揮最佳的表現。她充滿好奇心、積極進取和務實。你可以用「持續改進勝過遲到的完美」來描述他的理論。"
        }
      </Typography>
      <Typography>
        {"除了日常工作，她還偏愛書籍和語言學，同時也是美食愛好者。"}
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
