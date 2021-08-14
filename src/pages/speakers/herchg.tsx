import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/herchg";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Hermes",
  title: [],
  description:
    "Hermes, the helmsman of agile community in Taiwan, used to be the leader of the development team of Taiwan's leading stock market app and Taiwan's leading education platform. Both services have been continuously provided and iterated so far. He keeps practicing agility within the organization and traditional manufacturing industry, and keep influencing the organization with agile mindset. He is also a “Be the Change” practitioner and missionary who advocates that “change” starts from onself and everyone’s actions will affect the future.",
  detail: (
    <>
      <Typography>
        {
          "Hermes, the helmsman of agile community in Taiwan, used to be the leader of the development team of Taiwan's leading stock market app and Taiwan's leading education platform. Both services have been continuously provided and iterated so far. He keeps practicing agility within the organization and traditional manufacturing industry, and keep influencing the organization with agile mindset. He is also a “Be the Change” practitioner and missionary who advocates that “change” starts from onself and everyone’s actions will affect the future."
        }
      </Typography>
      <Typography>
        {
          "From engineers, entrepreneurs, to high-level technical managers, they understand the peculiarities of software development and resonate with agile thinking. In 2019, he started to embark on a professional coaching journey, focusing on agile coaches, senior executive coaches, team coaches and problem-solving fields, and use his life course as a nutrient for life coaching. He hopes that he could dedicate himself to coach others wholeheartedly and bring about a better world."
        }
      </Typography>
      <Typography>
        {
          "Hashtag #Engineer #entrepreneurship #SeniorManger #Volunteer #Visioner"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Experiences"}
      </Typography>
      <ol>
        <Typography component="li">
          {"Agile Tour 2017/2018 Kaohsiung"}
        </Typography>
        <Typography component="li">{"Agile Summit 2019"}</Typography>
        <Typography component="li">{"DDD TW 2020"}</Typography>
      </ol>
    </>
  ),
  sessions: [
    {
      slug: "rising-from-the-ashes-agile-team-rising-model-helps-you-from-defeat-to-victory",
      name: "Rising from the ashes! “Agile Team Rising Model” helps you from defeat to victory",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
