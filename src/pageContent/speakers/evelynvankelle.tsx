import Speaker, {
  SpeakerCommonInfo,
  SpeakerI18n,
} from "@site/src/component/Speaker";
import React, { memo } from "react";

const speakerCommonInfo: SpeakerCommonInfo = {
  links: [
    {
      type: "web",
      link: "https://evelynvankelle.com/",
    },
    {
      type: "twitter",
      link: "EvelynvanKelle",
    },
  ],
  profileImage: require("@site/src/speakers/evelynvankelleProfileImage.png"),
};

export default memo(function Page(i18n: SpeakerI18n) {
  return <Speaker {...i18n} {...speakerCommonInfo} />;
});
