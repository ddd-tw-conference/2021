import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/brucezhang";
import escape from "lodash/escape";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "張逸",
  title: [escape("《解构领域驱动设计》作者"), escape("场量科技联合创始人")],
  description:
    "张逸，高质量编码实践者，领域驱动设计布道师，微服务系统架构师，大数据平台架构师，敏捷转型咨询师。热衷于编程语言学习与技艺提升，致力于将企业架构、精益需求管理、领域驱动设计与微服务架构完美结合，打造面向企业的业务中台；致力于将数据仓库、实时流处理、机器学习与高性能存储完美结合，打造面向行业的智能数据中台。",
  detail: (
    <Typography>
      {
        "张逸，高质量编码实践者，领域驱动设计布道师，微服务系统架构师，大数据平台架构师，敏捷转型咨询师。热衷于编程语言学习与技艺提升，致力于将企业架构、精益需求管理、领域驱动设计与微服务架构完美结合，打造面向企业的业务中台；致力于将数据仓库、实时流处理、机器学习与高性能存储完美结合，打造面向行业的智能数据中台。"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "a-practical-guide-for-domain-driven-design-teams",
      name: "领域驱动设计团队实践指南",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
