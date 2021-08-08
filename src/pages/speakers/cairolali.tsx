import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/cairolali";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Dr. Carola Lilienthal",
  title: [],
  description:
    "Dr. Carola Lilienthal is managing software architect at WPS - Workplace Solutions and has been developing software architectures according to the principles of Domain Driven Design with her teams for more than 15 years.",
  detail: (
    <Typography>
      {
        "Dr. Carola Lilienthal is managing software architect at WPS - Workplace Solutions and has been developing software architectures according to the principles of Domain Driven Design with her teams for more than 15 years."
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "it-s-all-about-the-domain-honey-experiences-from-15-years-of-domain-driven-design",
      name: "It’s all about the domain, honey ! Experiences from 15 years of Domain-Driven Design",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
