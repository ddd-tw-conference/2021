import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/hofstef";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Dr. Stefan Hofer",
  title: ["Requirements & DDD Expert bei WPS"],
  description:
    "Stefan Hofer helps teams develop software that does the right job the right way. He holds a PhD in computer science, and works as an requirements and Domain-Driven Design expert for WPS – Workplace Solutions in Hamburg, Germany. His book “Domain Storytelling: A Collaborative, Visual, and Agile Way to Build Domain-Driven Software” will be published by Addison-Wesley in October 2021.",
  detail: (
    <Typography>
      {
        "Stefan Hofer helps teams develop software that does the right job the right way. He holds a PhD in computer science, and works as an requirements and Domain-Driven Design expert for WPS – Workplace Solutions in Hamburg, Germany. His book “Domain Storytelling: A Collaborative, Visual, and Agile Way to Build Domain-Driven Software” will be published by Addison-Wesley in October 2021."
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "developing-domain-storytelling-or-how-ddd-influenced-modeling-practices",
      name: "Developing Domain Storytelling, or: How DDD influenced modeling practices",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
