import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/the-toolbox-for-initiating-agile-transformation";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "The toolbox for initiating agile transformation",
  description:
    "Agile transformation has been a popular topic in recent years, especially under the influence of the COVID 19 epidemic, how to respond quickly under turbulent changes is an urgent matter. Although many companies have begun to introduce agile transformation, the effect is not obvious, leading to other companies still stay on the sidelines and wants to see more of others' practices so that they will not be less wronged. In this sharing, I will share some tools to let you know how they are in a successfully transformed company Let agility take root",
  detail: (
    <>
      <Typography>
        {
          "Agile transformation has been a popular topic in recent years, especially under the influence of the COVID 19 epidemic, how to respond quickly under turbulent changes is an urgent matter. Although many companies have begun to introduce agile transformation, the effect is not obvious, leading to other companies still stay on the sidelines and wants to see more of others' practices so that they will not be less wronged. In this sharing, I will share some tools to let you know how they are in a successfully transformed company Let agility take root"
        }
      </Typography>
      <ul>
        <Typography component="li">{"Agile transformation process"}</Typography>
        <Typography component="li">{"Lean Changing Canvas"}</Typography>
        <Typography component="li">{"Improvement kata"}</Typography>
        <Typography component="li">{"Community of Practices"}</Typography>
      </ul>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <ul>
        <Typography component="li">
          {"Awareness of transformation tools"}
        </Typography>
        <Typography component="li">
          {"Frameworks adoption experiences from Agile pioneers"}
        </Typography>
      </ul>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "David Ko",
      slug: "kojenchieh",
      image: require("@site/src/speakers/kojenchiehProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
