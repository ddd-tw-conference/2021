import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/river0825";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "林鴻皓",
  title: ["DDD 小志工"],
  description:
    "DDDTW 社群的核心志工與講師。有多年的後端開發經驗，在 2019 年接觸 DDD 之後被身深的吸引。但過程中跌跌撞撞，幸好有社群的夥伴們一同學習。",
  detail: (
    <>
      <Typography>
        {
          "DDDTW 社群的核心志工與講師。有多年的後端開發經驗，在 2019 年接觸 DDD 之後被身深的吸引。但過程中跌跌撞撞，幸好有社群的夥伴們一同學習。"
        }
      </Typography>
    </>
  ),
  sessions: [
    {
      slug: "domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology",
      name: "在業務與技術相遇的十字路口探索系統設計 - Domain Storytelling",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
