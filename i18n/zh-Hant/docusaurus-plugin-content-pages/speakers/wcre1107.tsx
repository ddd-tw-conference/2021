import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/wcre1107";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "張安邦",
  title: [],
  description:
    "曾任國泰產險核心系統分析師、商業智慧工程師、B2C系統分析師、後端Team Lead，現職為架構師，負責前台與微服務中台的工作項目",
  detail: (
    <>
      <Typography>
        {
          "曾任國泰產險核心系統分析師、商業智慧工程師、B2C系統分析師、後端Team Lead，現職為架構師，負責前台與微服務中台的工作項目"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Experiences"}
      </Typography>
      <ol>
        <Typography component="li">{"公司內部教育訓練"}</Typography>
        <Typography component="li">{"集團內部分享"}</Typography>
      </ol>
    </>
  ),
  sessions: [
    {
      slug: "insurance-ddd-middle-platform-microservices-cathay-pPacific-property-insurance-besafe-platform-experience-sharing",
      name: "保險×DDD×中台×微服務-國泰產險BeSafe平台經驗分享",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
