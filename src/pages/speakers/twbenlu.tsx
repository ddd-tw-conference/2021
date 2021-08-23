import { Typography } from "@material-ui/core";
import A from "@site/src/component/A";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/twbenlu";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Ben Lu",
  title: [],
  description:
    "Ben Lu is working for a new startup company as Chief Technology Officer. Prior to join the startup , Ben has full experienced as  software engineer, MIS system engineer, Microsoft technical support consultant, Microsoft MVP (2014~2018), and chief information officer. In his more than 15 years of IT career, he has been facing the rapidly declining software industry with an attitude of [moving against the current, if not advancing, then retreating]. For now, he is currently building products based on Angular, .NET Core, Docker, Ceph, MongoDB, Redis, Machine learning... etc.",
  detail: (
    <>
      <Typography>
        {
          "Ben Lu is working for a new startup company as Chief Technology Officer. Prior to join the startup , Ben has full experienced as  software engineer, MIS system engineer, Microsoft technical support consultant, Microsoft MVP (2014~2018), and chief information officer. In his more than 15 years of IT career, he has been facing the rapidly declining software industry with an attitude of [moving against the current, if not advancing, then retreating]. For now, he is currently building products based on Angular, .NET Core, Docker, Ceph, MongoDB, Redis, Machine learning... etc."
        }
      </Typography>
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
