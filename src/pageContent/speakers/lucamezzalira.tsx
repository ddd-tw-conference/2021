import Speaker, {
  SpeakerCommonInfo,
  SpeakerI18n,
} from "@site/src/component/Speaker";
import React, { memo } from "react";

const speakerCommonInfo: SpeakerCommonInfo = {
  links: [
    {
      type: "twitter",
      link: "lucamezzalira",
    },
    {
      type: "linkedin",
      link: "lucamezzalira",
    },
    {
      type: "web",
      link: "https://lucamezzalira.com/",
    },
  ],
  profileImage: require("@site/src/speakers/lucamezzaliraProfileImage.png"),
};

export default memo(function Page(i18n: SpeakerI18n) {
  return <Speaker {...i18n} {...speakerCommonInfo} />;
});
