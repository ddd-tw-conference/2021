import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/msli";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "李孟萱",
  title: [],
  description:
    "擔任過系統分析師、專案經理、產品經理，目前正在挑戰商業開發， 擅長搭建領域知識和技術之間的橋樑。",
  detail: (
    <>
      <Typography>
        {
          "兩年系統分析、四年產品及專案管理經驗，主要在軟體及零售物流行業。 擅長客戶管理、產品設計、系統分析及運營企劃、工作流程優化管理等。 喜歡在工作中藉由DDD或設計思考等方法論，使溝通效率提升優化產品開發效率，讓軟體開發流程更順暢。 近期正在挑戰商業開發，運用軟體協助客戶成就目標，拉出策略並落地執行。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Experiences"}
      </Typography>
      <ul>
        <Typography component="li">
          {"2020 DDD Taiwan Conference - 非技術背景的PM該如何做好需求訪談"}
        </Typography>
      </ul>
    </>
  ),
  sessions: [
    {
      slug: "start-from-scratch-essentials-of-game-development-agile-ddd",
      name: "從0開始,遊戲開發奧義: Agile x DDD",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
