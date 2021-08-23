import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/morty";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Morty",
  title: ["DDDTW志工"],
  description:
    "偶然與DDD金鏟子的相遇，前往找尋價值及方法的大海中，並擔任DDDTW志工；目前任職於遊戲業擔任後端工程師。",
  detail: (
    <Typography>
      {
        "偶然與DDD金鏟子的相遇，前往找尋價值及方法的大海中，並擔任DDDTW志工；目前任職於遊戲業擔任後端工程師。曾擔任 2020 DDD 年會Event Storming工作坊助教、DDDTW 2021 五月及七月 meetup 工作坊講者/引導者及助教。"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "thoroughly-tempered-coworking-model-eventstorming",
      name: "千錘百鍊-Event Storming",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
