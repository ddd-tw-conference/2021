import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/evolutionary-aws-lambda-with-hexagonal-architecture";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Getting to DDD: Pragmatic or Principled?",
  description:
    "The hexagonal architecture, or ports and adapters architecture, is an architectural pattern used for creating loosely coupled application components that can be easily connected to their software environment. This makes components exchangeable at any level, and facilitates test automation.  AWS Lambda provided the perfect environment to work with this architecture, moreover using hexagonal architecture, allows great flexibility to change the computational layer in case of porting across cloud services.",
  detail: (
    <>
      <Typography>
        {
          "The hexagonal architecture, or ports and adapters architecture, is an architectural pattern used for creating loosely coupled application components that can be easily connected to their software environment. This makes components exchangeable at any level, and facilitates test automation.  AWS Lambda provided the perfect environment to work with this architecture, moreover using hexagonal architecture, allows great flexibility to change the computational layer in case of porting across cloud services."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Takeaways"}
      </Typography>
      <Typography>
        {
          "Learn how to use hexagonal architecture for evolving serverless compute, introducing new functionalities, change infrastructure without affecting the domain logic, code portability across multiple compute services"
        }
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Luca Mezzalira",
      slug: "lucamezzalira",
      image: require("@site/src/speakers/lucamezzaliraProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
