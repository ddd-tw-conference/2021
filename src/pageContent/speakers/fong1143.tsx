import Speaker, {
  SpeakerCommonInfo,
  SpeakerI18n,
} from "@site/src/component/Speaker";
import { memo } from "react";

const speakerCommonInfo: SpeakerCommonInfo = {
  links: [
    {
      type: "email",
      link: "fong1143",
    },
    {
      type: "web",
      link: "https://ithelp.ithome.com.tw/users/20111997",
    },
  ],
  profileImage: require("@site/src/speakers/fong1143ProfileImage.png"),
};

export default memo(function Page(i18n: SpeakerI18n) {
  return <Speaker {...i18n} {...speakerCommonInfo} />;
});
