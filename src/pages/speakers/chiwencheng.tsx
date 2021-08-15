import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/chiwencheng";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Steven",
  title: [
    "Core member of DDD Taiwan Community",
    "V2X (Vehicle to Everything) industry software engineer",
  ],
  description:
    "Enthusiastic about software development, constantly exploring, researching and sharing with enthusiasm. Go on the road of software development with everyone.",
  detail: (
    <Typography>
      {
        "Enthusiastic about software development, constantly exploring, researching and sharing with enthusiasm. Go on the road of software development with everyone."
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "thoroughly-tempered-coworking-model-eventstorming",
      name: "Thoroughly tempered coworking model - EventStorming",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
