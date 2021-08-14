import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/hofstef";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Dr. Stefan Hofer",
  title: ["企業架構師"],
  description:
    "Stefan 是 DDD 與軟體需求專家 – 可從他的著作 Domain Storytelling 章節中瞭解其專業見解。",
  detail: (
    <Typography>
      {
        "Stefan Hofer 協助團隊以適當的方式開發能夠正確完成任務的軟體。 他擁有資訊工程學系博士學位，是德國漢堡 WPS – Workplace Solutions 的需求和領域驅動設計專家。 他的著作《Domain Storytelling: A Collaborative, Visual, and Agile Way to Build Domain-Driven Software》將於 2021 年 10 月由 Addison-Wesley 出版。"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "developing-domain-storytelling-or-how-ddd-influenced-modeling-practices",
      name: "開發 Domain Storytelling: DDD 如何影響建模實作",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
