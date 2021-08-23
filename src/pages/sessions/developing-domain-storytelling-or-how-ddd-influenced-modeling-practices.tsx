import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/developing-domain-storytelling-or-how-ddd-influenced-modeling-practices";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "Developing Domain Storytelling, or: How DDD influenced modeling practices",
  description:
    "Get to know a collaborative modeling technique that transforms domain knowledge into effective business software.",
  detail: (
    <>
      <Typography>
        {
          "Domain Storytelling is a modeling technique that transforms domain knowledge into effective business software. Domain experts and software developers learn from each other by telling stories and drawing them as easy-to-understand pictures. These pictures help to find context boundaries, derive requirements, and design domain models."
        }
      </Typography>
      <Typography>
        {
          "In my talk, I will briefly introduce the method and highlight how DDD has influenced modeling practices in general and the development of Domain Storytelling in particular. Key insights that I will discuss:"
        }
      </Typography>
      <ul>
        <Typography component="li">
          {
            "Domain language is context-specific and bounded contexts are a game-changer for modeling."
          }
        </Typography>
        <Typography component="li">
          {
            "Software development can be viewed as a series of conversations, facilitated by modeling."
          }
        </Typography>
        <Typography component="li">
          {
            "Eric Evans’ model exploration whirlpool is a powerful, yet underappreciated metaphor for model-driven development."
          }
        </Typography>
      </ul>
      <Typography>
        {
          "This talk is for everyone who wants to reflect on their own modeling practices or learn about an additional modeling technique for your DDD toolbox."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Outline"}
      </Typography>
      <ul>
        <Typography component="li">
          {"Intro to Domain Storytelling by an example"}
        </Typography>
        <Typography component="li">
          {"Short explanation of the method"}
        </Typography>
        <Typography component="li">
          {
            "Highlight DDD modeling principles that have influenced Domain Storytelling"
          }
        </Typography>
        <Typography component="li">
          {
            "The bigger picture: a look at other DDD modeling methods and how they relate to each other"
          }
        </Typography>
      </ul>
    </>
  ),
  beforeSession: [
    {
      name: "hofstef/awesome-domain-storytelling",
      link: "https://github.com/hofstef/awesome-domain-storytelling",
    },
  ],
  guests: [
    {
      name: "Dr. Stefan Hofer",
      slug: "hofstef",
      image: require("@site/src/speakers/hofstefProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
