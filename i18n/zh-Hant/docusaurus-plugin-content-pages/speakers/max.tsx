import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/max";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Max",
  title: ["DDDTW志工"],
  description:
    "五口之家戶長，工作常處於錯亂的雙重角色之中，在 DDD 找到業務價值與軟體開發之間的的橋樑，期望帶給週遭不同的思維。",
  detail: (
    <Typography>
      {
        "五口之家戶長，工作常處於錯亂的雙重角色之中，在 DDD 找到業務價值與軟體開發之間的的橋樑，期望帶給週遭不同的思維。"
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
