import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/start-from-scratch-essentials-of-game-development-agile-ddd";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "從0開始,遊戲開發奧義: Agile x DDD",
  description:
    "當你的電商客戶和你說他想開發一款遊戲，你也沒碰過遊戲開發時，到底該如何釐清需求並且搭建起業務和工程師之間的橋樑？",
  detail: (
    <>
      <Typography>
        {
          "當你的電商客戶和你說他想開發一款遊戲，你也沒碰過遊戲開發時，到底該如何釐清需求並且搭建起業務和工程師之間的橋樑？"
        }
      </Typography>
      <Typography>
        {
          "演講中會從專案背景，需求訪談到如何使用 Agile x DDD 的方法協助軟體需求釐清，最終和開發團隊溝通的需求樣貌"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <Typography>
        {"徹底領會如何從 0 到有開始你的 Agile x DDD 之旅"}
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Mia",
      slug: "msli",
      image: require("@site/src/speakers/msliProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
