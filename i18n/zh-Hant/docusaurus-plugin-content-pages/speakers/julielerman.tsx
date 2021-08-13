import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/julielerman";
import escape from "lodash/escape";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Julie Lerman",
  title: [
    "Software Coach",
    "Microsoft Regional Director",
    escape("Conference Keynote & Tech Speaker"),
  ],
  description:
    "Julie is known for combining experience with compassion to help software teams benefit from the guidance provided by Domain-Driven Design. She is a software coach with decades of coding and software design experience. She has a long history of helping developers expand their skills and confidence through her books, articles, Pluralsight courses, conference speaking and working closely with clients.",
  detail: (
    <Typography>
      {
        "Julie is known for combining experience with compassion to help software teams benefit from the guidance provided by Domain-Driven Design. She is a software coach with decades of coding and software design experience. She has a long history of helping developers expand their skills and confidence through her books, articles, Pluralsight courses, conference speaking and working closely with clients."
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "getting-to-ddd-pragmatic-or-principled",
      name: "Getting to DDD: Pragmatic or Principled?",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
