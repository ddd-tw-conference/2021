import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "在業務與技術相遇的十字路口探索系統設計 - Domain Storytelling",
  description:
    "Domain Storytelling 是由兩位軟體從業人員 Stefan Hofer 及 Henning Schwentner 所提出的方法，用於幫助（開發）團隊學習領域知識，近期開始受到 DDD 愛好者的推崇。",
  detail: (
    <>
      <Typography>
        {
          "Domain Storytelling 是由兩位軟體從業人員 Stefan Hofer 及 Henning Schwentner 所提出的方法，用於幫助（開發）團隊學習領域知識，近期開始受到 DDD 愛好者的推崇。"
        }
      </Typography>
      <Typography>
        {
          "延續 2020 年會及五月 meetup 的好評，這次我們將更深入的將 Domain Storytelling 融合在 DDD 戰略設計中及探索更多延伸應用。"
        }
      </Typography>
      <Typography>{"比想像中還簡單的系統設計：從說故事開始！"}</Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "吳佳芷",
      slug: "sandy-wu",
      image: require("@site/src/speakers/sandy-wuProfileImage.png"),
    },
    {
      name: "劉鳯軒",
      slug: "fong1143",
      image: require("@site/src/speakers/fong1143ProfileImage.png"),
    },
    {
      name: "林鴻皓",
      slug: "river0825",
      image: require("@site/src/speakers/river0825ProfileImage.png"),
    },
    {
      name: "何松穎",
      slug: "blues-ho",
      image: require("@site/src/speakers/blues-hoProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
