import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/lucamezzalira";
import React, { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Luca Mezzalira",
  title: [],
  description:
    "自 2004 年開始踏入資訊領域，我主要在解決方案架構領域提供專業知識。 我因通過微前端徹底改變前端架構的可擴展性而獲得讚譽，從提高工作流程的效率到提供產品質量。 我的同事認為我是一位優秀的溝通者，他們相信並認可我能使用互動方法來理解和解決不同範圍的問題。 我在短短 5 年內幫助 DAZN 成為全球 OTT 平台，現在擔任 AWS 的首席架構師，我正在幫助媒體和娛樂領域的客戶為其客戶提供具有成本效益且可擴展的雲解決方案。 最後，我將與社區分享開發雲原生架構以解決技術和組織挑戰的最佳實踐。",
  detail: (
    <>
      <Typography>
        {
          "自 2004 年開始踏入資訊領域，我主要在解決方案架構領域提供專業知識。 我因通過微前端徹底改變前端架構的可擴展性而獲得讚譽，從提高工作流程的效率到提供產品質量。 我的同事認為我是一位優秀的溝通者，他們相信並認可我能使用互動方法來理解和解決不同範圍的問題。"
        }
      </Typography>
      <Typography>
        {
          "我在短短 5 年內幫助 DAZN 成為全球 OTT 平台，現在擔任 AWS 的首席架構師，我正在幫助媒體和娛樂領域的客戶為其客戶提供具有成本效益且可擴展的雲解決方案。"
        }
      </Typography>
      <Typography>
        {"最後，我將與社區分享開發雲原生架構以解決技術和組織挑戰的最佳實踐。"}
      </Typography>
    </>
  ),
  sessions: [
    {
      slug: "evolutionary-aws-lambda-with-hexagonal-architecture",
      name: "Evolutionary AWS Lambda with hexagonal architecture",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
