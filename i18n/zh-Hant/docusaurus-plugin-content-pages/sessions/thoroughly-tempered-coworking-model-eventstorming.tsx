import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/thoroughly-tempered-coworking-model-eventstorming";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "千錘百鍊-Event Storming",
  description: `由 Alberto Brandolini 發明提出是對於 ”團隊在面對商業領域中的知識複雜度進行梳理及統一認知”的解決方案 => 利用有系統的方式讓團隊在高度互動中快速了解商業領域中所發生的事件，並將重點放在時間演進與事件於時間軸上的相對應關係，進而探索盲點、挖掘新項目且建立共識。與需求釐清不同的是以綜觀的角度更加關注參加者之間的對話以達到對目標的共識。故也可以應用於系統設計之外的策略思考和流程設計上，好棒棒的大物大家快來了解使用吧!!!`,
  detail: (
    <>
      <Typography>
        {`由 Alberto Brandolini 發明提出是對於 ”團隊在面對商業領域中的知識複雜度進行梳理及統一認知”的解決方案 => 利用有系統的方式讓團隊在高度互動中快速了解商業領域中所發生的事件，並將重點放在時間演進與事件於時間軸上的相對應關係，進而探索盲點、挖掘新項目且建立共識。與需求釐清不同的是以綜觀的角度更加關注參加者之間的對話以達到對目標的共識。故也可以應用於系統設計之外的策略思考和流程設計上，好棒棒的大物大家快來了解使用吧!!!`}
      </Typography>
      <Typography>
        {
          "延續 2020 年會及七月 meetup 的好評，這次我們將更深入的將 Event Storming 帶入下一階段並融入 DDD 戰略設計的觀點進行探索及延伸應用。"
        }
      </Typography>
      <Typography>
        {
          "藉由 Big Picture Model 帶入 Process Modelling 的實作後，融合 DDD 戰略設計的觀點進行分析，為後續實際開發中執行戰術的應用進行鋪路。"
        }
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Morty",
      slug: "morty",
      image: require("@site/src/speakers/mortyProfileImage.png"),
    },
    {
      name: "Ean",
      slug: "eanlee",
      image: require("@site/src/speakers/eanleeProfileImage.png"),
    },
    {
      name: "鄭棋文",
      slug: "chiwencheng",
      image: require("@site/src/speakers/chiwenchengProfileImage.png"),
    },
    {
      name: "Max",
      slug: "max",
      image: require("@site/src/speakers/maxProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
