import Link from "@docusaurus/Link";
import { css } from "@emotion/css";
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
  align-items: center;
`;

export default memo(function Session({ slug, name }: SessionProps) {
  return (
    <Typography
      component={Link}
      className={cssLink}
      variant="body2"
      to={`/sessions/${slug}`}
    >
      <ChatBubble fontSize="inherit" />
      <div>{name}</div>
    </Typography>
  );
});
