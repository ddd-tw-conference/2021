import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/complexity-thinking-in-domain-driven-design";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "領域驅動設計中的複雜性思維",
  description: `在軟體開發過程中，領域驅動設計可以幫助我們解決複雜領域建模這一核心問題。如何利用好領域驅動設計，以及判斷一個方法是否和領域驅動設計遵循了同樣的原則，我們需要重新審視複雜問題本身。在本演講中，講師將帶領聽眾，重新梳理複雜性思考的各種方法流派，也將著重介紹利用“Cynefin Dynamics”來修正我們在使用領域驅動設計方法的過程中所遇到的問題。`,
  detail: (
    <>
      <Typography>
        {`在軟體開發過程中，領域驅動設計可以幫助我們解決複雜領域建模這一核心問題。如何利用好領域驅動設計，以及判斷一個方法是否和領域驅動設計遵循了同樣的原則，我們需要重新審視複雜問題本身。在本演講中，講師將帶領聽眾，重新梳理複雜性思考的各種方法流派，也將著重介紹利用“Cynefin Dynamics”來修正我們在使用領域驅動設計方法的過程中所遇到的問題。`}
      </Typography>
      <ol>
        <Typography component="li">{"認知論和復雜性思考"}</Typography>
        <Typography component="li">{"架構設計的複雜性"}</Typography>
        <Typography component="li">{"Cynefin Dynamics框架"}</Typography>
        <Typography component="li">
          {"利用Cynefin Dynamics來設計DDD的實踐過程"}
        </Typography>
      </ol>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <ol>
        <Typography component="li">{"了解複雜性思考的方法體系"}</Typography>
        <Typography component="li">
          {"了解Cynefin Dynamics框架及其作用"}
        </Typography>
        <Typography component="li">
          {"掌握如何使用Cynefin Dynamics來實踐DDD"}
        </Typography>
      </ol>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "王威",
      slug: "weiwangdavid",
      image: require("@site/src/speakers/weiwangdavidProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
