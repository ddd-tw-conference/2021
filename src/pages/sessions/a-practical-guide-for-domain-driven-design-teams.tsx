import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/a-practical-guide-for-domain-driven-design-teams";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "A practical guide for domain-driven design teams",
  description:
    "If DDD is only to improve personal skills, it will be difficult for DDD to be successfully practiced in the team. In addition to skills, team members’ collaboration, discipline, and implementation process will interfere with and affect the implementation of DDD. In this session, Zhangyi will address this issue and put forward a team-oriented domain-driven design practice guide based on specific implementation cases, reduce the threshold for the team to implement DDD, and ensure the success rate of DDD implementation.",
  detail: (
    <>
      <Typography>
        {
          "If DDD is only to improve personal skills, it will be difficult for DDD to be successfully practiced in the team. In addition to skills, team members’ collaboration, discipline, and implementation process will interfere with and affect the implementation of DDD. In this session, Zhangyi will address this issue and put forward a team-oriented domain-driven design practice guide based on specific implementation cases, reduce the threshold for the team to implement DDD, and ensure the success rate of DDD implementation."
        }
      </Typography>
      <Typography>
        {
          "This speech combines the design pattern and implementation process of DDD with agile iterative development, process progress control, requirements analysis management, and team collaboration. Through the definition of a unified process for domain-driven design, it gives reference guides, best practices for large scale DDD  implementation in teams, team discipline and deliverable template."
        }
      </Typography>
      <Typography>{"Outline covered:"}</Typography>
      <ol>
        <Typography component="li">
          {"Pre-conditions for successful implementation of DDD"}
        </Typography>
        <Typography component="li">
          {"Domain Driven Design Unified Process"}
        </Typography>
        <Typography component="li">
          {"Business service-driven analysis and design method"}
        </Typography>
        <Typography component="li">
          {"Domain Driven Design Process Deliverables"}
        </Typography>
        <Typography component="li">
          {"Domain Driven Design Team Discipline"}
        </Typography>
      </ol>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <ol>
        <Typography component="li">
          {"Master the team implementation process of domain-driven design"}
        </Typography>
        <Typography component="li">
          {
            "Master the requirements analysis method with business service as the basic business unit"
          }
        </Typography>
        <Typography component="li">
          {
            "Understand the design methodologies that can reduce the difficulty of the team to implement DDD"
          }
        </Typography>
        <Typography component="li">
          {
            "Learn about industry reference cases that have successfully implemented this process methodogies"
          }
        </Typography>
      </ol>
    </>
  ),
  beforeSession: [
    {
      name: "Blog",
      link: "http://zhangyi.xyz/",
    },
  ],
  guests: [
    {
      name: "Zhangyi",
      slug: "brucezhang",
      image: require("@site/src/speakers/brucezhangProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
