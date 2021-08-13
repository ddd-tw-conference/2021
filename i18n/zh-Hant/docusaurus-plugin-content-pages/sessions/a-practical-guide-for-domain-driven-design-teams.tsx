import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/a-practical-guide-for-domain-driven-design-teams";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "领域驱动设计团队实践指南",
  description:
    "如果DDD只为提升个人技能，则DDD将很难在团队实践成功，除了技能的原因，团队成员的协作、遵守的纪律、实施的过程都会干扰和影响DDD的落地实施。本演讲主题将针对这一问题，结合具体的实施案例提出面向团队的领域驱动设计实践指南，降低团队实施DDD的门槛，保证DDD实施的成功率。",
  detail: (
    <>
      <Typography>
        {
          "如果DDD只为提升个人技能，则DDD将很难在团队实践成功，除了技能的原因，团队成员的协作、遵守的纪律、实施的过程都会干扰和影响DDD的落地实施。本演讲主题将针对这一问题，结合具体的实施案例提出面向团队的领域驱动设计实践指南，降低团队实施DDD的门槛，保证DDD实施的成功率。"
        }
      </Typography>
      <Typography>
        {
          "本演讲将DDD的设计模式、实施过程与敏捷迭代开发、流程进度管控、需求分析管理、团队角色协作结合起来，通过定义领域驱动设计统一过程，给出团队实践DDD的参考指南、最佳实践、团队纪律与交付物模板。"
        }
      </Typography>
      <Typography>{"演讲分为"}</Typography>
      <ol>
        <Typography component="li">{"DDD成功实施的必要条件"}</Typography>
        <Typography component="li">{"领域驱动设计统一过程"}</Typography>
        <Typography component="li">{"业务服务驱动的分析设计方法"}</Typography>
        <Typography component="li">{"领域驱动设计过程交付物"}</Typography>
        <Typography component="li">{"领域驱动设计团队纪律"}</Typography>
      </ol>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <ol>
        <Typography component="li">
          {"掌握领域驱动设计的团队实施过程"}
        </Typography>
        <Typography component="li">
          {"掌握以业务服务为基本业务单元的需求分析方法"}
        </Typography>
        <Typography component="li">
          {"了解一种能够降低团队实施DDD难度的设计方法"}
        </Typography>
        <Typography component="li">
          {"了解成功实施该过程方法的业界案例"}
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
      name: "張逸",
      slug: "brucezhang",
      image: require("@site/src/speakers/brucezhangProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
