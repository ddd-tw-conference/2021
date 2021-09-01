import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/when-dci-conjunction-with-ddd";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "當 DCI 遇到 DDD",
  description:
    "本演講簡介 DCI（Data, Context, Interaction）架構，並以實例（ezKanban系統）說明如何在 DDD 中應用 DCI，特別是在 Aggregate（聚合）的設計與實作上，可以讓聚合的責任更加清楚明白。",
  detail: (
    <>
      <Typography>
        {
          "DCI是Data, Context, Interaction的簡稱，其倡導者James Coplien認為：「把資料和行為封裝在類別身上是祖父級的物件導向設計方法。」DCI的Data物件在編譯期間雖然沒有豐富的行為，但其行為是在執行使用案例時動態由Context所指派。Coplien認為唯有給定一個Context再去解讀物件身上的行為才會有意義，程式也比較容易被讀懂。 本演講將介紹DCI架構原理，並以實際案例（ezKanban系統）展示如何套用DCI以簡化聚合（Aggregate）的設計與實作。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"演講摘要與大綱"}
      </Typography>
      <Typography>
        {
          "本演講簡介 DCI（Data, Context, Interaction）架構，並以實例（ezKanban系統）說明如何在 DDD 中應用 DCI，特別是在 Aggregate（聚合）的設計與實作上，可以讓聚合的責任更加清楚明白。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <Typography>{"增廣見聞、開心就好"}</Typography>
    </>
  ),
  beforeSession: [
    {
      name: "領域驅動設計學習筆記（16）：學DCI，重構Aggregate ，Part 1",
      link: "https://teddy-chen-tw.blogspot.com/2021/06/16dciaggregate-part-1.html",
    },
    {
      name: "領域驅動設計學習筆記（17）：學DCI，重構Aggregate ，Part 2",
      link: "https://teddy-chen-tw.blogspot.com/2021/06/17dciaggregate-part-2.html",
    },
    {
      name: "領域驅動設計學習筆記（18）：學DCI，重構Aggregate ，Part 3",
      link: "https://teddy-chen-tw.blogspot.com/2021/06/18dciaggregate-part-3.html",
    },
    {
      name: "The DCI Architecture: A New Vision of Object-Oriented Programming",
      link: "https://www.artima.com/articles/the-dci-architecture-a-new-vision-of-object-oriented-programming",
    },
  ],
  guests: [
    {
      name: "陳建村",
      slug: "teddy.chen.tw",
      image: require("@site/src/speakers/teddy.chen.twProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
