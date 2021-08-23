import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/the-toolbox-for-initiating-agile-transformation";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "啟動敏捷轉型的工具箱",
  description:
    "敏捷轉型是近幾年來當紅的話題, 尤其在 COVID 19 疫情的影響下, 如何在動盪變化下, 快速應變已經是刻不容緩的事. 很多公司雖然開始導入敏捷轉型, 但是效果卻是不彰, 導致其他公司還是心存觀望, 想多看一些別人的做法, 好讓自己不會少些冤枉路. 在這次的分享中, 我將會分享一些工具, 讓你知道成功轉型的公司中, 他們都是怎樣讓敏捷可以落地生根的",
  detail: (
    <>
      <Typography>
        {
          "敏捷轉型是近幾年來當紅的話題, 尤其在 COVID 19 疫情的影響下, 如何在動盪變化下, 快速應變已經是刻不容緩的事. 很多公司雖然開始導入敏捷轉型, 但是效果卻是不彰, 導致其他公司還是心存觀望, 想多看一些別人的做法, 好讓自己不會少些冤枉路. 在這次的分享中, 我將會分享一些工具, 讓你知道成功轉型的公司中, 他們都是怎樣讓敏捷可以落地生根的"
        }
      </Typography>
      <ul>
        <Typography component="li">{"敏捷轉型流程"}</Typography>
        <Typography component="li">{"精實改變畫布"}</Typography>
        <Typography component="li">{"Improvement kata"}</Typography>
        <Typography component="li">{"實踐社群"}</Typography>
      </ul>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <ul>
        <Typography component="li">{"轉型工具的認識"}</Typography>
        <Typography component="li">{"別人使用工具的經驗"}</Typography>
      </ul>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "柯仁傑",
      slug: "kojenchieh",
      image: require("@site/src/speakers/kojenchiehProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
