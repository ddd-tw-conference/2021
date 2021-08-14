import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/a-practical-guide-for-domain-driven-design-teams";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Insurance × DDD × Middle Platform × Microservices-Cathay Pacific Property Insurance BeSafe Platform Experience Sharing",
  description:
    "Cathay Pacific Property & Casualty Insurance launched the BeSafe platform at the end of 2020, which uses technologies such as microservices, middle platform, and DDD. In this talk, I will share with you the relationship between the three, the cause and effect of financial institutions from methodological application to implementation in the process of introducing DDD, and what important role does DDD play? What difficulties and challenges might encounter during the import process?",
  detail: (
    <>
      <Typography>
        {
          "Cathay Pacific Property & Casualty Insurance launched the BeSafe platform at the end of 2020, which uses technologies such as microservices, middle platform, and DDD. In this talk, I will share with you the relationship between the three, the cause and effect of financial institutions from methodological application to implementation in the process of introducing DDD, and what important role does DDD play? What difficulties and challenges might encounter during the import process?"
        }
      </Typography>
      <ul>
        <Typography component="li">
          {
            "Introduction to Cathay Pacific Property & Casualty's BeSafe platform"
          }
        </Typography>
        <Typography component="li">
          {"The relationship between microservices, middle platform, and DDD"}
        </Typography>
        <Typography component="li">
          {
            "How to import DDD strategic design in the early stage of system development"
          }
        </Typography>
        <Typography component="li">
          {
            "In response to the project and large-scale organization division of labor, the contingency adjustments"
          }
        </Typography>
      </ul>
      <Typography variant="h5" component="h2">
        {"Takeaways"}
      </Typography>
      <ul>
        <Typography component="li">
          {
            "Understand the individual concepts of DDD, middle platform, and microservices"
          }
        </Typography>
        <Typography component="li">
          {
            "Understand the interrelationship between DDD, middle platform, and microservices"
          }
        </Typography>
        <Typography component="li">
          {"Experiences that large organizations may encountered"}
        </Typography>
      </ul>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Andrew, Chang",
      slug: "wcre1107",
      image: require("@site/src/speakers/wcre1107ProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
