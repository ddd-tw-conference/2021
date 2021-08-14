import Link from "@docusaurus/Link";
import { Button, Typography } from "@material-ui/core";
import Home, { I18n } from "@site/src/pageContent/Home";
import React, { memo } from "react";

const description = `This year, DDDTW 2021, we are going to invite more people with solid experience in practicing DDD in their works. We wish the participants could be encouraged, enlightened, and enchanted by true stories in the industries. The conference has two days, one day for offline workshops, one day for online speeches. Let's follow the footprints of the pioneers from all over the world and "Tackling Complexity in the Heart of Software".`;

const i18n: I18n = {
  description,
  aboutUs: "About Us",
  aboutUsArticle: (
    <>
      <Typography>
        {
          "Domain Driven Design(DDD) Taiwan is a DDD community that has continued to devote time and effort to promoting DDD in Taiwan."
        }
      </Typography>
      <Typography>
        {
          "Established in 2018 by engineers who enjoy learning and sharing software knowledge. Now we are a group of DDD enthusiasts including software engineers, architects, product managers, designers and so on."
        }
      </Typography>
      <Typography>
        {
          "Until now, the community has 20 volunteers and we have hosted over 50 meetups in 2 years and keep working on increasing our influence."
        }
      </Typography>
    </>
  ),
  pastYear: "Conference 2020",
  pastYearArticle: (
    <>
      <Typography>
        {
          "Our first conference, DDDTW 2020, was a physical meeting that aims to promote DDD in Taiwan. Through speeches and workshops, the participants perceived that DDD is more than a technical terms, but focusing on business knowledge and problem solving. Last year, over 200 people joined the conference and we got speakers from Taiwan, Europe, and China, learning how DDD is implemented in different places."
        }
      </Typography>
      <Button variant="contained" component={Link} to="/conf2020">
        {"Review 2020"}
      </Button>
    </>
  ),
  thisYear: "This Year",
  thisYearArticle: <Typography>{description}</Typography>,
  joinNow: "Join Now",
};

export default memo(function Page() {
  return <Home i18n={i18n} />;
});
