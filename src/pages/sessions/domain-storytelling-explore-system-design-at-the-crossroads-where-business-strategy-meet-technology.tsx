import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology";
import { memo } from "react";

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
      <Typography>
        {`In this workshop, we will first use the "empathy map" to clarify and identify the value of the business from the perspective of the customer, and then learn how to use "Domain Storytelling" to understand the big picture of the business. After that, we can thus make further value selection, finding a problem worth solving, and finally dive deep into the core domain and design your domain model according with "user story map" and  DST to design a suitable solution.`}
      </Typography>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <Typography>
        {"As the exploration of your business, your will experience:"}
      </Typography>
      <ol>
        <Typography component="li">
          {
            "In-depth understanding of customers, digging out the real needs of customers"
          }
        </Typography>
        <Typography component="li">
          {
            "Understand the overall picture of the business and make value selection to provide direction for product development"
          }
        </Typography>
        <Typography component="li">
          {"Dive deep into core domains and come up with suitable solutions"}
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
