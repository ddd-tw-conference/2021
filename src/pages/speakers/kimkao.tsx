import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/kimkao";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Kim Kao",
  title: [
    "Sr. Solutions Architect @AWS",
    "Problem Solver",
    "Well Architected Life explorer",
  ],
  description:
    "A father of 3, whose life has been well architected, Kim is currently working as a senior solution architect with AWS.",
  detail: (
    <>
      <Typography>
        {
          "A father of 3, whose life has been well architected, Kim is currently working as a senior solution architect with AWS."
        }
      </Typography>
      <Typography>
        {
          "Currently working for AWS as a senior solution architect, co-founder of the DDD Taiwan Community (DDD Taiwan Community). Specializes in software system design, and is committed to the promotion of serverless services, help enterprises to create more appropriate solutions through DDD and convenient cloud services to solve real business problems."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Experiences"}
      </Typography>
      <ol>
        <Typography component="li">
          {"2020 DDD Taiwan Conference - REFK EventStorming workshop"}
        </Typography>
        <Typography component="li">
          {
            "2020 AWS DevDay - Enlarge influence by Participating in communities"
          }
        </Typography>
        <Typography component="li">
          {
            "2020 AWS CTO night - MC & Panel speaker for Modern technology management Round table"
          }
        </Typography>
        <Typography component="li">
          {"2020/2019/2018 AWS Taipei Summit (細部略)"}
        </Typography>
        <Typography component="li">
          {
            "2019/2018 JCCONF - Embrace legacy Java EE by AWS Serverless, Supersonic Java serverless"
          }
        </Typography>
        <Typography component="li">
          {
            "2019 DDD China Conference - Esseitnail capabilities behind microservices"
          }
        </Typography>
      </ol>
    </>
  ),
  sessions: [
    {
      slug: "continuous-architecture-embracing-multiple-viewpoints-for-sustainable-solutions",
      name: "Continuous Architecture : Embracing Multiple Viewpoints for Sustainable Solutions",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
