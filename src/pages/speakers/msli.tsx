import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/msli";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Mia",
  title: [],
  description:
    "Mia has served as system analyst, project manager, product manager, currently challenging business development. In addition, she is also good in bridge the connection between domain knowledge and technology.",
  detail: (
    <>
      <Typography>
        {
          "Mia steps in IT industry with two years of system analysis, four years of product and project management experience, mainly in the software and retail logistics industry. Good at customer management, product design, system analysis and operation planning, workflow optimization management, etc. Mia likes to use DDD or design thinking methodologies in her projects to improve communication efficiency and optimize product development efficiency, so that the software development process is smoother. Recently, Mia is challenging business development, using software to help customers achieve the goals, pull out strategies and implement them on the ground."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Experiences"}
      </Typography>
      <ul>
        <Typography component="li">
          {
            "2020 DDD Taiwan Conference - How to conduct Requirements Elicitation if you are  non-technical background PMs"
          }
        </Typography>
      </ul>
    </>
  ),
  sessions: [
    {
      slug: "start-from-scratch-essentials-of-game-development-agile-ddd",
      name: "Start from scratch - Essentials of Game Development : Agile x DDD",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
