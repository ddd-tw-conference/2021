import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/when-dci-conjunction-with-ddd";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "When DCI conjunction with DDD",
  description:
    "In this talk, Teddy will introduces the DCI (Data, Context, Interaction) architecture, and uses an example (ezKanban system) to explain how to apply DCI in DDD, especially in the design and implementation of Aggregate, which can make the responsibilities of aggregation clearer.",
  detail: (
    <>
      <Typography>
        {`DCI is the abbreviation of Data, Context, and Interaction. The DCI advocate James Coplien believes: "Encapsulating data and behavior in categories is a grandfather-level object-oriented design method." Although DCI's Data object does not have rich behavior during compilation, Its behavior is dynamically assigned by the Context when the use case is executed. Coplien believes that only given a Context to interpret the behavior of the object will be meaningful, and the program is easier to read. This lecture will introduce the principle of DCI architecture and show how to apply DCI to simplify the design and implementation of aggregation (Aggregate) with a practical case (ezKanban system).`}
      </Typography>
      <Typography variant="h5" component="h2">
        {"Session agenda"}
      </Typography>
      <Typography>
        {
          "In this talk, Teddy will introduces the DCI (Data, Context, Interaction) architecture, and uses an example (ezKanban system) to explain how to apply DCI in DDD, especially in the design and implementation of Aggregate, which can make the responsibilities of aggregation clearer."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <Typography>{"Know more, for fun"}</Typography>
    </>
  ),
  beforeSession: [
    {
      name: "領域驅動設計學習筆記（16）：學DCI，重構Aggregate ，Part 1",
      link: "https://teddy-chen-tw.blogspot.com/2021/06/16dciaggregate-part-1.html",
    },
    {
      name: "領域驅動設計學習筆記（17）：學DCI，重構Aggregate ，Part 2",
      link: "https://teddy-chen-tw.blogspot.com/2021/06/17dciaggregate-part-2.html",
    },
    {
      name: "領域驅動設計學習筆記（18）：學DCI，重構Aggregate ，Part 3",
      link: "https://teddy-chen-tw.blogspot.com/2021/06/18dciaggregate-part-3.html",
    },
    {
      name: "The DCI Architecture: A New Vision of Object-Oriented Programming",
      link: "https://www.artima.com/articles/the-dci-architecture-a-new-vision-of-object-oriented-programming",
    },
  ],
  guests: [
    {
      name: "Teddy Chen",
      slug: "teddy.chen.tw",
      image: require("@site/src/speakers/teddy.chen.twProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
