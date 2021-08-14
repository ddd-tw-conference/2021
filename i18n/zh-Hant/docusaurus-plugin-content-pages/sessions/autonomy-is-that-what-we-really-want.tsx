import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/autonomy-is-that-what-we-really-want";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "我們真的需要 Autonomy 嗎？",
  description:
    "資訊科技的「Autonomy (自主性)」一直受到關注；從程式碼自治、編碼自治、具有微服務的自治系統到自治的高效團隊。當你閱讀 Daniel Pink 在 《 Drive 》 一書中的研究時，這是有道理的；自主性是激勵我們的三件事之一；這是一個人做出自己決定的能力。然而，自治通常會導致與程式碼、團隊或組織的其他部分隔離和脫節。那麼我們如何在保持與團隊/組織的聯繫以保持自主性的同時平衡個人需求？",
  detail: (
    <>
      <Typography>
        {
          "資訊科技的「Autonomy (自主性)」一直受到關注；從程式碼自治、編碼自治、具有微服務的自治系統到自治的高效團隊。當你閱讀 Daniel Pink 在 《 Drive 》 一書中的研究時，這是有道理的；自主性是激勵我們的三件事之一；這是一個人做出自己決定的能力。然而，自治通常會導致與程式碼、團隊或組織的其他部分隔離和脫節。那麼我們如何在保持與團隊/組織的聯繫以保持自主性的同時平衡個人需求？"
        }
      </Typography>
      <Typography>
        {
          "在本次演講中，我們將介紹我們在 IT 中處理的所有級別，從程式碼到組織協作。我們將在每個級別上討論自主性，並解釋我們如何經常將自主性與個人需求混淆。這些個人需求可能會變得孤立，並與程式碼、團隊和組織脫節。透過範例，我們將展示當我們過度強調自主性時，如何給我們帶來了在代碼、團隊和組織中被孤立和耦合的缺點。您將在演講結束時了解極端管理 (polarity management) 如何幫助您管理個人與團隊/組織之間的這種悖論，並從整體和個人中獲得平衡。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <Typography>
        {
          "了解極性管理如何幫助您處理個人與團隊/組織之間的這種矛盾，並從整體和個人中獲得平衡的利益。"
        }
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Evelyn Van Kelle",
      slug: "evelynvankelle",
      image: require("@site/src/speakers/evelynvankelleProfileImage.png"),
    },
    {
      name: "Kenny Baas-Schwegler",
      slug: "kenny_baas",
      image: require("@site/src/speakers/kenny_baasProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
