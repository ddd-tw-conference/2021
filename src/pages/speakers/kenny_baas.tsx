import { Typography } from "@material-ui/core";
import A from "@site/src/component/A";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/kenny_baas";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Kenny Baas-Schwegler",
  title: [
    "Deep Democratic Domain-Driven Designer",
    "Socio-technical architect",
  ],
  description:
    "Socio-technical and Domain-Driven Design architect. Facilitator of visual and collaborative modelling with Deep Democracy",
  detail: (
    <>
      <Typography>
        {
          "Socio-technical and Domain-Driven Design architect. Facilitator of visual and collaborative modelling with Deep Democracy"
        }
      </Typography>
      <Typography>
        {
          "A lot of knowledge is lost when designing and building software — lost because of hand-overs in a telephone game, confusing communication by not having a shared language, discussing complexity without visualisation and by not leveraging the full potential and wisdom of the diversity of the people. That lost knowledge while creating software impacts the sustainability, quality and value of the software product. Kenny Baas-Schwegler is a socio-technical architect. He blends IT approaches like Domain-Driven Design and Continuous Delivery and facilitates change through using visual collaboration practices, the Cynefin framework and Deep Democracy. Kenny empowers and collaboratively enables organisations, teams and groups of people in designing and building sustainable quality software products."
        }
      </Typography>
      <Typography>
        {
          "One of Kenny's core principles is sharing knowledge. He does that by writing a blog on his website "
        }
        <A href="https://baasie.com/">{"baasie.com"}</A>
        {
          " and helping curate the Leanpub book visual collaboration tool. Besides writing, he also shares experience in the Domain-Driven Design community as an organiser of Virtual Domain-Driven Design ("
        }
        <A href="https://virtualddd.com/">{"virtualddd.com"}</A>
        {
          ") and Domain Driven Design Nederland. He enjoys being a public speaker by giving talks and hands-on workshops at conferences and meetups."
        }
      </Typography>
    </>
  ),
  sessions: [
    {
      slug: "autonomy-is-that-what-we-really-want",
      name: "Autonomy, is that what we really want?",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
