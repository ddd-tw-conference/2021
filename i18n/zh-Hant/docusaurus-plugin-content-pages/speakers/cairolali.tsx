import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/cairolali";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Dr. Carola Lilienthal",
  title: ["研討會講者", "作家", "熱愛於改進的軟體架構師"],
  description:
    "Carola Lilienthal 博士是 WPS - Workplace Solutions 的管理軟體架構師，15 年來她一直和她的團隊根據領域驅動設計的原則開發軟體架構。",
  detail: (
    <Typography>
      {
        "Carola Lilienthal 博士是 WPS - Workplace Solutions 的管理軟體架構師，15 年來她一直和她的團隊根據領域驅動設計的原則開發軟體架構。"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "it-s-all-about-the-domain-honey-experiences-from-15-years-of-domain-driven-design",
      name: "關乎於領域，親愛的！ 我在領域驅動設計15 年當中的經驗",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
