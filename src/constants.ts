export const difficultyEntry = "entry" as const;
export const difficultyMedium = "medium" as const;
export const difficultyAdvanced = "advanced" as const;

export type DifficultyEntry = typeof difficultyEntry;
export type DifficultyMedium = typeof difficultyMedium;
export type DifficultyAdvanced = typeof difficultyAdvanced;
export type Difficulty =
  | DifficultyEntry
  | DifficultyMedium
  | DifficultyAdvanced;
