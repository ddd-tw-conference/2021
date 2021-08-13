import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/autonomy-is-that-what-we-really-want";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Autonomy, is that what we really want?",
  description:
    "There has been a focus on autonomy in information technology; From autonomy in code, autonomy while coding, autonomous systems with microservices to autonomous high-performing teams. When you read Daniel Pink's research in the book Drive, it makes sense; autonomy is one of the three things that motivate us; it is the ability of the person to make his or her own decisions. However, often autonomy can lead to isolation and disconnect from the rest of the code, team, or organisation. So how can we balance the individual needs while staying connected to the team/organisation to stay autonomous?",
  detail: (
    <>
      <Typography>
        {
          "There has been a focus on autonomy in information technology; From autonomy in code, autonomy while coding, autonomous systems with microservices to autonomous high-performing teams. When you read Daniel Pink's research in the book Drive, it makes sense; autonomy is one of the three things that motivate us; it is the ability of the person to make his or her own decisions. However, often autonomy can lead to isolation and disconnect from the rest of the code, team, or organisation. So how can we balance the individual needs while staying connected to the team/organisation to stay autonomous?"
        }
      </Typography>
      <Typography>
        {
          "In this talk, we will go through all the levels we deal with in IT, from code to organisation collaboration. We will go into autonomy at each level and explain how we often confuse autonomy with individual needs. These individual needs can turn into isolation and disconnect from the code, team and organisation. Through examples, we will show how our compulsiveness towards autonomy gives us both downsides of being isolated and coupled in the code, within the team and organisation. You will leave the talk knowing how polarity management can help you manage this paradox between the individual and the team/organisation and get the benefits from the whole and the individual to be balanced."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Take always for participants"}
      </Typography>
      <Typography>
        {
          "knowing how polarity management can help you manage this paradox between the individual and the team/organisation and get the benefits from the whole and the individual to be balanced."
        }
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Evelyn Van Kelle",
      slug: "evelynvankelle",
      image: require("@site/src/speakers/evelynvankelleProfileImage.png"),
    },
    {
      name: "Kenny Baas-Schwegler",
      slug: "kenny_baas",
      image: require("@site/src/speakers/kenny_baasProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
