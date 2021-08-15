import { css } from "@emotion/css";
import React, { memo } from "react";
import type { SessionProps } from "./Session";
import Session from "./Session";

export type SessionsProps = { sessions: SessionProps[] };

const cssSessions = css`
  label: Sessions;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default memo(function Sessions({ sessions }: SessionsProps) {
  return (
    <div className={cssSessions}>
      {sessions.map(({ slug, name }) => (
        <Session key={slug} slug={slug} name={name} />
      ))}
    </div>
  );
});
