import { css } from "@emotion/css";
import { Typography } from "@material-ui/core";
import { memo } from "react";
import type { BeforeSessionProps } from "./BeforeSession";
import BeforeSession from "./BeforeSession";

export type BeforeSessionArrProps = { links: BeforeSessionProps[] };

const cssBeforeSessionArr = css`
  label: BeforeSessionArr;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

export default memo(function BeforeSessionArr({
  links,
}: BeforeSessionArrProps) {
  return (
    <>
      <Typography variant="h5" component="h2">
        {"Before Session"}
      </Typography>
      <div className={cssBeforeSessionArr}>
        <ul>
          {links.map(({ name, link }) => (
            <BeforeSession key={link} name={name} link={link} />
          ))}
        </ul>
      </div>
    </>
  );
});
