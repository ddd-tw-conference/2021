import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/thoroughly-tempered-coworking-model-eventstorming";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Thoroughly tempered coworking model -  EventStorming",
  description: `EventStorming is Invented by Alberto Brandolini, it is a solution to "combine and unify the knowledge of the team in the business field". Using a systematic way to help the team quickly understand the business field in a highly interactive way. Explore the occurrence of business events, focusing on the evolution of time and the corresponding relationship between the events on the time axis, and then exploring blind spots, digging for questions, opportunities of business, and establishing consensus. The difference from the requirement taking is to pay more attention to the dialogue between participants from a comprehensive perspective to reach a consensus on the goal. Therefore, it can also be applied to strategic thinking and process design other than system design. Come and learn about the awesome framework together !!!`,
  detail: (
    <>
      <Typography>
        {`EventStorming is Invented by Alberto Brandolini, it is a solution to "combine and unify the knowledge of the team in the business field". Using a systematic way to help the team quickly understand the business field in a highly interactive way. Explore the occurrence of business events, focusing on the evolution of time and the corresponding relationship between the events on the time axis, and then exploring blind spots, digging for questions, opportunities of business, and establishing consensus. The difference from the requirement taking is to pay more attention to the dialogue between participants from a comprehensive perspective to reach a consensus on the goal. Therefore, it can also be applied to strategic thinking and process design other than system design. Come and learn about the awesome framework together !!!`}
      </Typography>
      <Typography>
        {
          "Continuing the praise from the 2020 DDD Taiwan Conference and the 2021 July meetup, we will take Event Storming into the next stage and integrate the DDD strategic design point of view to explore and extend the application."
        }
      </Typography>
      <Typography>
        {
          "We will bring in Process Modelling after Big Picture Modeling, the analysis is carried out by integrating the viewpoints of DDD strategic design to pave the way for the implementation of tactical applications in the subsequent actual development."
        }
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Morty",
      slug: "morty",
      image: require("@site/src/speakers/mortyProfileImage.png"),
    },
    {
      name: "Ean",
      slug: "eanlee",
      image: require("@site/src/speakers/eanleeProfileImage.png"),
    },
    {
      name: "Steven",
      slug: "chiwencheng",
      image: require("@site/src/speakers/chiwenchengProfileImage.png"),
    },
    {
      name: "Max",
      slug: "max",
      image: require("@site/src/speakers/maxProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
