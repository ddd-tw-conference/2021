import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/a-practical-guide-for-domain-driven-design-teams";
import { memo } from "react";

const i18n: SessionI18n = {
  name: "領域驅動設計團隊實踐指南",
  description:
    "如果DDD只為提升個人技能，則DDD將很難在團隊實踐成功，除了技能的原因，團隊成員的協作、遵守的紀律、實施的過程都會干擾和影響DDD的落地實施。本演講主題將針對這一問題，結合具體的實施案例提出面向團隊的領域驅動設計實踐指南，降低團隊實施DDD的門檻，保證DDD實施的成功率。",
  detail: (
    <>
      <Typography>
        {
          "如果DDD只為提升個人技能，則DDD將很難在團隊實踐成功，除了技能的原因，團隊成員的協作、遵守的紀律、實施的過程都會干擾和影響DDD的落地實施。本演講主題將針對這一問題，結合具體的實施案例提出面向團隊的領域驅動設計實踐指南，降低團隊實施DDD的門檻，保證DDD實施的成功率。"
        }
      </Typography>
      <Typography>
        {
          "本演講將DDD的設計模式、實施過程與敏捷迭代開發、流程進度管控、需求分析管理、團隊角色協作結合起來，通過定義領域驅動設計統一過程，給出團隊實踐DDD的參考指南、最佳實踐、團隊紀律與交付物模板。"
        }
      </Typography>
      <Typography>{"演講分為"}</Typography>
      <ol>
        <Typography component="li">{"DDD成功實施的必要條件"}</Typography>
        <Typography component="li">{"領域驅動設計統一過程"}</Typography>
        <Typography component="li">{"業務服務驅動的分析設計方法"}</Typography>
        <Typography component="li">{"領域驅動設計過程交付物"}</Typography>
        <Typography component="li">{"領域驅動設計團隊紀律"}</Typography>
      </ol>
      <Typography variant="h5" component="h2">
        {"預期聽眾學習成果"}
      </Typography>
      <ol>
        <Typography component="li">
          {"掌握領域驅動設計的團隊實施過程"}
        </Typography>
        <Typography component="li">
          {"掌握以業務服務為基本業務單元的需求分析方法"}
        </Typography>
        <Typography component="li">
          {"了解一種能夠降低團隊實施DDD難度的設計方法"}
        </Typography>
        <Typography component="li">
          {"了解成功實施該過程方法的業界案例"}
        </Typography>
      </ol>
    </>
  ),
  beforeSession: [
    {
      name: "Blog",
      link: "http://zhangyi.xyz/",
    },
  ],
  guests: [
    {
      name: "張逸",
      slug: "brucezhang",
      image: require("@site/src/speakers/brucezhangProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
