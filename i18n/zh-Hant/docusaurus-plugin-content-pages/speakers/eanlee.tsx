import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/eanlee";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Ean",
  title: ["DDDTW志工"],
  description:
    "軟件開發海洋中的一艘探索的小帆船。持續關注各種架構和技術的發展。隨著接觸 DDD 的方法論，了解到對商業目的與技術開發的相互關係。近年來，逐漸關注軟件開發帶來的商業價值。",
  detail: (
    <Typography>
      {
        "軟件開發海洋中的一艘探索的小帆船。持續關注各種架構和技術的發展。隨著接觸 DDD 的方法論，了解到對商業目的與技術開發的相互關係。近年來，逐漸關注軟件開發帶來的商業價值。"
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
