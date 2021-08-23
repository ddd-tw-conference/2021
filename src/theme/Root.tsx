import { StyledEngineProvider } from "@material-ui/core";
import { ReactNode } from "react";

export type LayoutProps = {
  children?: ReactNode;
};

export default function Layout({ children }) {
  return (
    <>
      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
    </>
  );
}
