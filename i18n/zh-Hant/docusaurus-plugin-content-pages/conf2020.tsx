import Conf2020, { I18n } from "@site/src/pageContent/conf2020";
import React, { memo } from "React";

const i18n: I18n = {
  title: "回顧 2020",
  description:
    "第一屆的年會，我們的主軸會希望能讓更多人知道何謂領域驅動設計(DDD)，以及讓更多人意識到其實 DDD 真的不是只是一票技術人員寫寫程式，關注程式碼本身結構性的問題而已，所以以演講與工作坊並進的方式來進行。去年我們邀請到來自 DDD_Eu 、中國等地的講者，並且同時結合台灣對於領域驅動設計長年有研究並且有意願與大家分享的老朋友們，一起與大家共同探討這個已經出生了 10 多年的老方法能給大家帶來的新體驗與感受。",
  speeches: "演講",
  workshops: "工作坊",
  conferencesEveryYears: "查看歷年年會",
  forward2021: "前進 2021",
};

export default memo(function Page() {
  return <Conf2020 i18n={i18n} />;
});
