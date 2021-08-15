import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Domain Storytelling - Explore system design at the crossroads where business strategy meet technology",
  description:
    "Domain Storytelling is a methodology created by Stefan Hofer and Henning Schwentner. Domain Story is good to help the (development) team in crunching domain knowledge. It has been praised by DDD enthusiasts in these years.",
  detail: (
    <>
      <Typography>
        {
          "Domain Storytelling is a methodology created by Stefan Hofer and Henning Schwentner. Domain Story is good to help the (development) team in crunching domain knowledge. It has been praised by DDD enthusiasts in these years."
        }
      </Typography>
      <Typography>
        {
          "We received high CSAT (4.5,4.6) from communities campaign feedback from DDD Taiwan Conference 2020 and 2021 May meetup for hands-on workshop, so we decided to host the Domain Storytelling workshop for you to well explore domain knowledge conjunction with DDD tactical design."
        }
      </Typography>
      <Typography>
        {"System design is simpler than imagined: start with storytelling!"}
      </Typography>
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
