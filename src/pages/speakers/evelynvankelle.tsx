import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/evelynvankelle";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Evelyn Van Kelle",
  title: [
    "Strategic Software Delivery Consultant",
    "Socio-technical architect",
    "Public speaker",
  ],
  description:
    "Trying to make sense of the socio-technical mashup that is called software development",
  detail: (
    <>
      <Typography>
        {
          "Trying to make sense of the socio-technical mashup that is called software development"
        }
      </Typography>
      <Typography>
        {
          "Evelyn van Kelle is a strategic software delivery consultant, with experience in coaching, advising and guiding organisations and teams in designing socio-technical systems. Her Master’s degree in social sciences brings new and valuable perspectives when it comes to optimizing both delivery- and team processes."
        }
      </Typography>
      <Typography>
        {
          "Being a firm believer of context shaping meaning, she is focused on understanding company- and team culture before anything else. Finding the actual problem to solve and adding business value are starting points in her work. Evelyn is convinced that we need a shared sense of reality including shared values, goals and language in order to perform best as a team. She is curious, driven and pragmatic. “Continuous improvement is better than delayed perfection” describes her line of reasoning."
        }
      </Typography>
      <Typography>
        {
          "Besides her daily work, she has a predilection for books and linguistics, and highly appreciates good food."
        }
      </Typography>
    </>
  ),
  sessions: [
    {
      slug: "autonomy-is-that-what-we-really-want",
      name: "Autonomy, is that what we really want?",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
