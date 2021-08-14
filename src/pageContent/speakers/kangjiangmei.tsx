import Speaker, {
  SpeakerCommonInfo,
  SpeakerI18n,
} from "@site/src/component/Speaker";
import React, { memo } from "react";

const speakerCommonInfo: SpeakerCommonInfo = {
  links: [
    {
      type: "email",
      link: "jkang@thoughtworks.com",
    },
    {
      type: "web",
      link: "https://insights.thoughtworks.cn/author/kangjiangmei/",
    },
  ],
  profileImage: require("@site/src/speakers/kangjiangmeiProfileImage.png"),
};

export default memo(function Page(i18n: SpeakerI18n) {
  return <Speaker {...i18n} {...speakerCommonInfo} />;
});
