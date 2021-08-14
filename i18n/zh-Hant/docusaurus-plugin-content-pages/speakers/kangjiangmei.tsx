import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/kangjiangmei";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "亢江妹",
  title: ["Lead Consultant"],
  description:
    "亢江妹，ThoughtWorks首席产品经理、产品咨询顾问，是ThoughtWorks中国区EDGE服务的负责人、《ThoughtWorks卓越数字产品经理研修营》的发起人、负责人和主讲师；也是《精益产品需求特训营》、《敏捷需求练功坊》、《2021产品设计挑战赛》的发起人和主导师。有15年以上、跨行业的大型企业产品管理经验，当前专注于数字产品价值成效管理、产品制转型、跨业务和IT融合的体系化产品人才培养、精益产品创新、ToB产品创新探索和设计、平台型产品的探索和战略规划、大型敏捷产品团队的管理实践和实战落地辅导等。",
  detail: (
    <Typography>
      {
        "亢江妹，ThoughtWorks首席产品经理、产品咨询顾问，是ThoughtWorks中国区EDGE服务的负责人、《ThoughtWorks卓越数字产品经理研修营》的发起人、负责人和主讲师；也是《精益产品需求特训营》、《敏捷需求练功坊》、《2021产品设计挑战赛》的发起人和主导师。有15年以上、跨行业的大型企业产品管理经验，当前专注于数字产品价值成效管理、产品制转型、跨业务和IT融合的体系化产品人才培养、精益产品创新、ToB产品创新探索和设计、平台型产品的探索和战略规划、大型敏捷产品团队的管理实践和实战落地辅导等。"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "concept-model-what-why-and-how",
      name: "概念模型：What, Why and How",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
