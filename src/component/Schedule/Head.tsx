import { css, cx } from "@emotion/css";
import type { IconButtonProps } from "@material-ui/core";
import { IconButton, Typography } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import useWindowSizeCsr from "@site/src/hook/useWindowSizeCsr";
import type { ComponentProps } from "react";
import { memo, useCallback, useMemo, useRef } from "react";
import { breakingPoint, useShowedColContext } from "./Schedule";

export type HeadProps = ComponentProps<"th">;

const cssInner = css`
  label: Inner;
  position: relative;
  border-radius: 4px;
  padding: 0.5em 1.5em;
  white-space: nowrap;
  background-color: var(--ifm-color-primary-lightest);
  color: var(--ifm-color-primary-darkest);
  html[data-theme="dark"] & {
    background-color: var(--ifm-color-primary-darkest);
    color: var(--ifm-color-primary-);
  }
`;

const cssRwdSelector = css`
  label: cssRwdSelector;
  @media (max-width: ${breakingPoint}px) {
    cursor: pointer;
  }
`;

const cssBack = css`
  label: Back;
  display: none;
  @media (max-width: ${breakingPoint}px) {
    display: block;
    position: absolute;
    top: 7px;
    left: 2px;
  }
`;

const cssBackHidden = css`
  label: BackHidden;
  @media (max-width: ${breakingPoint}px) {
    display: none;
  }
`;

export default memo(function Head({
  children,
  className,
  ...props
}: HeadProps) {
  const ref = useRef<HTMLTableHeaderCellElement>();
  const [width] = useWindowSizeCsr();
  const isNarrow = useMemo(() => width <= breakingPoint, [width]);
  const [showedCol, setShowedCol] = useShowedColContext();
  const selected = useMemo(() => showedCol >= 0, [showedCol]);
  const clickHandler = useCallback(() => {
    if (selected) return;
    if (!isNarrow) return;
    setShowedCol(ref.current.cellIndex);
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [isNarrow, selected, setShowedCol]);
  const back = useCallback<IconButtonProps["onClick"]>(
    (e) => {
      if (!isNarrow) return;
      e.stopPropagation();
      setShowedCol(-1);
      window.scrollTo({ behavior: "smooth", top: 0 });
    },
    [isNarrow, setShowedCol]
  );
  const cls = useMemo(
    () => cx(!selected && cssRwdSelector, className),
    [className, selected]
  );
  const isButtonRole = useMemo(() => {
    return isNarrow && !selected;
  }, [isNarrow, selected]);
  return (
    <th
      {...props}
      className={cls}
      ref={ref}
      tabIndex={isButtonRole ? 0 : undefined}
      role={isButtonRole ? "button" : undefined}
      onClick={clickHandler}
    >
      <div className={cssInner}>
        <IconButton
          className={cx(cssBack, !selected && cssBackHidden)}
          onClick={back}
          size="small"
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="h5" component="h2">
          {children}
        </Typography>
      </div>
    </th>
  );
});
