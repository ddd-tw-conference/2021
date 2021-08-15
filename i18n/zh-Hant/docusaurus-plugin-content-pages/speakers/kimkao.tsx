import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/kimkao";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "高翊凱",
  title: ["AWS 資深解決方案架構師", "人生已被良好架構的三寶爸", "問題排除者"],
  description:
    "人生已經被良好架構的三寶爸，現任職於 AWS 擔任資深解決方案架構師。",
  detail: (
    <>
      <Typography>
        {"人生已經被良好架構的三寶爸，現任職於 AWS 擔任資深解決方案架構師。"}
      </Typography>
      <Typography>
        {
          "現任職於 AWS 擔任資深解決方案架構師，同時也是台灣領域驅動設計社群 (DDD Taiwan Community) 發起人之一。專長於軟體系統設計，並致力於投入無伺服器服務推廣，推動企業透過 DDD 與便捷的雲端服務，打造更適切的建構系統方案，解決真切的商務問題。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Experiences"}
      </Typography>
      <ol>
        <Typography component="li">
          {"2020 DDD Taiwan Conference - REFK 事件風暴工作坊"}
        </Typography>
        <Typography component="li">
          {
            "2020 AWS DevDay - Enlarge influence by Participating in communities"
          }
        </Typography>
        <Typography component="li">
          {"2020 AWS CTO night - Host, Opening and 現代化管理技術對談"}
        </Typography>
        <Typography component="li">
          {"2020/2019/2018 AWS Taipei Summit"}
        </Typography>
        <Typography component="li">
          {
            "2019/2018 JCCONF - Embrace legacy Java EE by AWS Serverless, Supersonic Java serverless"
          }
        </Typography>
        <Typography component="li">
          {
            "2019 DDD China Conference - Esseitnail capabilities behind microservices"
          }
        </Typography>
      </ol>
    </>
  ),
  sessions: [
    {
      slug: "continuous-architecture-embracing-multiple-viewpoints-for-sustainable-solutions",
      name: "Continuous Architecture : Embracing Multiple Viewpoints for Sustainable Solutions",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
