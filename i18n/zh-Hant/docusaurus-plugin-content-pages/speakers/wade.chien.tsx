import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/wade.chien";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "簡維德",
  title: ["企業架構師"],
  description:
    "Dr. Carola Lilienthal is managing software architect at WPS - Workplace Solutions and has been developing software architectures according to the principles of Domain Driven Design with her teams for more than 15 years.",
  detail: (
    <Typography>
      {
        "目前於中國信託商業銀行任職企業架構師，負責雲原生架構推廣及DDD觀念導入，中台建立及規劃等工作"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "that-year-the-pit-we-stepped-on-together",
      name: "那一年，我們一起踩過的坑",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
