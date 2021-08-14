import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/rising-from-the-ashes-agile-team-rising-model-helps-you-from-defeat-to-victory";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Rising from the ashes! “Agile Team Rising Model” helps you from defeat to victory",
  description:
    "Agile Team Rebirth Model. Is your team collaboration always stuck? I have gathered many years of practical experience and summarized 5 obstacles that affect teamwork, 3 skills and 7 steps towards collaboration. The five obstacles that affect teamwork include: depression, neglect, detours, revenge, and avoidance. However, moving towards agile teamwork only requires three skills which are to observe, feel completely, and stop resisting. With the 3 skills and  the 7 steps of practice, focus on self and others, starting from seeing the facts, sorting out the context, stopping, receiving, transforming, doing something and doing nothing, until the dawn of the team sees it.",
  detail: (
    <>
      <Typography>
        {
          "Agile Team Rebirth Model. Is your team collaboration always stuck? I have gathered many years of practical experience and summarized 5 obstacles that affect teamwork, 3 skills and 7 steps towards collaboration. The five obstacles that affect teamwork include: depression, neglect, detours, revenge, and avoidance. However, moving towards agile teamwork only requires three skills which are to observe, feel completely, and stop resisting. With the 3 skills and  the 7 steps of practice, focus on self and others, starting from seeing the facts, sorting out the context, stopping, receiving, transforming, doing something and doing nothing, until the dawn of the team sees it."
        }
      </Typography>
      <Typography>
        {
          "Is teamwork always stuck? I will share 5 obstacles that affect teamwork, 3 skills and 7 steps to an agile team."
        }
      </Typography>
      <Typography>{"5 obstacles that affect teamwork"}</Typography>
      <ol>
        <Typography component="li">
          {
            "Repression: endure all of others' teams and say nothing, and be silent about the needs of my team"
          }
        </Typography>
        <Typography component="li">
          {
            "Ignore: Ignore the feelings of my team and the needs of others' teams"
          }
        </Typography>
        <Typography component="li">
          {"Detour: deliberately bypassing other’s teams"}
        </Typography>
        <Typography component="li">
          {"Retaliation: silent retaliation against others' teams"}
        </Typography>
        <Typography component="li">
          {"Escape: Escape the cooperation between my team and others' teams"}
        </Typography>
      </ol>
      <Typography>{"3 tips for agile teamwork"}</Typography>
      <ol>
        <Typography component="li">
          {
            "Observation: Open your mind and observe the facts, feelings, mind, and see the essence of the team"
          }
        </Typography>
        <Typography component="li">
          {
            "Feel completely: feel the source, feel the state of my team, fully accept, identify and appreciate this state, connect to the source, accept, listen, and experience this power"
          }
        </Typography>
        <Typography component="li">
          {
            "Stop resisting and follow the current: standing in the shadows can you feel the light, stop confronting, extract strength, and move forward with courage"
          }
        </Typography>
      </ol>
      <Typography>{"7 steps for agile teamwork"}</Typography>
      <ol>
        <Typography component="li">
          {"Focus: focus on the intentions of my team"}
        </Typography>
        <Typography component="li">
          {
            "Confirmation: confirm the state of oneself with a positive attitude"
          }
        </Typography>
        <Typography component="li">
          {
            "Receive: accept all information, emotion is also a kind of information"
          }
        </Typography>
        <Typography component="li">
          {
            "Context: sort out the context of the story and present it in a story-telling way"
          }
        </Typography>
        <Typography component="li">
          {"Inaction: Find out the reasons and methods for inaction"}
        </Typography>
        <Typography component="li">
          {"Action: find out the reasons and methods for action"}
        </Typography>
        <Typography component="li">
          {
            "Transformation: stop resisting, transform the status quo, shift position, see the true self and mission of the team from the shadows"
          }
        </Typography>
      </ol>
      <Typography variant="h5" component="h2">
        {"Takeaways"}
      </Typography>
      <Typography>
        {
          "Understand the 5 obstacles that affect teamwork, 3 skills and 7 steps to teamwork, and help the defeated team rebirth"
        }
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Hermes",
      slug: "herchg",
      image: require("@site/src/speakers/herchgProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
