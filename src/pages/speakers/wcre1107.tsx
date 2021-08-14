import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/wcre1107";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Andrew, Chang",
  title: [],
  description:
    "Served as a core system analyst, business intelligence engineer, B2C system analyst, and back-end Team Lead of Cathay Pacific Property & Casualty Insurance. Currently, he is an architect, responsible for the front-end and micro-service middle platform projects.",
  detail: (
    <>
      <Typography>
        {
          "Served as a core system analyst, business intelligence engineer, B2C system analyst, and back-end Team Lead of Cathay Pacific Property & Casualty Insurance. Currently, he is an architect, responsible for the front-end and micro-service middle platform projects."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Experiences"}
      </Typography>
      <ol>
        <Typography component="li">
          {"Cathay group internal education and training"}
        </Typography>
        <Typography component="li">{"Sharing within the group"}</Typography>
      </ol>
    </>
  ),
  sessions: [
    {
      slug: "insurance-ddd-middle-platform-microservices-cathay-pPacific-property-insurance-besafe-platform-experience-sharing",
      name: "Insurance × DDD × Middle Platform × Microservices-Cathay Pacific Property Insurance BeSafe Platform Experience Sharing",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
