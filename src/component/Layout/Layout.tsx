import DefaultLayout from "@theme/Layout";
import React, { memo, ReactNode } from "react";
import MuiTheme from "../MuiTheme";

/**
 * @docusaurus/theme-classic/src/theme/Layout
 */
export type LayoutProps = {
  children: ReactNode;
  title?: string;
  noFooter?: boolean;
  description?: string;
  image?: string;
  keywords?: string | string[];
  permalink?: string;
  wrapperClassName?: string;
  pageClassName?: string;
  searchMetadatas?: {
    version?: string;
    tag?: string;
  };
};

export default memo(function Layout({ children, ...props }: LayoutProps) {
  return (
    <DefaultLayout {...props}>
      <MuiTheme>{children}</MuiTheme>
    </DefaultLayout>
  );
});
