import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/max";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Max",
  title: ["Core member of DDD Taiwan Community"],
  description:
    "The head of a family of five, whose work is often in a chaotic dual role, try to bridge the business value and software development in DDD, keen to bring in different mindsets to the surroundings.",
  detail: (
    <Typography>
      {
        "The head of a family of five, whose work is often in a chaotic dual role, try to bridge the business value and software development in DDD, keen to bring in different mindsets to the surroundings."
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
