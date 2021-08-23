import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/it-s-all-about-the-domain-honey-experiences-from-15-years-of-domain-driven-design";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "It’s all about the domain, honey ! Experiences from 15 years of Domain-Driven Design",
  description:
    "Great technologies, programming languages and tools are used when building software. That is good and right. But unfortunately, it is often lost sight of the fact that the decisive factor is not the technology, but the *business domain*. If we do not map the domain language and the business processes in the software, then it will not help our users in their work. No technology in the world can protect us from this.",
  detail: (
    <>
      <Typography>
        {
          "Great technologies, programming languages and tools are used when building software. That is good and right. But unfortunately, it is often lost sight of the fact that the decisive factor is not the technology, but the *business domain*. If we do not map the domain language and the business processes in the software, then it will not help our users in their work. No technology in the world can protect us from this."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <Typography>
        {
          "In this talk, I'll show you how to build the architecture in a way that makes sense of the business language and how Domain Driven Design (DDD) and microservices can help us do that."
        }
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Dr. Carola Lilienthal",
      slug: "cairolali",
      image: require("@site/src/speakers/cairolaliProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
