import Speaker, {
  SpeakerCommonInfo,
  SpeakerI18n,
} from "@site/src/component/Speaker";
import React, { memo } from "react";

const speakerCommonInfo: SpeakerCommonInfo = {
  links: [
    {
      type: "about.me",
      link: "julielerman",
    },
    {
      type: "github",
      link: "Julielerman",
    },
    {
      type: "facebook",
      link: "julielerman",
    },
    {
      type: "twitter",
      link: "julielerman",
    },
    {
      type: "youtube",
      link: "julievtgeek",
    },
  ],
  profileImage: require("@site/src/speakers/julielerman/profileImage.png"),
};

export default memo(function Page(i18n: SpeakerI18n) {
  return <Speaker {...i18n} {...speakerCommonInfo} />;
});
