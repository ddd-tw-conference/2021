import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/a-practical-guide-for-domain-driven-design-teams";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "概念模型：What, Why and How",
  description:
    "在产品设计的过程中，如何把用户场景、准确地提炼成“概念（Concept）”，又如何把“概念（Concept）”缕清楚，构建成领域模型，对于复杂的业务产品是非常核心的；如果一开始概念提炼错了、模型构建错了，一定会出现产品不好用、功能不好加，为技术架构带来灾难，进而拖垮整个产品。提炼概念，在体验设计师、BA和架构师之间其实是相同的；对“概念”达成一致，领域模型也呼之欲出，进而能让应用和技术的架构设计良好地映射到业务和用户场景。本次分享从团队中体验设计、BA和技术人员的视角，用实例说明如何协同起来构建概念模型，指导技术设计。",
  detail: (
    <>
      <Typography>
        {
          "在产品设计的过程中，如何把用户场景、准确地提炼成“概念（Concept）”，又如何把“概念（Concept）”缕清楚，构建成领域模型，对于复杂的业务产品是非常核心的；如果一开始概念提炼错了、模型构建错了，一定会出现产品不好用、功能不好加，为技术架构带来灾难，进而拖垮整个产品。提炼概念，在体验设计师、BA和架构师之间其实是相同的；对“概念”达成一致，领域模型也呼之欲出，进而能让应用和技术的架构设计良好地映射到业务和用户场景。本次分享从团队中体验设计、BA和技术人员的视角，用实例说明如何协同起来构建概念模型，指导技术设计。"
        }
      </Typography>
      <ol>
        <Typography component="li">{"概念？领域？"}</Typography>
        <Typography component="li">{"为什么概念模型是根本"}</Typography>
        <Typography component="li">{"构建概念模型"}</Typography>
        <ol>
          <Typography component="li">
            {`体验视角：从用户场景和机会创想提炼“概念”，创作原型`}
          </Typography>
          <Typography component="li">
            {`需求视角：从原型充实“概念”要素及“概念”之间的关系`}
          </Typography>
          <Typography component="li">
            {`技术视角：从方案视角检验概念及其关系，进行反馈和优化`}
          </Typography>
          <Typography component="li">
            {`协同视角：构建概念模型，定义设计原则`}
          </Typography>
        </ol>
        <Typography component="li">{"Tips"}</Typography>
      </ol>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <Typography>
        {"了解什么是概念模型、必要性、应用场景及构建概念模型的大致思路和示例"}
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "亢江妹",
      slug: "kangjiangmei",
      image: require("@site/src/speakers/kangjiangmeiProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
