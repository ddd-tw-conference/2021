import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/herchg";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "張昀煒",
  title: [],
  description: `敏捷總舵主 Hermes，曾是台灣龍頭股票看盤 app 與台灣龍頭教育平台服務開發團隊主管，兩項服務至今都持續提供服務、迭代。在組織內實踐敏捷，在傳統製造業內部實踐敏捷，用敏捷思維影響組織並持續發揮影響力。是 ”Be The Change“ 實踐者與傳教士，主張 "改變" 從自己做起，每個人現在的行動會持續影響未來。從工程師、創業、高階技術經理人，體會到軟體開發的特殊性，並在敏捷思維裡找到與自身價值觀的同頻。2019 年開始正式踏入專業教練旅程，專注於敏捷教練、高階主管教練、團隊教練與問題解決領域，用自己的生命歷程作為生命教練的養分。期許自己用生命做教練，用靈魂做教練，帶來更美好的世界。`,
  detail: (
    <>
      <Typography>
        {`敏捷總舵主 Hermes，曾是台灣龍頭股票看盤 app 與台灣龍頭教育平台服務開發團隊主管，兩項服務至今都持續提供服務、迭代。在組織內實踐敏捷，在傳統製造業內部實踐敏捷，用敏捷思維影響組織並持續發揮影響力。是 ”Be The Change“ 實踐者與傳教士，主張 "改變" 從自己做起，每個人現在的行動會持續影響未來。從工程師、創業、高階技術經理人，體會到軟體開發的特殊性，並在敏捷思維裡找到與自身價值觀的同頻。2019 年開始正式踏入專業教練旅程，專注於敏捷教練、高階主管教練、團隊教練與問題解決領域，用自己的生命歷程作為生命教練的養分。期許自己用生命做教練，用靈魂做教練，帶來更美好的世界。`}
      </Typography>
      <Typography>
        {"Hashtag #工程師 #創業 #高階經理人 #志工 #敘畫人"}
      </Typography>
      <Typography variant="h5" component="h2">
        {"Experiences"}
      </Typography>
      <ol>
        <Typography component="li">
          {"Agile Tour 2017/2018 Kaohsiung"}
        </Typography>
        <Typography component="li">{"Agile Summit 2019"}</Typography>
        <Typography component="li">{"DDD TW 2020"}</Typography>
      </ol>
    </>
  ),
  sessions: [
    {
      slug: "rising-from-the-ashes-agile-team-rising-model-helps-you-from-defeat-to-victory",
      name: "浴火重生！敏捷團隊重生模型 (Agile Team Rising Model)，從絕敗走向卓越",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
