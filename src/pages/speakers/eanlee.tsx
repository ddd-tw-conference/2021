import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/eanlee";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Ean",
  title: ["Core member of DDD Taiwan Community"],
  description:
    "An exploratory sailing ship in the ocean of software development. At keep following the development of various architectures and technologies. With exposure to the methodology of DDD, I learned about the interrelationship between business goals and technology development. In recent years, attention has gradually been paid to the commercial value brought by software development.",
  detail: (
    <Typography>
      {
        "An exploratory sailing ship in the ocean of software development. At keep following the development of various architectures and technologies. With exposure to the methodology of DDD, I learned about the interrelationship between business goals and technology development. In recent years, attention has gradually been paid to the commercial value brought by software development."
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
