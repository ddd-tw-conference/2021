import { css, cx } from "@emotion/css";
import { Container } from "@material-ui/core";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, memo, useContext, useMemo, useState } from "react";

export const breakingPoint = 996;

export type ScheduleProps = {
  head: ReactNode;
  children: ReactNode;
};

const cssContainer = css`
  label: Container;
  position: relative;
  padding: 0;
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

const showedColContextDefaultValue: [number, Dispatch<SetStateAction<number>>] =
  [-1, () => {}];
const ShowedColContext = createContext([-1, () => {}] as [
  number,
  Dispatch<SetStateAction<number>>
]);
export const useShowedColContext = () => useContext(ShowedColContext);

export default memo(function Schedule({ head, children }: ScheduleProps) {
  const [showedCol, setShowedCol] = useState(-1);
  const showedColContextValue = useMemo<typeof showedColContextDefaultValue>(
    () => [showedCol, setShowedCol],
    [showedCol]
  );
  const cssContainerRwd = useMemo(
    () =>
      cx(
        cssContainer,
        showedCol < 0 &&
          css`
            label: Hide;
            @media (max-width: ${breakingPoint}px) {
              height: calc(100vh - var(--ifm-navbar-height));
              & table {
                display: block;
                height: 100%;
              }
              & thead {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              & tr {
                display: block;
              }
              & tr {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
              }
              & th {
                display: block;
                width: auto;
              }
              & tbody {
                display: none;
              }
            }
          `,
        showedCol > -1 &&
          css`
            label: ShowCol;
            @media (max-width: ${breakingPoint}px) {
              & th:not(:nth-child(${showedCol + 1})):not([colspan]),
              & td:not(:nth-child(${showedCol + 1})):not([colspan]) {
                display: none;
              }
            }
          `
      ),
    [showedCol]
  );
  return (
    <ShowedColContext.Provider value={showedColContextValue}>
      <Container className={cssContainerRwd}>
        <table className={cssTable}>
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </Container>
    </ShowedColContext.Provider>
  );
});
