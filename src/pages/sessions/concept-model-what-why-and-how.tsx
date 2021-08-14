import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/a-practical-guide-for-domain-driven-design-teams";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Concept Model: What, Why and How",
  description:
    "How do we distill user scenarios into “concept”, and how do we comprehend “concept” and build models on it in the process of product design? It is very essential to complex business products. If we don’t distill correctly nor modelling the wrong way in the beginning, we must suffer from designing ill-used products, piling up tech debt, and bringing disaster into technical architecture. Furthermore, those consequences would drag down the whole product. Distilling concept is actually the same thing for UX designer, BA and architect. When they all share the same understanding in “concept”, and thus domain models come out simultaneously, and we can map the architectural design of application and technology  well to business and user scenarios. This time sharing experience design, BA and technical personnel from the perspective of the team, using examples to illustrate how to collaborate to build a conceptual model to guide technical design.",
  detail: (
    <>
      <Typography>
        {
          "How do we distill user scenarios into “concept”, and how do we comprehend “concept” and build models on it in the process of product design? It is very essential to complex business products. If we don’t distill correctly nor modelling the wrong way in the beginning, we must suffer from designing ill-used products, piling up tech debt, and bringing disaster into technical architecture. Furthermore, those consequences would drag down the whole product. Distilling concept is actually the same thing for UX designer, BA and architect. When they all share the same understanding in “concept”, and thus domain models come out simultaneously, and we can map the architectural design of application and technology  well to business and user scenarios. This time sharing experience design, BA and technical personnel from the perspective of the team, using examples to illustrate how to collaborate to build a conceptual model to guide technical design."
        }
      </Typography>
      <ol>
        <Typography component="li">{"concept? domain?"}</Typography>
        <Typography component="li">
          {"Why the conceptual model is fundamental"}
        </Typography>
        <Typography component="li">{"Build a conceptual model"}</Typography>
        <ol>
          <Typography component="li">
            {`From experience perspective: Refining "concepts" from user scenarios and opportunities, creating prototypes`}
          </Typography>
          <Typography component="li">
            {`From demand perspective: from the prototype to enrich the "concept" elements and the relationship between the "concepts"`}
          </Typography>
          <Typography component="li">
            {`From technical perspective: examine the concepts and their relationships from the perspective of the scheme, and provide feedback and optimization`}
          </Typography>
          <Typography component="li">
            {`From collaborative perspective: constructing conceptual models and defining design principles`}
          </Typography>
        </ol>
        <Typography component="li">{"Tips"}</Typography>
      </ol>
      <Typography variant="h5" component="h2">
        {"Takeaways"}
      </Typography>
      <Typography>
        {
          "Understand what a conceptual model is, its necessity, application scenarios, and general ideas and examples for constructing a conceptual model"
        }
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "KK",
      slug: "kangjiangmei",
      image: require("@site/src/speakers/kangjiangmeiProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
