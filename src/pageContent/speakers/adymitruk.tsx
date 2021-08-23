import Speaker, {
  SpeakerCommonInfo,
  SpeakerI18n,
} from "@site/src/component/Speaker";
import { memo } from "react";

const speakerCommonInfo: SpeakerCommonInfo = {
  links: [
    {
      type: "youtube",
      link: "UCSoUh4ikepF3LkMchruSSaQ",
    },
    {
      type: "linkedin",
      link: "eventmodeling",
    },
    {
      type: "twitter",
      link: "adymitruk",
    },
  ],
  profileImage: require("@site/src/speakers/adymitrukProfileImage.png"),
};

export default memo(function Page(i18n: SpeakerI18n) {
  return <Speaker {...i18n} {...speakerCommonInfo} />;
});
