import { css } from "@emotion/css";
import React, { memo } from "react";
import type { SessionProps } from "./Session";
import Session from "./Session";

export type SessionsProps = { sessions: SessionProps[] };

const cssSessions = css`
  label: Sessions;
  display: flex;
  flex-direction: column;
`;

export default memo(function Sessions({ sessions }: SessionsProps) {
  return (
    <div className={cssSessions}>
      {sessions.map(({ to, name }) => (
        <Session key={to} to={to} name={name} />
      ))}
    </div>
  );
});
