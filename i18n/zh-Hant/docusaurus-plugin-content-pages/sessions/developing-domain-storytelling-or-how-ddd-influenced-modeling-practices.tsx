import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/evolutionary-aws-lambda-with-hexagonal-architecture";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "開發 Domain Storytelling: DDD 如何影響建模實作",
  description: "瞭解一種將領域知識轉化為有效商業軟體的協作建模技術。",
  detail: (
    <>
      <Typography>
        {
          "Domain Storytelling 是一種建模技術，可將領域知識轉化為符合業務需求的軟體。領域專家和軟件開發人員通過講故事和將它們繪製成易於理解的圖畫來相互學習。這些圖畫有助於找到 Bounded Context、導出需求和設計領域模型。"
        }
      </Typography>
      <Typography>
        {
          "在我的演講中，我將會簡單介紹該方法並重點介紹 DDD 如何影響一般建模的實踐，特別是 Domain Storytelling 的發展。我的演講會有以下見解："
        }
      </Typography>
      <ul>
        <Typography component="li">
          {"領域語言是特定於上下文的，而限界上下文顛覆了我們建模的方法。"}
        </Typography>
        <Typography component="li">
          {"軟體開發可以被視為一系列加速建模的溝通過程"}
        </Typography>
        <Typography component="li">
          {
            "Eric Evan’s 的模型探索漩渦 (model exploration whirlpool) 作為模型驅動開發 (model-driven development) 的一個有力的比喻，其實被人們低估了。"
          }
        </Typography>
      </ul>
      <Typography>
        {
          "本演講適合於所有想要反思自己建模實踐方法的人，或是想學習 DDD 工具箱中其他建模技術的人。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"演講大綱"}
      </Typography>
      <ul>
        <Typography component="li">
          {"用一個案例來入門 Domain Storytelling"}
        </Typography>
        <Typography component="li">{"簡短的解釋該方法"}</Typography>
        <Typography component="li">
          {"強調 Domain Storytelling 中來自 DDD 建模原則的影響"}
        </Typography>
        <Typography component="li">
          {"全局觀：看看其他 DDD 建模方法以及它們彼此的關係"}
        </Typography>
      </ul>
    </>
  ),
  beforeSession: [
    {
      name: "hofstef/awesome-domain-storytelling",
      link: "https://github.com/hofstef/awesome-domain-storytelling",
    },
  ],
  guests: [
    {
      name: "Dr. Stefan Hofer",
      slug: "hofstef",
      image: require("@site/src/speakers/hofstefProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
