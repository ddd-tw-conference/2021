import Conf2020, { I18n } from "@site/src/pageContent/conf2020";
import React, { memo } from "react";

const i18n: I18n = {
  title: "Review 2020",
  description:
    "Our first conference, DDDTW 2020, was a physical meeting that aims to promote DDD in Taiwan. Through speeches and workshops, the participants perceived that DDD is more than a technical terms, but focusing on business knowledge and problem solving. Last year, over 200 people joined the conference and we got speakers from Taiwan, Europe, and China, learning how DDD is implemented in different places.",
  speeches: "Speeches",
  workshops: "Workshops",
  conferencesEveryYears: "Conferences Every Years",
  forward2021: "Forward 2021",
};

export default memo(function Page() {
  return <Conf2020 i18n={i18n} />;
});
