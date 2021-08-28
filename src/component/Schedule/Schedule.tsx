import { css } from "@emotion/css";
import { Container } from "@material-ui/core";
import type { ReactNode } from "react";
import { memo } from "react";

const scrollPadding = 120;
const breakingPoint = 996;

export type ScheduleProps = {
  head: ReactNode;
  children: ReactNode;
};

const cssContainer = css`
  label: Container;
  position: relative;
  padding: 0;
  @media (max-width: ${breakingPoint}px) {
    overflow: auto;
    max-height: calc(100vh - ${scrollPadding}px);
  }
`;

const cssTable = css`
  label: Table;
  display: table;
  position: relative;
  width: 100%;
  height: 100%;
  & th {
    position: sticky;
    top: 0;
    z-index: 1;
  }
  & tr,
  & th {
    border: none;
    vertical-align: top;
    &:nth-child(2n) {
      background: none;
    }
  }
  & td {
    border: none;
    & > * {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }
`;

export default memo(function Schedule({ head, children }: ScheduleProps) {
  return (
    <Container className={cssContainer}>
      <table className={cssTable}>
        <thead>
          <tr>{head}</tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </Container>
  );
});
