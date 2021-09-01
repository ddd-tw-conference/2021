import Link from "@docusaurus/Link";
import { css } from "@emotion/css";
import { Typography } from "@material-ui/core";
import { Difficulty } from "@site/src/constants";
import { memo } from "react";
import DifficultyDisplay from "../Difficulty";
import ItemContainer from "./ItemContainer";
import Time from "./Time";

const cssSubSection = css`
  label: SubSection;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: space-between;
  gap: 1em;
`;

const cssDifficulty = css`
  label: sDifficulty;
  font-size: 0.8em;
`;

type Guest = {
  name: string;
};

export type ItemProps = {
  slug: string;
  title: string;
  guest: Guest[];
  time: string;
  difficulty?: Difficulty;
};

export default memo(function Item({
  slug,
  title,
  guest,
  time,
  difficulty,
}: ItemProps) {
  return (
    <ItemContainer Component={Link} to={`/sessions/${slug}`}>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <div className={cssSubSection}>
        {difficulty && (
          <DifficultyDisplay
            className={cssDifficulty}
            difficulty={difficulty}
          />
        )}
        <Time>{time}</Time>
      </div>
      <ul>
        {guest.map(({ name }, i) => (
          <Typography key={i} component="li">
            {name}
          </Typography>
        ))}
      </ul>
    </ItemContainer>
  );
});
