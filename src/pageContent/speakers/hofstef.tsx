import Speaker, {
  SpeakerCommonInfo,
  SpeakerI18n,
} from "@site/src/component/Speaker";
import { memo } from "react";

const speakerCommonInfo: SpeakerCommonInfo = {
  links: [
    {
      type: "web",
      link: "https://domainstorytelling.org/",
    },
    {
      type: "twitter",
      link: "hofstef",
    },
    {
      type: "linkedin",
      link: "hofstef",
    },
  ],
  profileImage: require("@site/src/speakers/hofstefProfileImage.png"),
};

export default memo(function Page(i18n: SpeakerI18n) {
  return <Speaker {...i18n} {...speakerCommonInfo} />;
});
