import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/fong1143";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Fong",
  title: [],
  description:
    "Hi, I’m Fong, currently a backend engineer. After work, I am the volunteer and speaker of DDDTW community. Aslo, I attended the ITHELP 30-day Blog Contest and won the prizes twice.",
  detail: (
    <>
      <Typography>
        {
          "Hi, I’m Fong, currently a backend engineer at Carousell.  I love to share knowledge, and thus I become the volunteer and speaker of DDDTW community. Meanwhile, I attended the ITHELP 30-day Blog Contest and won the prizes twice, my blog titles are “Think in GraphQL” and “Think in Domain-Driven Design”."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Experiences"}
      </Typography>
      <ol>
        <Typography component="li">
          {"2020 JSDC in Taiwan - speaker"}
        </Typography>
        <Typography component="li">
          {"2020 DDDTW August meetup - speaker"}
        </Typography>
        <Typography component="li">
          {"2020 DDDTW Taichung Event Storming workshop - host"}
        </Typography>
        <Typography component="li">
          {"2020 DDDTW Taipei Event Storming - host"}
        </Typography>
        <Typography component="li">
          {"2020 DDDesign Conf Event Storming workshop - host"}
        </Typography>
      </ol>
    </>
  ),
  sessions: [
    {
      slug: "tdd-ddd-bdd-well-explained",
      name: "TDD, DDD, & BDD Well Explained",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
