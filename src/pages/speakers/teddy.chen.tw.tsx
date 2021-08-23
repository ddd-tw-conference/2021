import { Typography } from "@material-ui/core";
import type { SpeakerI18n } from "@site/src/component/Speaker";
import Speaker from "@site/src/pageContent/speakers/teddy.chen.tw";
import { memo } from "react";

const i18n: SpeakerI18n = {
  name: "Teddy Chen",
  title: [
    "THE FOUNDER OF Teddy Software",
    'Moderator of the blog "Funny Talk in Software Engineering"',
  ],
  description:
    'Teddy Chen，THE FOUNDER OF Teddy Software, ，Moderator of the blog "Funny Talk in Software Engineering". Teddy is a consultant and training coach in software and agile, and a  part-time development assistant professor at the School of Information Technology, Taipei University of Technology, offers courses on agile and lean software, software architecture, etc.',
  detail: (
    <Typography>
      {
        'Teddy Chen，THE FOUNDER OF Teddy Software, ，Moderator of the blog "Funny Talk in Software Engineering". Teddy is a consultant and training coach in software and agile, and a  part-time development assistant professor at the School of Information Technology, Taipei University of Technology, offers courses on agile and lean software, software architecture, etc.'
      }
    </Typography>
  ),
  sessions: [
    {
      slug: "when-dci-conjunction-with-ddd",
      name: "When DCI conjunction with DDD",
    },
  ],
  ogImage: undefined,
};

export default memo(function I18n() {
  return <Speaker {...i18n} />;
});
