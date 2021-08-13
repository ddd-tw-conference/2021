import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/teddy.chen.tw";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "陳建村",
  title: ["泰迪軟體創辦人", "部落格「搞笑談軟工」版主"],
  description:
    "Teddy Chen，泰迪軟體創辦人，部落格「搞笑談軟工」版主。Teddy 目前為敏捷顧問與敏捷課程講師，並在台北科技大學資工系研究所擔任兼任助理教授，開設敏捷與精實軟體開發、軟體架構課程。",
  detail: (
    <Typography>
      {
        "Teddy Chen，泰迪軟體創辦人，部落格「搞笑談軟工」版主。Teddy 目前為敏捷顧問與敏捷課程講師，並在台北科技大學資工系研究所擔任兼任助理教授，開設敏捷與精實軟體開發、軟體架構課程。"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "when-dci-conjunction-with-ddd",
      name: "當 DCI 遇到 DDD",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
