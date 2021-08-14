import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/getting-to-ddd-pragmatic-or-principled";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Getting to DDD: Pragmatic or Principled?",
  description:
    "DDD is a big topic. But you don't have to be an end-to-end expert to benefit. We'll look at ways to approach learning DDD so you can get started even as you keep learning.",
  detail: (
    <>
      <Typography>
        {
          "Domain-Driven Design is a vast topic. There are so many wonderful concepts, philosophies, patterns, practices and techniques to learn and benefit from. Some of the best minds in the industry have been tuning these practices for years to ensure developers are able to implement proven, successful approaches to software design. Domain modeling in particular is very specific with guidance on designing and coordinating the dance between the myriad moving parts in our system. Yet learning the principals of DDD can be daunting for developers who are new to DDD. To encourage and enable more developers to get on the path of DDD, is it reasonable to allow a more pragmatic approach over a principled approach of adhering strictly to DDD guidelines? Should developers be encouraged to start with low hanging fruit which they can quickly benefit from in their software projects while they continue to learn, to gain a deeper understanding of Domain-Driven Design in order to evolve and adapt their practices as they move closer and closer to the beauty we all know that can be achieved with DDD."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Takeaways For Participants"}
      </Typography>
      <ul>
        <Typography component="li">
          {
            "You can benefit from individual ideas from DDD without being an end-to-end expert."
          }
        </Typography>
        <Typography component="li">
          {
            "You will learn more effective ways to help you team understand, be curious about and hopefully embrace DDD."
          }
        </Typography>
      </ul>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Julie Lerman",
      slug: "julielerman",
      image: require("@site/src/speakers/julielermanProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
