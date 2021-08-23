import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/blues-ho";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "何松穎",
  title: ["DDD 小志工"],
  description:
    "在偶然間接觸DDD，對於Scott Millett的這段話 “DDD is about providing value.” 深表同意。因此加入DDDTW社群，跟著社群的前輩們一起學習這門學問，並嘗試將其導入現有系統的重構與帶給團隊成員新的思維。",
  detail: (
    <>
      <Typography>
        {
          "在偶然間接觸DDD，對於Scott Millett的這段話 “DDD is about providing value.” 深表同意。因此加入DDDTW社群，跟著社群的前輩們一起學習這門學問，並嘗試將其導入現有系統的重構與帶給團隊成員新的思維。"
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
