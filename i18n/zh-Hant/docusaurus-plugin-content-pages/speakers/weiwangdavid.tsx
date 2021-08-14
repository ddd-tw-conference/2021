import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/weiwangdavid";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "王威",
  title: [],
  description:
    "王威是ThoughtWorks数字化转型首席顾问、数字技术战略服务负责人和首席顾问、和首席企业架构师。在过去的几年中，王威曾先后为国内外电信、能源、银行、保险、航运物流、汽⻋制造、物联网、供应链管理等行业的全球领军企业提供数字化转型相关服务，尤其关注在通过引入数字技术战略，实现系统的平台化和现代化改造，助力企业实现数字化转型。",
  detail: (
    <Typography>
      {
        "王威是ThoughtWorks数字化转型首席顾问、数字技术战略服务负责人和首席顾问、和首席企业架构师。在过去的几年中，王威曾先后为国内外电信、能源、银行、保险、航运物流、汽⻋制造、物联网、供应链管理等行业的全球领军企业提供数字化转型相关服务，尤其关注在通过引入数字技术战略，实现系统的平台化和现代化改造，助力企业实现数字化转型。"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "complexity-thinking-in-domain-driven-design",
      name: "领域驱动设计中的复杂性思维",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
