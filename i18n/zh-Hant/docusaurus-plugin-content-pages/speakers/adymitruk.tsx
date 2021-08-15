import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/adymitruk";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Adam Dymitruk",
  title: [
    "EventModeling author",
    'Original Contributor <a href="https://twitter.com/search?q=%23CQRS&src=hashtag_click" target="_blank" rel="noopener noreferrer">#CQRS</a>/<a href="https://twitter.com/search?q=%23EventSourcing&src=hashtag_click" target="_blank" rel="noopener noreferrer">#EventSourcing</a>,',
    'CEO <a href="https://twitter.com/AdaptechGroup" target="_blank" rel="noopener noreferrer">@AdaptechGroup</a>',
  ],
  description:
    "Adam Dymitruk 是事件建模( Event Modeling)的創造者。 這種方法正在徹底改變信息系統的描述方式。 自 2008 年以來，Adam 是事件溯源和 CQRS 理論與實踐的核心貢獻者。這包括引入 PAXOS 以擴展該方法的事務性方面。 他是 StackOverflow 上版本控制的前 1% 貢獻者之一，包括持有該主題的 2 個金徽章之一。",
  detail: (
    <Typography>
      {
        "Adam Dymitruk 是事件建模( Event Modeling)的創造者。 這種方法正在徹底改變信息系統的描述方式。 自 2008 年以來，Adam 是事件溯源和 CQRS 理論與實踐的核心貢獻者。這包括引入 PAXOS 以擴展該方法的事務性方面。 他是 StackOverflow 上版本控制的前 1% 貢獻者之一，包括持有該主題的 2 個金徽章之一。"
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "event-modeling-as-a-way-to-entirely-manage-the-software-development-life-cycle",
      name: "通過事件建模作為管理軟件開發生命週期的方式",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
