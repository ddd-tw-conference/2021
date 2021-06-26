import { createTheme, ThemeProvider } from "@material-ui/core";
import themeConfig from "@site/src/theme";
import useThemeContext from "@theme/hooks/useThemeContext";
import React, { memo, ReactNode, useEffect, useMemo, useState } from "react";

export type MuiThemeProps = {
  children?: ReactNode;
  dark?: boolean;
};

const getDark = (isDarkTheme: boolean, dark?: boolean) => {
  if (typeof dark === "boolean") return dark;
  return isDarkTheme;
};

export default memo(function MuiTheme({ children, dark }: MuiThemeProps) {
  const { isDarkTheme } = useThemeContext();
  const targetDark = useMemo(
    () => getDark(isDarkTheme, dark),
    [dark, isDarkTheme]
  );
  const [currentDark, setCurrentDark] = useState(!targetDark);
  useEffect(() => {
    setCurrentDark(targetDark);
  }, [targetDark]);

  const theme = useMemo(
    () =>
      createTheme({
        ...themeConfig,
        palette: {
          ...themeConfig.palette,
          mode: currentDark ? "dark" : "light",
        },
      }),
    [currentDark]
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
});
