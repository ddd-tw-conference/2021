import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/getting-to-ddd-pragmatic-or-principled";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "一窺堂奧 - 領域驅動設計：是基於臨場務實還是有原則可參考?",
  description:
    "DDD 是一個很大的議題。 但是，您不必成為端到端專家即可受益。 我們將研究學習 DDD 的方法，以便您在不斷學習的同時隨時可以開始。",
  detail: (
    <>
      <Typography>
        {
          "領域驅動設計是一個很大的議題。有許多美妙的概念、哲學、模式、實踐和技術可供學習和受益。多年來，業內一些最優秀的人才一直在調整這些實踐，以確保開發人員能夠實施經過驗證的、成功的軟體設計方法。特別是領域建模非常具體，指導設計和協調我們系統中無數移動部件之間交織的舞蹈。然而，對於剛接觸 DDD 的開發人員來說，學習 DDD 的原理可能令人生畏。為了鼓勵和讓更多的開發者走上 DDD 的道路，允許一種更務實的方法而不是嚴格遵守 DDD 指南的原則性方法是否合理？是否應該鼓勵開發人員從低矮的果實開始，他們可以在繼續學習的同時迅速從他們的軟件項目中受益，來獲得對領域驅動設計的更深入的理解，以便隨著他們越來越近地發展和適應他們的實踐，直到我們都知道可以用 DDD 來實現她的美。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <ul>
        <Typography component="li">
          {
            "您可以從 DDD 的個人想法中受益，而無需成為端到端專家。您將學習更有效的方法來幫助您的團隊理解、好奇並希望接受 DDD。"
          }
        </Typography>
        <Typography component="li">
          {
            "You will learn more effective ways to help you team understand, be curious about and hopefully embrace DDD."
          }
        </Typography>
      </ul>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Julie Lerman",
      slug: "julielerman",
      image: require("@site/src/speakers/julielermanProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
