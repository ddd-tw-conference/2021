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
      title: "Thoroughly tempered coworking model -  EventStorming",
      guest: [
        { name: "Morty" },
        { name: "Ean" },
        { name: "Steven" },
        { name: "Max" },
      ],
    },
    "domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology":
      {
        slug: "domain-storytelling-explore-system-design-at-the-crossroads-where-business-strategy-meet-technology",
        title:
          "Domain Storytelling - Explore system design at the crossroads where business strategy meet technology",
        guest: [
          { name: "Sandy" },
          { name: "Fong" },
          { name: "River" },
          { name: "Blues" },
        ],
      },
  },
};

export default memo(function Page() {
  return <Workshops {...i18n} />;
});
