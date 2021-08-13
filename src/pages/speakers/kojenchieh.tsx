import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/kojenchieh";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "David Ko",
  title: ["Odd-e Agile Coach"],
  description:
    "One of the organizers of Agile Tour Taipei in Taiwan, dedicated to promoting agile technology, has established two communities on Facebook (Scrum Community in Taiwan and AgileCommunity.tw), hoping to spread Agile to more cities in Taiwan. David has used the Scrum development method in the Trend Micro since 2008 to teach other teams on how to implement agility, and is responsible for training facilitators in the company, using design thinking to carry out product innovation and reform.",
  detail: (
    <Typography>
      {
        "One of the organizers of Agile Tour Taipei in Taiwan, dedicated to promoting agile technology, has established two communities on Facebook (Scrum Community in Taiwan and AgileCommunity.tw), hoping to spread Agile to more cities in Taiwan. David has used the Scrum development method in the Trend Micro since 2008 to teach other teams on how to implement agility, and is responsible for training facilitators in the company, using design thinking to carry out product innovation and reform."
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "the-toolbox-for-initiating-agile-transformation",
      name: "The toolbox for initiating agile transformation",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
