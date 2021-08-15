import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/towards-ddd-and-microservices-based-on-database-formalization-analysis-demand-development-model";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "以資料庫正規化分析需求開發模式走向DDD與微服務",
  description:
    "分享團隊在開發實務上的經驗 從 User Story-->UML diagram--> ER Model 的系統分析開發方式 轉換到 Event Storming --> 領域分析 --> 微服務為主的系統開發模式。分享兩者在開發上有甚麼差異？又或者因為甚麼原因 團隊被做這樣的驅動轉換？而在做這樣的轉換時，團隊需要加強的技能又有哪些？",
  detail: (
    <>
      <Typography>
        {
          "分享團隊在開發實務上的經驗 從 User Story-->UML diagram--> ER Model 的系統分析開發方式 轉換到 Event Storming --> 領域分析 --> 微服務為主的系統開發模式。分享兩者在開發上有甚麼差異？又或者因為甚麼原因 團隊被做這樣的驅動轉換？而在做這樣的轉換時，團隊需要加強的技能又有哪些？"
        }
      </Typography>
      <Typography>
        {
          "過往接到一個需求時，我以資料庫正規化分析的方式，做為系統開發的基礎依據。"
        }
      </Typography>
      <Typography>
        {
          "到微服務的開發模式後，一個需求提出。我們將其定義為Domain。如何把與需求單位訪談過程中的片片斷斷的資訊，透過DDD的協助，切割出領域邊界。繼而以此領域邊界來做為微服務開發的切割範圍依據。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <Typography>
        {"以[資料庫正規化的開發] 如何 轉向 [ DDD 微服務 ]"}
      </Typography>
    </>
  ),
  beforeSession: [
    {
      name: "中台架構與實現：基於 DDD 和微服務",
      link: "https://www.tenlong.com.tw/products/9787111666301",
    },
  ],
  guests: [
    {
      name: "陸浩翔",
      slug: "twbenlu",
      image: require("@site/src/speakers/twbenluProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
