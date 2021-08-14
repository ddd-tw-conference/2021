import { Typography } from "@material-ui/core";
import type { SessionI18n } from "@site/src/component/Session";
import Session from "@site/src/pageContent/sessions/event-modeling-as-a-way-to-entirely-manage-the-software-development-life-cycle";
import React, { memo } from "react";

const i18n: SessionI18n = {
  name: "Event Modeling as a Way to Entirely Manage the Software Development Life-Cycle.",
  description:
    "Event Modeling has strong roots in Event Sourcing. It is through this lens that information systems and their automation start to become decomposable into state change types and workflow examples. This allows accurate estimates and the proper incentives and dis-incentives for asuring quality while removing subjective methods to try and accomplish those goals. There are a number of important changes to consider if your teams are ready to move onto the next level of responsible software development.",
  detail: (
    <>
      <Typography>
        {
          "Event Modeling has strong roots in Event Sourcing. It is through this lens that information systems and their automation start to become decomposable into state change types and workflow examples. This allows accurate estimates and the proper incentives and dis-incentives for asuring quality while removing subjective methods to try and accomplish those goals. There are a number of important changes to consider if your teams are ready to move onto the next level of responsible software development."
        }
      </Typography>
      <Typography variant="h5" component="h2">
        {"Takeaway"}
      </Typography>
      <ul>
        <Typography component="li">
          {"a fresh perspective on progress through a project"}
        </Typography>
        <Typography component="li">
          {
            "accurate scoping for individual pieces of functionality for a project"
          }
        </Typography>
        <Typography component="li">
          {
            "a way to track progress of a project that correctly reflects the progress"
          }
        </Typography>
        <Typography component="li">
          {"remove blockers like merge conflicts that are hard to fix"}
        </Typography>
        <Typography component="li">
          {
            "engage and collaborate transparently with multiple roles across the organization"
          }
        </Typography>
      </ul>
    </>
  ),
  beforeSession: [],
  guests: [
    {
      name: "Adam Dymitruk",
      slug: "adymitruk",
      image: require("@site/src/speakers/adymitrukProfileImage.png"),
    },
  ],
};

export default memo(function I18n() {
  return <Session {...i18n} />;
});
