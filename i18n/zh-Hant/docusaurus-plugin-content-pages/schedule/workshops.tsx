import Workshops, { I18n } from "@site/src/pageContent/schedule/workshops";
import { memo } from "react";

const i18n: I18n = {
  other: {
    checkIn: "Check In",
    LunchBreak: "Lunch Break",
  },
  session: {
    "thoroughly-tempered-coworking-model-eventstorming": {
      slug: "thoroughly-tempered-coworking-model-eventstorming",
      title: "千錘百鍊-Event Storming",
      guest: [
        { name: "Morty" },
        { name: "Ean" },
        { name: "鄭棋文" },
        { name: "Max" },
      ],
    },
    "domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology":
      {
        slug: "domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology",
        title: "在業務與技術相遇的十字路口探索系統設計 - Domain Storytelling",
        guest: [
          { name: "吳佳芷" },
          { name: "劉鳯軒" },
          { name: "林鴻皓" },
          { name: "何松穎" },
        ],
      },
  },
};

export default memo(function Page() {
  return <Workshops {...i18n} />;
});
