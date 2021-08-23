import Speaker, {
  SpeakerCommonInfo,
  SpeakerI18n,
} from "@site/src/component/Speaker";
import { memo } from "react";

const speakerCommonInfo: SpeakerCommonInfo = {
  links: [
    {
      type: "email",
      link: "kojenchieh@gmail.com",
    },
    {
      type: "facebook",
      link: "kojenchieh",
    },
  ],
  profileImage: require("@site/src/speakers/kojenchiehProfileImage.png"),
};

export default memo(function Page(i18n: SpeakerI18n) {
  return <Speaker {...i18n} {...speakerCommonInfo} />;
});
