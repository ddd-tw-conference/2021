import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/evolutionary-aws-lambda-with-hexagonal-architecture";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Evolutionary AWS Lambda with hexagonal architecture",
  description:
    "在現在，架構的發展是一種強制性的特徵，而使用六邊形架構結合 AWS Lambda，可以提供你正在尋找的敏捷性。",
  detail: (
    <>
      <Typography>
        {
          "六邊形架構(或者介面和適配器架構)是一種架構模式，用於創建可輕鬆連接到其軟體環境的鬆散耦合應用程式組件。 這使得組件可以在任何級別交換，並促進測試自動化。 AWS Lambda 提供了使用這種架構的完美環境，而且使用六邊形架構，在跨雲服務移植的情況下，可以非常靈活地更改其運算環境。"
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"預期聽眾收穫"}
      </Typography>
      <Typography>
        {
          "了解如何使用六邊形架構來發展無伺服器計算架構、引入新功能、在不影響領域邏輯的情況下更改基礎架構、跨多個計算服務的代碼的可移植性"
        }
      </Typography>
    </>
  ),
  beforeSession: [
    {
      name: "Developing evolutionary architecture with AWS Lambda",
      link: "https://aws.amazon.com/blogs/compute/developing-evolutionary-architecture-with-aws-lambda/",
    },
  ],
  guests: [
    {
      name: "Luca Mezzalira",
      slug: "lucamezzalira",
      image: require("@site/src/speakers/lucamezzaliraProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
