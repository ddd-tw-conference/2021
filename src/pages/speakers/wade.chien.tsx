import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/wade.chien";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Wade, Chien",
  title: ["Enterprise Architect"],
  description:
    "Currently working as an enterprise architect in China Trust Commercial Bank, responsible for the promotion of cloud native architecture and the introduction of DDD concepts, the establishment and planning of the corporate middle platform, etc.",
  detail: (
    <Typography>
      {
        "Currently working as an enterprise architect in China Trust Commercial Bank, responsible for the promotion of cloud native architecture and the introduction of DDD concepts, the establishment and planning of the corporate middle platform, etc."
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "that-year-the-pit-we-stepped-on-together",
      name: "That year, the pit we stepped on together",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
