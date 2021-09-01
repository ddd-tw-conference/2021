import { css, cx } from "@emotion/css";
import { Typography } from "@material-ui/core";
import {
  Difficulty,
  difficultyAdvanced,
  difficultyEntry,
  difficultyMedium,
} from "@site/src/constants";
import FootPrint from "@site/src/icon/FootPrint";
import { memo, useMemo } from "react";

const cssDifficulty = css`
  label: Difficulty;
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: var(--ifm-color-emphasis-600);
  --difficulty-entry: #06d6a0;
  --difficulty-medium: #ffd166;
  --difficulty-advanced: #ef476f;
  html[data-theme="dark"] & {
    color: var(--ifm-color-emphasis-500);
  }
`;

const cssFootPrints = css`
  label: FootPrints;
  display: flex;
  align-items: center;
  gap: 0.1em;
  color: var(--ifm-color-emphasis-200);
  html[data-theme="dark"] & {
    color: var(--ifm-color-emphasis-200);
  }
`;

const cssEntry = css`
  label: Entry;
  color: var(--difficulty-entry);
`;

const cssMedium = css`
  label: Medium;
  color: var(--difficulty-medium);
`;

const cssAdvanced = css`
  label: Advanced;
  color: var(--difficulty-advanced);
`;

export type DifficultyProps = {
  difficulty: Difficulty;
  className?: string;
};

export default memo(function Difficulty({
  difficulty,
  className,
}: DifficultyProps) {
  const cls = useMemo(() => cx(cssDifficulty, className), [className]);
  const css1 = useMemo(
    () =>
      cx(
        difficulty === difficultyEntry
          ? cssEntry
          : difficulty === difficultyMedium
          ? cssMedium
          : difficulty === difficultyAdvanced
          ? cssAdvanced
          : null
      ),
    [difficulty]
  );
  const css2 = useMemo(
    () =>
      cx(
        difficulty === difficultyMedium
          ? cssMedium
          : difficulty === difficultyAdvanced
          ? cssAdvanced
          : null
      ),
    [difficulty]
  );
  const css3 = useMemo(
    () => cx(difficulty === difficultyAdvanced ? cssAdvanced : null),
    [difficulty]
  );
  return (
    <div className={cls}>
      <Typography variant="inherit" component="span">
        {"Difficulty: "}
      </Typography>
      <div className={cssFootPrints}>
        <FootPrint fontSize="inherit" className={css1} />
        <FootPrint fontSize="inherit" className={css2} />
        <FootPrint fontSize="inherit" className={css3} />
      </div>
    </div>
  );
});
