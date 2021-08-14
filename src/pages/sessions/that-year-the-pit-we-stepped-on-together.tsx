import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/that-year-the-pit-we-stepped-on-together";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "That year, the pit we stepped on together",
  description:
    "In the past two years, I have encountered many situations in the promotion of DDD in the company. I will share with you some of the problems encountered by large companies when they are introduced and our solutions. I’d like to give a guidance for the audience so that they can avoid repeating the same mistakes.",
  detail: (
    <>
      <Typography>
        {
          "In the past two years, I have encountered many situations in the promotion of DDD in the company. I will share with you some of the problems encountered by large companies when they are introduced and our solutions. I’d like to give a guidance for the audience so that they can avoid repeating the same mistakes."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <Typography>
        {
          "Understand the situation that may be encountered when introducing DDD into organizations, as a reference for your organization or company in the future"
        }
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Wade, Chien",
      slug: "2954201",
      image: require("@site/src/speakers/2954201ProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
