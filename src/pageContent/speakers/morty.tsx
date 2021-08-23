import Speaker, {
  SpeakerCommonInfo,
  SpeakerI18n,
} from "@site/src/component/Speaker";
import { memo } from "react";

const speakerCommonInfo: SpeakerCommonInfo = {
  links: [],
  profileImage: require("@site/src/speakers/mortyProfileImage.png"),
};

export default memo(function Page(i18n: SpeakerI18n) {
  return <Speaker {...i18n} {...speakerCommonInfo} />;
});
