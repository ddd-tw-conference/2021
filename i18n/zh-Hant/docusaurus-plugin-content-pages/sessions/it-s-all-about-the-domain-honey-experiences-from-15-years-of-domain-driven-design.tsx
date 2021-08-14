import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/it-s-all-about-the-domain-honey-experiences-from-15-years-of-domain-driven-design";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "關乎於領域，親愛的！ 我在領域驅動設計15 年當中的經驗",
  description:
    "構建軟體時會使用非常多很好的技術、編程語言和工具。 那確實很棒。 但遺憾的是，人們往往忽略了一個事實，決定性因素不是技術，而是業務領域。 如果我們不在軟體中體現出領域語言和業務流程，那麼它將無助於我們的用戶的工作。 世界上沒有任何技術可以保護我們免受這種傷害。",
  detail: (
    <>
      <Typography>
        {
          "構建軟體時會使用非常多很好的技術、編程語言和工具。 那確實很棒。 但遺憾的是，人們往往忽略了一個事實，決定性因素不是技術，而是業務領域。 如果我們不在軟體中體現出領域語言和業務流程，那麼它將無助於我們的用戶的工作。 世界上沒有任何技術可以保護我們免受這種傷害。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"預期聽眾收穫"}
      </Typography>
      <Typography>
        {
          "在本次演講中，我將向您展示如何以一種能夠理解業務語言的方式構建系統，以及領域驅動設計 (DDD) 和微服務如何幫助我們做到這一點。"
        }
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Dr. Carola Lilienthal",
      slug: "cairolali",
      image: require("@site/src/speakers/cairolaliProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
