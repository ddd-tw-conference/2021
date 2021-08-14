import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/lucamezzalira";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Luca Mezzalira",
  title: [
    "Principal Solutions Architect at Amazon Web Services (AWS)",
    "O'Reilly Author ",
    "International Speaker",
  ],
  description:
    "Luca Mezzalira is a Principal Solutions Architect at AWS, an international Speaker and an O’Reilly author.",
  detail: (
    <>
      <Typography>
        {
          "Being associated with the industry since 2004, I have lent my expertise predominantly in the solution architecture field. I have gained accolades for revolutionising the scalability of frontend architectures with micro-frontends, from increasing the efficiency of workflows, to delivering quality in products. My colleagues know me as an excellent communicator who believes in using an interactive approach for understanding and solving problems of varied scopes."
        }
      </Typography>
      <Typography>
        {
          "I helped DAZN becoming a global OTT platform in just 5 years, now as Principal Architect at AWS, I’m helping our customers in the media and entertainment space to deliver cost-effective and scalable cloud solutions for their customers."
        }
      </Typography>
      <Typography>
        {
          "Finally, I’m sharing with the community the best practices to develop cloud-native architectures solving technical and organizational challenges."
        }
      </Typography>
    </>
  ),
  sessions: [
    {
      slug: "evolutionary-aws-lambda-with-hexagonal-architecture",
      name: "Evolutionary AWS Lambda with hexagonal architecture",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
