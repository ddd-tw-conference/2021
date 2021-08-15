import { Typography } from "@material-ui/core";
import A from "@site/src/component/A";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/twbenlu";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "陸浩翔",
  title: [],
  description:
    "現職新創公司技術長。 過往曾經歷軟體工程師、MIS 系統工程師、微軟技術支援顧問、微軟 MVP (2014~2018)、資訊長。愈 15 年的 IT 生涯，一直以 [逆水行舟，不進則退] 的態度面對跌代愈加迅速的軟體產業。 目前耕耘產品 Based on Angular、.NET Core、Docker、Ceph、MongoDB、Redis、Machine learning…等領域。",
  detail: (
    <>
      <Typography>
        {
          "現職新創公司技術長。 過往曾經歷軟體工程師、MIS 系統工程師、微軟技術支援顧問、微軟 MVP (2014~2018)、資訊長。愈 15 年的 IT 生涯，一直以 [逆水行舟，不進則退] 的態度面對跌代愈加迅速的軟體產業。 目前耕耘產品 Based on Angular、.NET Core、Docker、Ceph、MongoDB、Redis、Machine learning…等領域。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Experiences"}
      </Typography>
      <ol>
        <Typography component="li">
          <A href="https://drive.google.com/drive/folders/1JS_qJcOBGbr35AF0qjuzhMCZJjiGXJXB?usp=sharing">
            Net conf 2020
          </A>
        </Typography>
        <Typography component="li">MSDN 研討會</Typography>
      </ol>
    </>
  ),
  sessions: [
    {
      slug: "towards-ddd-and-microservices-based-on-database-formalization-analysis-demand-development-model",
      name: "以資料庫正規化分析需求開發模式走向DDD與微服務",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
