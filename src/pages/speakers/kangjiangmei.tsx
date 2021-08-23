import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/kangjiangmei";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "KK",
  title: ["Lead Consultant"],
  description:
    "I joined ThoughtWorks in 2007 as a Business Analyst. I had been working as a Lead BA for large enterprise prducts in various industries. In 2016 I started to work as an advisor where I started to work closely with Digtal Transformation Leaders in large enterprises to facilitate and empower them on the adoption of lean product innovation, product strategic planning, inceptions and agile BA practices. Currently I'm leading the EDGE offering in China DT&O service line. I am passionate about all practices around EDGE, Product Management, Business Analysis, Platform Design and Value Delviery. I live in Chengdu with my family, and the lovely Pandas.",
  detail: (
    <>
      <Typography>
        {
          "I joined ThoughtWorks in 2007 as a Business Analyst. I had been working as a Lead BA for large enterprise prducts in various industries. In 2016 I started to work as an advisor where I started to work closely with Digtal Transformation Leaders in large enterprises to facilitate and empower them on the adoption of lean product innovation, product strategic planning, inceptions and agile BA practices. Currently I'm leading the EDGE offering in China DT&O service line. I am passionate about all practices around EDGE, Product Management, Business Analysis, Platform Design and Value Delviery."
        }
      </Typography>
      <Typography>
        {"I live in Chengdu with my family, and the lovely Pandas."}
      </Typography>
    </>
  ),
  sessions: [
    {
      slug: "concept-model-what-why-and-how",
      name: "Concept Model: What, Why and How",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
