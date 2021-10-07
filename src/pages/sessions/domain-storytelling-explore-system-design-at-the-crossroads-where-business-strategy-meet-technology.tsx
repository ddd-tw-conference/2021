import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "Domain Storytelling - Explore system design at the crossroads where business strategy meet technology",
  description:
    "Domain Storytelling is a technique invented by two software practitioners Stefan Hofer and Henning Schwentner to help the (development) team learn domain knowledge. Domain Storytelling has risen in popularity among DDD enthusiasts in recent years.",
  detail: (
    <>
      <Typography>
        <em>{"Domain Storytelling"}</em>
        {
          " is a technique invented by two software practitioners Stefan Hofer and Henning Schwentner to help the (development) team learn domain knowledge. Domain Storytelling has risen in popularity among DDD enthusiasts in recent years."
        }
      </Typography>
      <Typography>
        {
          "Since we have received positive feedback in 2020 Conf and the meetup in 2021 May, this time we will take a further step to integrate Domain Storytelling with DDD strategic design and learn more extended applications."
        }
      </Typography>
      <Typography>
        {"System design is simpler than expected: start with storytelling!"}
      </Typography>
      <Typography>
        {`In this workshop, We will first introduce the "Domain Storytelling", and provide a real-world use case for everyone to practice in groups during the workshop to understand the full picture of the business, and then further draw domain boundaries to find problems worth solving and dig deep into core areas. Afterward, we will use the "User Story" and "User Story Mapping" to expand the business requirements and prioritize the requirements. At last, we will use "Example Mapping" to expand the business rules of user stories, and enrich your toolbox by gradually exploring the domain.`}
      </Typography>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <Typography>
        {"Through the exploration of the business, you will experience:"}
      </Typography>
      <ol>
        <Typography component="li">
          {"How to understand the full picture of the business through DST"}
        </Typography>
        <Typography component="li">
          {"How to decide domain boundaries"}
        </Typography>
        <Typography component="li">
          {
            "How to expand business requirements and business rules of your domain"
          }
        </Typography>
      </ol>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Sandy",
      slug: "sandy-wu",
      image: require("@site/src/speakers/sandy-wuProfileImage.png"),
    },
    {
      name: "Fong",
      slug: "fong1143",
      image: require("@site/src/speakers/fong1143ProfileImage.png"),
    },
    {
      name: "River",
      slug: "river0825",
      image: require("@site/src/speakers/river0825ProfileImage.png"),
    },
    {
      name: "Blues",
      slug: "blues-ho",
      image: require("@site/src/speakers/blues-hoProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
