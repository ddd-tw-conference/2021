import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/that-year-the-pit-we-stepped-on-together";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "那一年，我們一起踩過的坑",
  description:
    "這兩年在公司內推廣DDD遇到許多狀況，跟大家分享大型公司導入時所遇到的一些問題及我們目前的解決方法，希望讓聽者能夠預先設想並避免重蹈覆轍",
  detail: (
    <>
      <Typography>
        {
          "這兩年在公司內推廣DDD遇到許多狀況，跟大家分享大型公司導入時所遇到的一些問題及我們目前的解決方法，希望讓聽者能夠預先設想並避免重蹈覆轍"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <Typography>
        {"了解正在導入DDD可能會遇到狀況，作為日後於自己組織或公司的參考"}
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "簡維德",
      slug: "wade.chien",
      image: require("@site/src/speakers/wade.chienProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
