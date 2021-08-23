import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/chiwencheng";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "鄭棋文",
  title: ["DDDTW社群志工", "車聯網軟體工程師"],
  description:
    "熱衷於軟體開發，抱有熱情不斷地摸索、研究並且分享。與大家一起走這條軟體開發之路。",
  detail: (
    <Typography>
      {
        "熱衷於軟體開發，抱有熱情不斷地摸索、研究並且分享。與大家一起走這條軟體開發之路。"
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
