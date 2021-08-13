import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/brucezhang";
import escape from "lodash/escape";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Zhangyi",
  title: [
    escape('author of "Deconstructing Domain Driven Design"'),
    escape("the co-founder of WithField.tech"),
  ],
  description:
    "Zhang Yi, high-quality coding practitioner, domain-driven design evangelist, microservice system architect, big data platform architect, and agile transformation consultant. Passionate about programming language learning and skill improvement, committed to the perfect combination of enterprise architecture, lean demand management, domain-driven design, and microservice architecture to create an enterprise-oriented business platform; committed to integrating data warehouse, real-time stream processing, machine learning and the perfect combination of high-performance storage creates an industry-oriented intelligent data middle platform.",
  detail: (
    <Typography>
      {
        "Zhang Yi, high-quality coding practitioner, domain-driven design evangelist, microservice system architect, big data platform architect, and agile transformation consultant. Passionate about programming language learning and skill improvement, committed to the perfect combination of enterprise architecture, lean demand management, domain-driven design, and microservice architecture to create an enterprise-oriented business platform; committed to integrating data warehouse, real-time stream processing, machine learning and the perfect combination of high-performance storage creates an industry-oriented intelligent data middle platform."
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "a-practical-guide-for-domain-driven-design-teams",
      name: "A practical guide for domain-driven design teams",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
