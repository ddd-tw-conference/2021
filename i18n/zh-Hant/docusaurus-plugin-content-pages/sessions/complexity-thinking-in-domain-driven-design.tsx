import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/a-practical-guide-for-domain-driven-design-teams";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "领域驱动设计中的复杂性思维",
  description: `在软件开发过程中，领域驱动设计可以帮助我们解决复杂领域建模这一核心问题。如何利用好领域驱动设计，以及判断一个方法是否和领域驱动设计遵循了同样的原则，我们需要重新审视复杂问题本身。在本演讲中，讲师将带领听众，重新梳理复杂性思考的各种方法流派，也将着重介绍利用“Cynefin Dynamics”来修正我们在使用领域驱动设计方法的过程中所遇到的问题。`,
  detail: (
    <>
      <Typography>
        {`在软件开发过程中，领域驱动设计可以帮助我们解决复杂领域建模这一核心问题。如何利用好领域驱动设计，以及判断一个方法是否和领域驱动设计遵循了同样的原则，我们需要重新审视复杂问题本身。在本演讲中，讲师将带领听众，重新梳理复杂性思考的各种方法流派，也将着重介绍利用“Cynefin Dynamics”来修正我们在使用领域驱动设计方法的过程中所遇到的问题。`}
      </Typography>
      <ol>
        <Typography component="li">{"认知论和复杂性思考"}</Typography>
        <Typography component="li">{"架构设计的复杂性"}</Typography>
        <Typography component="li">{"Cynefin Dynamics框架"}</Typography>
        <Typography component="li">
          {"利用Cynefin Dynamics来设计DDD的实践过程"}
        </Typography>
      </ol>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <ol>
        <Typography component="li">{"了解复杂性思考的方法体系"}</Typography>
        <Typography component="li">
          {"了解Cynefin Dynamics框架及其作用"}
        </Typography>
        <Typography component="li">
          {"掌握如何使用Cynefin Dynamics来实践DDD"}
        </Typography>
      </ol>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "王威",
      slug: "weiwangdavid",
      image: require("@site/src/speakers/weiwangdavidProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
