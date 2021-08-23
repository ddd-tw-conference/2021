import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/kangjiangmei";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "亢江妹",
  title: ["Lead Consultant"],
  description:
    "亢江妹，ThoughtWorks首席產品經理、產品諮詢顧問，是ThoughtWorks中國區EDGE服務的負責人、《ThoughtWorks卓越數位產品經理研修營》的發起人、負責人和主講師；也是《精實產品需求特訓營》、《敏捷需求練功坊》、《2021產品設計挑戰賽》的發起人和主導師。有15年以上、跨行業的大型企業產品管理經驗，當前專注於數位產品價值成效管理、產品轉型、跨業務和IT融合的體系化產品人才培養、精實產品創新、ToB產品創新探索和設計、平台型產品的探索和戰略規劃、大型敏捷產品團隊的管理實踐和實戰落地輔導等。",
  detail: (
    <Typography>
      {
        "亢江妹，ThoughtWorks首席產品經理、產品諮詢顧問，是ThoughtWorks中國區EDGE服務的負責人、《ThoughtWorks卓越數位產品經理研修營》的發起人、負責人和主講師；也是《精實產品需求特訓營》、《敏捷需求練功坊》、《2021產品設計挑戰賽》的發起人和主導師。有15年以上、跨行業的大型企業產品管理經驗，當前專注於數位產品價值成效管理、產品轉型、跨業務和IT融合的體系化產品人才培養、精實產品創新、ToB產品創新探索和設計、平台型產品的探索和戰略規劃、大型敏捷產品團隊的管理實踐和實戰落地輔導等。"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "concept-model-what-why-and-how",
      name: "概念模型：What, Why and How",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
