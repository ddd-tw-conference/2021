import Speaker, {
  SpeakerCommonInfo,
  SpeakerI18n,
} from "@site/src/component/Speaker";
import { memo } from "react";

const speakerCommonInfo: SpeakerCommonInfo = {
  links: [
    {
      type: "email",
      link: "wade.chien@gmail.com",
    },
    {
      type: "linkedin",
      link: "wade-chien",
    },
  ],
  profileImage: require("@site/src/speakers/wade.chienProfileImage.png"),
};

export default memo(function Page(i18n: SpeakerI18n) {
  return <Speaker {...i18n} {...speakerCommonInfo} />;
});
