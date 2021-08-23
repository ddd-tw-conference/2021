import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/rexwang";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Rex Wang",
  title: ["VMware Senior Technical Consultant"],
  description:
    "When Rex worked at Pivotal (now VMware MAPBU, modern application platform business group), he began to contact domain-driven design. From the company's internal training and actual assistance to customers, he has a first-line understanding of how domain-driven design can assist enterprises in digital transformation. Participate and observe.",
  detail: (
    <Typography>
      {
        "When Rex worked at Pivotal (now VMware MAPBU, modern application platform business group), he began to contact domain-driven design. From the company's internal training and actual assistance to customers, he has a first-line understanding of how domain-driven design can assist enterprises in digital transformation. Participate and observe."
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "application-modernization-steps-and-implementation",
      name: "Application modernization steps and implementation",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
