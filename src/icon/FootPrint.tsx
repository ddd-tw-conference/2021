import { SvgIcon, SvgIconProps } from "@material-ui/core";
import { memo } from "react";

export type FootPrintProps = Omit<SvgIconProps, "viewBox" | "children">;

export default memo(function FootPrint(props: FootPrintProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 194.54 478.25">
      <path
        d="M244.12,14.8s-102,28.11-102.45,144.66,25.48,149.43,25.48,149.43L302.3,294.66s25.64-68.07,32.79-134.82S315.33,10.41,244.12,14.8Z"
        transform="translate(-141.66 -14.63)"
      />
      <path
        d="M175.6,356.48l126.32-14.07s55.86,148-40,150.44C167.65,495.31,175.6,356.48,175.6,356.48Z"
        transform="translate(-141.66 -14.63)"
      />
    </SvgIcon>
  );
});
