import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/tdd-ddd-bdd-well-explained";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "TDD, DDD, & BDD Well Explained",
  description:
    "TDD、BDD 與 DDD 皆是熱門多年同時也被誤解多年的技術，藉由本次演講，幫助大家快速理解三者的含義、差異以及如何上手幫助開發更好的軟體！",
  detail: (
    <>
      <Typography>
        {
          "TDD、BDD 與 DDD 皆是熱門多年同時也被誤解多年的技術，藉由本次演講，幫助大家快速理解三者的含義、差異以及如何上手幫助開發更好的軟體！"
        }
      </Typography>
      <Typography>
        {
          "TDD 幫助開發者用測試的角度出發，藉由迭代開發的方式，把程式設計理想的形狀。"
        }
      </Typography>
      <Typography>
        {
          "DDD 倡導開發者以及領域專家一起協作，把複雜的業務邏輯分而治之，把軟體設計成業務的形狀。"
        }
      </Typography>
      <Typography>
        {
          "BDD 結合 TDD 與 DDD 理念，重視業務邏輯與測試並行，確保寫出的軟體被測試且符合期待，把軟體設計成大家心中的形狀。"
        }
      </Typography>
      <Typography>
        {
          "近年來，很多人倡導這幾項技術，但有更多人在導入過程中遭遇失敗，那這幾項技術到底為何？彼此的差異？又要如何上手呢？"
        }
      </Typography>
      <Typography>
        {
          "本次演講希望藉由精簡的解說，幫助大家快速上手這幾項技術的概念，對於已經部分了解的觀眾，也可以藉機反思或思考如何導入到工作中。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <Typography>{"快速學會"}</Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "劉鳯軒",
      slug: "fong1143",
      image: require("@site/src/speakers/fong1143ProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
