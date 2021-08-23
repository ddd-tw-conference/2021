import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/weiwangdavid";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "王威",
  title: [],
  description:
    "王威是ThoughtWorks數位轉型首席顧問、數位技術戰略服務負責人和首席顧問、和首席企業架構師。在過去的幾年中，王威曾先後為國內外電信、能源、銀行、保險、航運物流、汽⻋製造、物聯網、供應鏈管理等行業的全球領軍企業提供數字化轉型相關服務，尤其關注在通過引入數字技術戰略，實現系統的平台化和現代化改造，助力企業實現數位轉型。",
  detail: (
    <Typography>
      {
        "王威是ThoughtWorks數位轉型首席顧問、數位技術戰略服務負責人和首席顧問、和首席企業架構師。在過去的幾年中，王威曾先後為國內外電信、能源、銀行、保險、航運物流、汽⻋製造、物聯網、供應鏈管理等行業的全球領軍企業提供數字化轉型相關服務，尤其關注在通過引入數字技術戰略，實現系統的平台化和現代化改造，助力企業實現數位轉型。"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "complexity-thinking-in-domain-driven-design",
      name: "領域驅動設計中的複雜性思維",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
