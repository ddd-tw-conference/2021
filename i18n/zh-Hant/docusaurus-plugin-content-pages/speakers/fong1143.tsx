import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/fong1143";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "劉鳯軒",
  title: [],
  description:
    "我是 Fong，正職是一名後端工程師，下班後是 DDDTW 社群志工。曾參加過鐵人賽兩次皆得過獎。",
  detail: (
    <>
      <Typography>
        {
          "我是 Fong，正職是一名後端工程師，下班後是 DDDTW 社群志工。曾參加過鐵人賽兩次皆得過獎。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Experiences"}
      </Typography>
      <ol>
        <Typography component="li">{"2020 JSDC 線上演講"}</Typography>
        <Typography component="li">{"2020 DDDTW 八月 meetup 演講"}</Typography>
        <Typography component="li">
          {"2020 DDDTW Taichung Event Storming 工作坊"}
        </Typography>
        <Typography component="li">
          {"2020 DDDTW Taipei Event Storming 工作坊"}
        </Typography>
        <Typography component="li">
          {"2020 DDDesign Conf 年會工作坊"}
        </Typography>
      </ol>
    </>
  ),
  sessions: [
    {
      slug: "tdd-ddd-bdd-well-explained",
      name: "TDD, DDD, & BDD Well Explained",
    },
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
