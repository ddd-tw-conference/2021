import Link from "@docusaurus/Link";
import { Button, Typography } from "@material-ui/core";
import Home, { I18n } from "@site/src/pageContent/Home";
import React, { memo } from "react";

const description = `DDD 年會團隊在此正式宣佈：DDDTW 領域驅動設計年會，即將於 10/15, 10/16 盛大舉辦！ 本次年會主題為：「足跡」。 「足跡」意味著過去我們學習DDD的成長過程，不管只是聽過、做過、甚至導入過，這些都將成為我們成長的養分！ 本次的年會不僅有超強的國內外卡司讓各位聽眾滿載而歸；眾所期待的「工作坊」讓你擁有實戰的體驗。`;

const i18n: I18n = {
  description,
  aboutUs: "關於我們",
  aboutUsArticle: (
    <>
      <Typography>
        {"DDD台灣，是一個台灣在地深耕領域驅動設計的社群。"}
      </Typography>
      <Typography>
        {
          "於2018年創立，我們熱愛分享、熱愛技術、熱愛學習。我們的志工包含軟體工程師、架構師、產品經理、設計師，以及各式各樣愛好領域驅動設計的夥伴。目前志工人數大約20人，並且在持續的成長當中。"
        }
      </Typography>
    </>
  ),
  pastYear: "2020 年會",
  pastYearArticle: (
    <>
      <Typography>
        {
          "第一屆的年會，我們的主軸會希望能讓更多人知道何謂領域驅動設計(DDD)，以及讓更多人意識到其實 DDD 真的不是只是一票技術人員寫寫程式，關注程式碼本身結構性的問題而已，所以以演講與工作坊並進的方式來進行。去年我們邀請到來自 DDD_Eu 、中國等地的講者，並且同時結合台灣對於領域驅動設計長年有研究並且有意願與大家分享的老朋友們，一起與大家共同探討這個已經出生了 10 多年的老方法能給大家帶來的新體驗與感受。"
        }
      </Typography>
      <Button variant="contained" component={Link} to="/conf2020">
        {"回顧 2020"}
      </Button>
    </>
  ),
  thisYear: "今年年會",
  thisYearArticle: <Typography>{description}</Typography>,
  joinNow: "Join Now",
  comingSoon: "敬請期待",
};

export default memo(function Page() {
  return <Home i18n={i18n} />;
});
