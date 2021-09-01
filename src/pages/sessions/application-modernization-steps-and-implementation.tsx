import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/application-modernization-steps-and-implementation";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "Application modernization steps and implementation",
  description:
    "In this session, Rex will share the VMware Swift Method, which is an implementation method extracted by Pivotal Labs in the process of assisting customers in modernizing applications with domain-driven design. It is expected to be provided to the audience, who can work on their own, according to the Swift Method. Like Pivotal Labs experts,  started to practice domain-driven design in their own work.",
  detail: (
    <>
      <Typography>
        {
          "In this session, Rex will share the VMware Swift Method, which is an implementation method extracted by Pivotal Labs in the process of assisting customers in modernizing applications with domain-driven design. It is expected to be provided to the audience, who can work on their own, according to the Swift Method. Like Pivotal Labs experts,  started to practice domain-driven design in their own work."
        }
      </Typography>
      <ol>
        <Typography component="li">
          {"The relationship between VMware (Pivotal) and DDD"}
        </Typography>
        <Typography component="li">
          {"Specific steps for application modernization-Swift Method"}
        </Typography>
        <Typography component="li">
          {"How to use Spring Framework to test and develop microservices"}
        </Typography>
        <Typography component="li">{"In conclusion"}</Typography>
      </ol>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <Typography>
        {
          "Audience could understand VMware (Pivotal) methods and Spring framework to develop modern applications"
        }
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Rex Wang",
      slug: "rexwang",
      image: require("@site/src/speakers/rexwangProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
