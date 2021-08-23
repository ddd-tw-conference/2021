import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/kojenchieh";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "柯仁傑",
  title: ["Odd-e Agile Coach"],
  description:
    "台灣 Agile Tour Taipei 的組織者之一、致力於推廣敏捷技術，在 Facebook 建立有兩個社群（Scrum Community in Taiwan 和 AgileCommunity.tw），希望能把 Agile 傳播到台灣更多城市，曾任職於趨勢科技，並從 2008 起在公司內使用 Scrum 開發方法，教導其他團隊如何實施敏捷，並在公司內負責訓練引導師，利用設計思維（design thinking）來進行產品的創新改革。",
  detail: (
    <Typography>
      {
        "台灣 Agile Tour Taipei 的組織者之一、致力於推廣敏捷技術，在 Facebook 建立有兩個社群（Scrum Community in Taiwan 和 AgileCommunity.tw），希望能把 Agile 傳播到台灣更多城市，曾任職於趨勢科技，並從 2008 起在公司內使用 Scrum 開發方法，教導其他團隊如何實施敏捷，並在公司內負責訓練引導師，利用設計思維（design thinking）來進行產品的創新改革。"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "the-toolbox-for-initiating-agile-transformation",
      name: "啟動敏捷轉型的工具箱",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
