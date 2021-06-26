import { createTheme, ThemeProvider } from "@material-ui/core";
import themeConfig from "@site/src/theme";
import useThemeContext from "@theme/hooks/useThemeContext";
import React, { memo, ReactNode, useMemo } from "react";

export type MuiThemeProps = {
  children?: ReactNode;
  dark?: boolean;
};

export default memo(function MuiTheme({ children, dark }: MuiThemeProps) {
  const { isDarkTheme } = useThemeContext();

  const theme = useMemo(
    () =>
      createTheme({
        ...themeConfig,
        palette: {
          ...themeConfig.palette,
          mode:
            dark === undefined
              ? isDarkTheme
                ? "dark"
                : "light"
              : dark
              ? "dark"
              : "light",
        },
      }),
    [dark, isDarkTheme]
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
});
