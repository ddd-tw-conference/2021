import { css } from "@emotion/css";
import FootPrint, { FootPrintProps } from "@site/src/icon/FootPrint";
import { memo, useMemo } from "react";

export type FootProps = FootPrintProps & {
  foot: "right" | "left";
};

const cssBase = css`
  label: Base;
  color: var(--ifm-color-primary);
`;

export default memo(function Foot({ foot = "left", ...props }: FootProps) {
  const clsDiv = useMemo(
    () => css`
      label: FootDiv;
      transform: rotate(180deg) ${foot === "left" ? "" : "scaleX(-1)"}
        translateX(-12px);
    `,
    [foot]
  );
  return (
    <div className={clsDiv}>
      <FootPrint className={cssBase} {...props} />
    </div>
  );
});
