import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/sandy-wu";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Sandy",
  title: ["DDD Core member"],
  description:
    "In recent years, I started to learn and practice Domain-Driven Design (DDD) and as a core member for DDDesign Taiwan Community; Currently I work in a information department of the financial industry as the team leader of the development department, and is committed to the promotion and application of DDD in the company.",
  detail: (
    <>
      <Typography>
        {
          "In recent years, I started to learn and practice Domain-Driven Design (DDD) and as a core member for DDDesign Taiwan Community; Currently I work in a information department of the financial industry as the team leader of the development department, and is committed to the promotion and application of DDD in the company."
        }
      </Typography>
      <Typography>
        {
          "As a facilitator in the 2020 DDD Taiwan conference workshop, a lecturer/facilitator in the DDD Taiwan 2021 May and July meetup workshops, and also held DDD related workshops in the company."
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
