import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/rising-from-the-ashes-agile-team-rising-model-helps-you-from-defeat-to-victory";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "浴火重生！敏捷團隊重生模型 (Agile Team Rising Model)，從絕敗走向卓越",
  description:
    "敏捷團隊重生模型 (Agile Team Rebirth Model)，團隊合作總是卡卡的嗎？我匯集了多年的實踐經驗，歸納影響團隊合作的5種障礙、邁向合作的 3 個技巧 與 7 個步驟。影響團隊合作的5 個障礙包括：壓抑、忽視、繞道、報復與逃避，然而，邁向敏捷團隊合作只需要 3 個技巧 觀照、全然感受、停止抵抗。帶著 3 個技巧，搭配 7 個步驟的實踐，專注於自我與他人，從看見事實開始，理出脈絡，停下來，領受，轉化，有所為與無所為，直至團隊曙光的看見。",
  detail: (
    <>
      <Typography>
        {
          "敏捷團隊重生模型 (Agile Team Rebirth Model)，團隊合作總是卡卡的嗎？我匯集了多年的實踐經驗，歸納影響團隊合作的5種障礙、邁向合作的 3 個技巧 與 7 個步驟。影響團隊合作的5 個障礙包括：壓抑、忽視、繞道、報復與逃避，然而，邁向敏捷團隊合作只需要 3 個技巧 觀照、全然感受、停止抵抗。帶著 3 個技巧，搭配 7 個步驟的實踐，專注於自我與他人，從看見事實開始，理出脈絡，停下來，領受，轉化，有所為與無所為，直至團隊曙光的看見。"
        }
      </Typography>
      <Typography>
        {
          "團隊合作總是卡卡的嗎？我會分享影響團隊合作的 5 種阻礙，邁向敏捷團隊的 3 個技巧與 7 個步驟。"
        }
      </Typography>
      <Typography>{"影響團隊合作的 5 種障礙 "}</Typography>
      <ol>
        <Typography component="li">
          {"壓抑：忍受他團隊的所有，隱忍不發，對我團隊的需要沉默"}
        </Typography>
        <Typography component="li">
          {"忽視：忽視我團隊的感受與他團隊的需求"}
        </Typography>
        <Typography component="li">{"繞道：刻意繞過他團隊"}</Typography>
        <Typography component="li">{"報復：對他團隊徑行無聲報復"}</Typography>
        <Typography component="li">
          {"逃避：逃避我團隊與他團隊的合作"}
        </Typography>
      </ol>
      <Typography>{"敏捷團隊合作的 3 個技巧"}</Typography>
      <ol>
        <Typography component="li">
          {"觀照：開放意志，觀照事實、感受、心靈，並看見團隊的本質"}
        </Typography>
        <Typography component="li">
          {
            "全然感受：感受源頭，感受我團隊的狀態，全然地接受、認同與感謝這個狀態，連結源頭，深處地接納，聆聽，體會這股力量"
          }
        </Typography>
        <Typography component="li">
          {
            "停止抵抗、順流：站在暗影處，才能感受到光，停止對抗，提取力量，帶著勇氣前行"
          }
        </Typography>
      </ol>
      <Typography>{"敏捷團隊合作的7個步驟"}</Typography>
      <ol>
        <Typography component="li">
          {"專注意向：專注觀照我團隊的意圖"}
        </Typography>
        <Typography component="li">
          {"確認：以正向的態度確認自我的狀態"}
        </Typography>
        <Typography component="li">
          {"領受：接納所有資訊，情緒也是資訊的一種"}
        </Typography>
        <Typography component="li">
          {"脈絡：理出故事脈絡，用說故事的方式呈現"}
        </Typography>
        <Typography component="li">{"無為：找出無做為的理由與方法"}</Typography>
        <Typography component="li">{"有為：找出有做為的理由與方法"}</Typography>
        <Typography component="li">
          {"轉化：停止抵抗，轉化現狀，轉移位置，從暗影中看見團隊真我與使命"}
        </Typography>
      </ol>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <Typography>
        {
          "了解影響團隊合作的5個障礙、邁向團隊合作的3個技巧與7個步驟，幫助絕敗的團隊重生"
        }
      </Typography>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "張昀煒",
      slug: "herchg",
      image: require("@site/src/speakers/herchgProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
