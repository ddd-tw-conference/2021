import Speaker, {
  SpeakerCommonInfo,
  SpeakerI18n,
} from "@site/src/component/Speaker";
import React, { memo } from "react";

const speakerCommonInfo: SpeakerCommonInfo = {
  links: [
    {
      type: "email",
      link: "yikaikao@gmail.com",
    },
    {
      type: "facebook",
      link: "kimkao.solid",
    },
    {
      type: "medium",
      link: "kimkao",
    },
    {
      type: "twitter",
      link: "YiKaiKao",
    },
    {
      type: "github",
      link: "humank",
    },
    {
      type: "instagram",
      link: "solidkim",
    },
    {
      type: "linkedin",
      link: "kimkao",
    },
  ],
  profileImage: require("@site/src/speakers/kimkaoProfileImage.png"),
};

export default memo(function Page(i18n: SpeakerI18n) {
  return <Speaker {...i18n} {...speakerCommonInfo} />;
});
