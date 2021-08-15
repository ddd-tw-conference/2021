import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/sandy-wu";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "吳佳芷",
  title: ["DDDTW志工"],
  description:
    "近幾年開始接觸DDD，並擔任DDDTW志工；目前任職於金融業資訊部門，擔任開發部門小組長，並致力於在公司中推廣及應用DDD。",
  detail: (
    <>
      <Typography>
        {
          "近幾年開始接觸 DDD，並擔任 DDDTW 志工，目前任職於金融業資訊部門，擔任開發部門小組長，負責的領域為個人金融財富管理，並致力於在公司中推廣及應用 DDD。曾擔任 2020 DDD 年會工作坊助教、DDDTW 2021 五月及七月 meetup 工作坊講者/引導者及助教、也曾在公司內部舉辦 DDD 相關工作坊教學。"
        }
      </Typography>
    </>
  ),
  sessions: [
    {
      slug: "domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology",
      name: "在業務與技術相遇的十字路口探索系統設計 - Domain Storytelling",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
