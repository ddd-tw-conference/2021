import { Typography } from "@material-ui/core";
import A from "@site/src/component/A";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/twbenlu";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Ben Lu",
  title: [],
  description: "N/A",
  detail: (
    <>
      <Typography variant="h5" component="h2">
        {"Experiences"}
      </Typography>
      <ol>
        <Typography component="li">
          <A href="https://drive.google.com/drive/folders/1JS_qJcOBGbr35AF0qjuzhMCZJjiGXJXB?usp=sharing">
            Net conf 2020
          </A>
        </Typography>
        <Typography component="li">MSDN 研討會</Typography>
      </ol>
    </>
  ),
  sessions: [
    {
      slug: "towards-ddd-and-microservices-based-on-database-formalization-analysis-demand-development-model",
      name: "Towards DDD and microservices based on database formalization analysis demand development model",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
