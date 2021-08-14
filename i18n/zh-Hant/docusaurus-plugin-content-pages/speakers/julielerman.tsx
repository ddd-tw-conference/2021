import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/julielerman";
import escape from "lodash/escape";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Julie Lerman",
  title: [
    "Software Coach",
    "Microsoft Regional Director",
    escape("Conference Keynote & Tech Speaker"),
  ],
  description:
    "Julie Lerman 利用她數十年的經驗指導世界各地的軟體團隊，幫助他們使用 DDD 實踐對遺留軟件進行現代化改造。",
  detail: (
    <Typography>
      {
        "Julie知名的地方在於透過領域驅動設計的指導，結合同理與自身經驗來幫助軟體開發團隊從中獲益。她是一名軟體教練，擁有數十年的程式開發和軟體設計經驗。透過她的書籍、文章、Pluralsight 課程、會議演講和與客戶的密切合作來提高開發人員的技能和信心方面有著長久的經驗。"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "getting-to-ddd-pragmatic-or-principled",
      name: "Getting to DDD: Pragmatic or Principled?",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
