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
    "Adam Dymitruk is the author of Event Modeling. The approach is revolutionizing how information systems are described. Adam is a core contributor to event sourcing and CQRS theory and practice since 2008. This included introducing PAXOS to scaling the transactional side of the approach. He is one of the top 1% contributors on StackOverflow for version control including holding one of the 2 gold badges on the subject.",
  detail: (
    <Typography>
      {
        "Adam Dymitruk is the author of Event Modeling. The approach is revolutionizing how information systems are described. Adam is a core contributor to event sourcing and CQRS theory and practice since 2008. This included introducing PAXOS to scaling the transactional side of the approach. He is one of the top 1% contributors on StackOverflow for version control including holding one of the 2 gold badges on the subject."
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "event-modeling-as-a-way-to-entirely-manage-the-software-development-life-cycle",
      name: "Event Modeling as a Way to Entirely Manage the Software Development Life-Cycle.",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
