import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/application-modernization-steps-and-implementation";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "應用現代化的步驟與實作",
  description:
    "此次，Rex 會分享 VMware Swift Method，這是 Pivotal Labs 以領域驅動設計協助客戶應用現代化工作過程中，所萃煉出來的實作方式；期待提供給聽眾，可以在自己工作上，依據 Swift Method，如同 Pivotal Labs 專家一樣， 開始在自己的工作中，實踐領域驅動設計。",
  detail: (
    <>
      <Typography>
        {
          "此次，Rex 會分享 VMware Swift Method，這是 Pivotal Labs 以領域驅動設計協助客戶應用現代化工作過程中，所萃煉出來的實作方式；期待提供給聽眾，可以在自己工作上，依據 Swift Method，如同 Pivotal Labs 專家一樣， 開始在自己的工作中，實踐領域驅動設計。"
        }
      </Typography>
      <ol>
        <Typography component="li">{"VMware(Pivotal)與DDD的淵源"}</Typography>
        <Typography component="li">
          {"應用現代化的具體步驟 - Swift Method"}
        </Typography>
        <Typography component="li">
          {"如何運用 Spring Framework 測試開發微服務"}
        </Typography>
        <Typography component="li">{"結論"}</Typography>
      </ol>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <Typography>
        {"可以理解 VMware(Pivotal) 的方法與 Spring 開發現代化應用"}
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "王鈞平",
      slug: "rexwang",
      image: require("@site/src/speakers/rexwangProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
