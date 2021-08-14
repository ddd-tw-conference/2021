import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/continuous-architecture-embracing-multiple-viewpoints-for-sustainable-solutions";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Continuous Architecture : Embracing Multiple Viewpoints for Sustainable Solutions",
  description:
    "When constructing a system architecture, it is often expected that a good architecture can be constructed for long-term maintenance. However, it is often limited by the introduction of temporary hot technologies and lacks attention to the overall development. A sustainable and good architecture is mainly based on the comprehensive arrangement of multiple perspectives and follows the business development changes of domain-driven design. If you can find a way to guide the design in terms of safety, timely, and response to business changes, then construct the solution that comes out can run continuously.",
  detail: (
    <>
      <Typography>
        {
          "When constructing a system architecture, it is often expected that a good architecture can be constructed for long-term maintenance. However, it is often limited by the introduction of temporary hot technologies and lacks attention to the overall development. A sustainable and good architecture is mainly based on the comprehensive arrangement of multiple perspectives and follows the business development changes of domain-driven design. If you can find a way to guide the design in terms of safety, timely, and response to business changes, then construct the solution that comes out can run continuously."
        }
      </Typography>
      <Typography>
        {
          "In the continuously evolving architecture design, it mainly extracts the core ideas from the well-known System Software Architecture principles, embraces the design of diversified system aspects, and incorporates the strategic design guidelines of well-known domain-driven design, as well as the practical design in the face of evaluation tactics. In addition, will talk about how to choose mature solutions on the market as a technical decision making trade-off guidance."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <Typography>{"The audience should be able to understand"}</Typography>
      <ol>
        <Typography component="li">
          {"what is a continuous architecture"}
        </Typography>
        <Typography component="li">
          {
            "how to take into account the expectations of different roles from multiple perspectives"
          }
        </Typography>
        <Typography component="li">
          {
            "how to integrate it with domain-driven design from strategic modeling"
          }
        </Typography>
        <Typography component="li">
          {"the selection of feasible solutions in the market"}
        </Typography>
      </ol>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Kim Kao",
      slug: "kimkao",
      image: require("@site/src/speakers/kimkaoProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
