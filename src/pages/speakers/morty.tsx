import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/morty";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Morty",
  title: ["Core member of DDD Taiwan Community"],
  description:
    "I met DDD by a chance , and currently walk on the way to find out the value of DDD, and as a core member of DDD Taiwan community; currently working in game industry as a back-end engineer.",
  detail: (
    <Typography>
      {
        "I met DDD by a chance , and currently walk on the way to find out the value of DDD, and as a core member of DDD Taiwan community; currently working in game industry as a back-end engineer. Facilitator for 2020 DDD Taiwan Conference EventStorming workshop, and as a speaker & facilitator in DDD Taiwan community 2021 May & July meetup workshop."
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
