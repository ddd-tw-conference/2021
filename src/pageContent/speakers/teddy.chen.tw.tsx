import Speaker, {
  SpeakerCommonInfo,
  SpeakerI18n,
} from "@site/src/component/Speaker";
import React, { memo } from "react";

const speakerCommonInfo: SpeakerCommonInfo = {
  links: [
    {
      type: "email",
      link: "teddy.chen.tw@gmail.com",
    },
    {
      type: "blogger",
      link: "teddy-chen-tw",
    },
    {
      type: "facebookgroup",
      link: "teddy.tw",
    },
  ],
  profileImage: require("@site/src/speakers/teddy.chen.twProfileImage.png"),
};

export default memo(function Page(i18n: SpeakerI18n) {
  return <Speaker {...i18n} {...speakerCommonInfo} />;
});
