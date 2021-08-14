import Speaker, {
  SpeakerCommonInfo,
  SpeakerI18n,
} from "@site/src/component/Speaker";
import React, { memo } from "react";

const speakerCommonInfo: SpeakerCommonInfo = {
  links: [
    {
      type: "github",
      link: "Julielerman",
    },
    {
      type: "about.me",
      link: "julielerman",
    },
    {
      type: "twitter",
      link: "julielerman",
    },
    {
      type: "web",
      link: "http://thedatafarm.com/",
    },
    {
      type: "github",
      link: "julielerman",
    },
    {
      type: "pluralsight",
      link: "julie-lerman",
    },
    {
      type: "pluralsightcourses",
      link: "fundamentals-domain-driven-design",
    },
  ],
  profileImage: require("@site/src/speakers/julielermanProfileImage.png"),
};

export default memo(function Page(i18n: SpeakerI18n) {
  return <Speaker {...i18n} {...speakerCommonInfo} />;
});
