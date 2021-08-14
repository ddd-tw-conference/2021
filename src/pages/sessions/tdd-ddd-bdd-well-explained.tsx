import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/tdd-ddd-bdd-well-explained";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "TDD, DDD, & BDD Well Explained",
  description:
    "TDD, BDD and DDD are one of the most popular but also the most misunderstood topics in recent year. Through this speech, I want to help people understand the meaning, the difference of the three and how to get started with them to develop better software!",
  detail: (
    <>
      <Typography>
        {
          "TDD, BDD and DDD are one of the most popular but also the most misunderstood topics in recent year. Through this speech, I want to help people understand the meaning, the difference of the three and how to get started with them to develop better software!"
        }
      </Typography>
      <Typography>
        {
          "TDD helps developers begin from the perspective of testing, and design the software to its ideal state through iterations."
        }
      </Typography>
      <Typography>
        {
          "DDD advocates developers to co-work with domain experts, divide and conquer the complex business logic, and design the software to fit the shape of business."
        }
      </Typography>
      <Typography>
        {
          "BDD borrows the wisdom from TDD and BDD, focus on business logic and testing and make sure the software is well tested and fit the needs, and design the software to everyone’s shared understanding."
        }
      </Typography>
      <Typography>
        {
          "In recent year, we have seen people introducing these ideas, and many of them face failures in the process, then we’d like to ask: what are them, and what is the difference, and how to get started?"
        }
      </Typography>
      <Typography>
        {
          "Through this speech, I hope to help the audience to get the basic understanding of these techniques. As for people who already understand them, you could also reflect on your understanding and how to introduce them to your work."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <Typography>
        {"Get the basic understanding of TDD, BDD, and DDD."}
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Fong",
      slug: "fong1143",
      image: require("@site/src/speakers/fong1143ProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
