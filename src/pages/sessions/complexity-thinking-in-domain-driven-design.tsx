import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/a-practical-guide-for-domain-driven-design-teams";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Complexity Thinking in Domain Driven Design",
  description: `In the software development process, domain-driven design can help us solve the core problem of complex domain modeling. How to make good use of domain-driven design, and to determine whether a method and domain-driven design follow the same principles, we need to re-examine the complex problem itself. In this session, David will lead the audience to reorganize the various methods and schools of complex thinking, and will also focus on using "Cynefin Dynamics" to correct the problems we encountered in the process of using domain-driven design methods.`,
  detail: (
    <>
      <Typography>
        {`In the software development process, domain-driven design can help us solve the core problem of complex domain modeling. How to make good use of domain-driven design, and to determine whether a method and domain-driven design follow the same principles, we need to re-examine the complex problem itself. In this session, David will lead the audience to reorganize the various methods and schools of complex thinking, and will also focus on using "Cynefin Dynamics" to correct the problems we encountered in the process of using domain-driven design methods.`}
      </Typography>
      <ol>
        <Typography component="li">
          {"Epistemology and complexity thinking"}
        </Typography>
        <Typography component="li">
          {"Complexity of architecture design"}
        </Typography>
        <Typography component="li">{"Cynefin Dynamics framework"}</Typography>
        <Typography component="li">
          {"Use Cynefin Dynamics to design the practical process of DDD"}
        </Typography>
      </ol>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <ol>
        <Typography component="li">
          {"Understand the method system of complex thinking"}
        </Typography>
        <Typography component="li">
          {"Understand the Cynefin Dynamics framework and its role"}
        </Typography>
        <Typography component="li">
          {"Master how to use Cynefin Dynamics to practice DDD"}
        </Typography>
      </ol>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "David Wang",
      slug: "weiwangdavid",
      image: require("@site/src/speakers/weiwangdavidProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
