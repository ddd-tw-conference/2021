import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/towards-ddd-and-microservices-based-on-database-formalization-analysis-demand-development-model";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Towards DDD and microservices based on database formalization analysis demand development model",
  description:
    "When I received a request in the past, I used the method of  database normalization as the basis for system development. Until I touched the development model of microservices, as a requirement was raised, we define it in a  domain. How to identify the boundaries of the field with the help of DDD through the fragments of information in the interview process with the stakeholders. Then we use this domain boundary as the basis for cutting the scope of microservice development.",
  detail: (
    <>
      <Typography>
        {
          "When I received a request in the past, I used the method of  database normalization as the basis for system development."
        }
      </Typography>
      <Typography>
        {
          "Until I touched the development model of microservices, as a requirement was raised, we define it in a  domain. How to identify the boundaries of the field with the help of DDD through the fragments of information in the interview process with the stakeholders. Then we use this domain boundary as the basis for cutting the scope of microservice development."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <Typography>
        {
          "To understand how to transform the development process from database normalization basis to DDD based microservices."
        }
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Ben Lu",
      slug: "twbenlu",
      image: require("@site/src/speakers/twbenluProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
