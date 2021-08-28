import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/insurance-ddd-middle-platform-microservices-cathay-pacific-property-insurance-besafe-platform-experience-sharing";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "保險×DDD×中台×微服務-國泰產險BeSafe平台經驗分享",
  description:
    "國泰產險在2020年底推出了BeSafe享出門平台，其中使用到微服務、中台、DDD等技術。本次與大家分享三者之間的關係，金融機構在導入DDD過程中從方法論應用到落地執行的前因後果，其中DDD又扮演怎樣重要的角色？而在導入過程中，又遇到了什麼困難與挑戰？",
  detail: (
    <>
      <Typography>
        {
          "國泰產險在2020年底推出了BeSafe享出門平台，其中使用到微服務、中台、DDD等技術。本次與大家分享三者之間的關係，金融機構在導入DDD過程中從方法論應用到落地執行的前因後果，其中DDD又扮演怎樣重要的角色？而在導入過程中，又遇到了什麼困難與挑戰？"
        }
      </Typography>
      <ul>
        <Typography component="li">{"國泰產險BeSafe 平台簡介"}</Typography>
        <Typography component="li">{"微服務、中台、DDD 間的關係"}</Typography>
        <Typography component="li">
          {"如何在系統開發前期導入 DDD 戰略設計"}
        </Typography>
        <Typography component="li">
          {"因應專案及大型組織分工，產生的應變調整"}
        </Typography>
      </ul>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <ul>
        <Typography component="li">
          {"了解DDD、中台、微服務之個別概念"}
        </Typography>
        <Typography component="li">
          {"了解DDD、中台、微服務之間的相互關係"}
        </Typography>
        <Typography component="li">{"大型組織可能會遇到的經驗"}</Typography>
      </ul>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "張安邦",
      slug: "wcre1107",
      image: require("@site/src/speakers/wcre1107ProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
