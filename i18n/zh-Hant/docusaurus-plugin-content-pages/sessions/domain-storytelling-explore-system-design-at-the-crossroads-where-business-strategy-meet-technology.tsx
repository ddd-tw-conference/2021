import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology";
import { memo } from "react";

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
      <Typography>
        {
          "本次的工作坊中，首先將透過「同理心地圖」，站在顧客的角度進行業務的價值釐清與認定，接著學習本次主題「Domain Storytelling」來瞭解業務的全貌，再進一步做出價值選擇，找到值得解決的問題，最後深入核心領域，搭配「使用者故事地圖」並再次進行DST建模，設計出合適的解決方案。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <Typography>{"隨著業務的歷程探索，你將會體驗到"}</Typography>
      <ol>
        <Typography component="li">
          {"深度瞭解顧客，挖掘顧客的真實需求"}
        </Typography>
        <Typography component="li">
          {"瞭解業務全貌並做出價值選擇，為產品開發提供方向"}
        </Typography>
        <Typography component="li">
          {"深入核心領域，發想合適的解決方案"}
        </Typography>
      </ol>
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
