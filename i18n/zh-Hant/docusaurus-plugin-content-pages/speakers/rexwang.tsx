import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/rexwang";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Rex Wang",
  title: ["VMware 資深技術顧問"],
  description:
    "Rex 任職於 Pivotal (現為 VMware MAPBU， 現代化應用平台事業群 )時，開始接觸領域驅動設計，從公司內部訓練與實際協助客戶中，對於領域驅動設計如何協助企業進行數位轉型，有第一線的參與與觀察。",
  detail: (
    <Typography>
      {
        "Rex 任職於 Pivotal (現為 VMware MAPBU， 現代化應用平台事業群 )時，開始接觸領域驅動設計，從公司內部訓練與實際協助客戶中，對於領域驅動設計如何協助企業進行數位轉型，有第一線的參與與觀察。"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "application-modernization-steps-and-implementation",
      name: "應用現代化的步驟與實作",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
