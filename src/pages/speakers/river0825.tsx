import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/river0825";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "River",
  title: ["Core member of DDD Taiwan Community"],
  description:
    "Core member and speaker of the DDDTW community. Full of back-end development experience, and deeply attracted by DDD in 2019. When I tried to learn and practice DDD in real business scenarios, I was stumbled by ambiguous concepts in DDD. Fortunately, I’m getting clear toward to DDD by participating the DDD Taiwan community regular meetup and deliver public speaking.",
  detail: (
    <>
      <Typography>
        {
          "Core member and speaker of the DDDTW community. Full of back-end development experience, and deeply attracted by DDD in 2019. When I tried to learn and practice DDD in real business scenarios, I was stumbled by ambiguous concepts in DDD. Fortunately, I’m getting clear toward to DDD by participating the DDD Taiwan community regular meetup and deliver public speaking."
        }
      </Typography>
    </>
  ),
  sessions: [
    {
      slug: "domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology",
      name: "Domain Storytelling - Explore system design at the crossroads where business strategy meet technology",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
