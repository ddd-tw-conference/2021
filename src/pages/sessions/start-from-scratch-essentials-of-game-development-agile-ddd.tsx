import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/start-from-scratch-essentials-of-game-development-agile-ddd";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Start from scratch - Essentials of Game Development : Agile x DDD",
  description:
    "When your e-commerce customer tells you that they want to develop a game, and you haven't touched game development, how do you clarify the requirments and bridge the connection between business stakeholders and the engineers?",
  detail: (
    <>
      <Typography>
        {
          "When your e-commerce customer tells you that they want to develop a game, and you haven't touched game development, how do you clarify the requirments and bridge the connection between business stakeholders and the engineers?"
        }
      </Typography>
      <Typography>
        {
          "In the session, Mia will introduce the project background, requirements interviews, and explain how to use the Agile x DDD approaches to clarify the software requirements, and finalize the requirements through communicating with the development team."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <Typography>
        {"Understand how to start your Agile x DDD journey from 0 to 1"}
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Mia",
      slug: "msli",
      image: require("@site/src/speakers/msliProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
