import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/blues-ho";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Blues",
  title: ["Core member of DDD Taiwan Community"],
  description: `When I came into DDD by chance, I totally agree with Scott Millett's words "DDD is about providing value." So I  joined the DDDTW community as a core member, learn from the predecessors of the community, and try to introduce it into the refactoring of the existing system and bring new thinking to the team members.`,
  detail: (
    <>
      <Typography>
        {`When I came into DDD by chance, I totally agree with Scott Millett's words "DDD is about providing value." So I  joined the DDDTW community as a core member, learn from the predecessors of the community, and try to introduce it into the refactoring of the existing system and bring new thinking to the team members.`}
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
