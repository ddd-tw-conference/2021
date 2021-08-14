import Link from "@docusaurus/Link";
import { css, keyframes } from "@emotion/css";
import { Typography } from "@material-ui/core";
import { ChatBubble } from "@material-ui/icons";
import React, { memo } from "react";

export type SessionProps = {
  slug: string;
  name: string;
};

const cssLink = css`
  label: Link;
  display: flex;
  gap: 8px;
  align-items: baseline;
`;

const keyframesWobble = keyframes`
  0% { transform: translate(-50%, 20%) scale(1.25, 0.75); }
  50% { transform: translate(-50%, -20%) scale(1, 1); }
  55% { transform: translate(-50%, -20%) rotate(15deg); }
  60% { transform: translate(-50%, -20%) rotate(-15deg); }
  65% { transform: translate(-50%, -20%) rotate(15deg); }
  70% { transform: translate(-50%, -20%) rotate(-15deg); }
  100% { transform: translate(-50%, 20%) scale(1.25, 0.75); }
`;

const cssChatBubble = css`
  label: ChatBubble;
  animation: ${keyframesWobble} 2s ease infinite; ;
`;

export default memo(function Session({ slug, name }: SessionProps) {
  return (
    <Typography component={Link} className={cssLink} to={`/sessions/${slug}`}>
      <ChatBubble className={cssChatBubble} fontSize="inherit" />
      <div>{name}</div>
    </Typography>
  );
});
