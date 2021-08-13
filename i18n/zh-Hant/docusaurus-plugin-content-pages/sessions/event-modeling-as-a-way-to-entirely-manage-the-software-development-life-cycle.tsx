import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/event-modeling-as-a-way-to-entirely-manage-the-software-development-life-cycle";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Event Modeling as a Way to Entirely Manage the Software Development Life-Cycle.",
  description:
    "事件建模在事件溯源中有著深厚的淵源。 正是通過這個鏡頭捕捉，信息系統及其自動化開始變得可分解為狀態更改類型和工作流的示例呈現。 這將能讓團隊更為準確的估計和提供適當的激勵與抑制機制，以確保質量，同時消除嘗試和實現這些目標的主觀方法。 如果您的團隊準備好進入負責任的軟體開發的下一個級別，則需要考慮許多重要的變化。",
  detail: (
    <>
      <Typography>
        {
          "事件建模在事件溯源中有著深厚的淵源。 正是通過這個鏡頭捕捉，信息系統及其自動化開始變得可分解為狀態更改類型和工作流的示例呈現。 這將能讓團隊更為準確的估計和提供適當的激勵與抑制機制，以確保質量，同時消除嘗試和實現這些目標的主觀方法。 如果您的團隊準備好進入負責任的軟體開發的下一個級別，則需要考慮許多重要的變化。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"聽眾預期收穫"}
      </Typography>
      <ul>
        <Typography component="li">{"對系統開發進展獲得全新視角"}</Typography>
        <Typography component="li">
          {"準確界定專案或產品的各個功能部分"}
        </Typography>
        <Typography component="li">
          {"得到一種跟踪進度的方法，正確反映進度"}
        </Typography>
        <Typography component="li">
          {"移除像是合併衝突這樣難以修復的阻塞"}
        </Typography>
        <Typography component="li">
          {"與整個組織的多個角色透明地互動和協作"}
        </Typography>
      </ul>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Adam Dymitruk",
      slug: "adymitruk",
      image: require("@site/src/speakers/adymitrukProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
