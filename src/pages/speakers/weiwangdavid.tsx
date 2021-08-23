import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/weiwangdavid";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "David Wang",
  title: [],
  description:
    "Wang Wei (David) is the chief consultant of ThoughtWorks digital transformation, the chief and chief consultant of digital technology strategy services, and the chief enterprise architect. In the past few years, David has successively provided digital transformation related services to global leaders in industries such as telecommunications, energy, banking, insurance, shipping logistics, automobile manufacturing, Internet of Things, and supply chain management at home and abroad. Digital technology strategy, to realize the platformization and modernization of the system, and to help enterprises realize digital transformation.",
  detail: (
    <Typography>
      {
        "Wang Wei (David) is the chief consultant of ThoughtWorks digital transformation, the chief and chief consultant of digital technology strategy services, and the chief enterprise architect. In the past few years, David has successively provided digital transformation related services to global leaders in industries such as telecommunications, energy, banking, insurance, shipping logistics, automobile manufacturing, Internet of Things, and supply chain management at home and abroad. Digital technology strategy, to realize the platformization and modernization of the system, and to help enterprises realize digital transformation."
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "complexity-thinking-in-domain-driven-design",
      name: "Complexity Thinking in Domain Driven Design",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
