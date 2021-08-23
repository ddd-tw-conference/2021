import { createTheme, ThemeProvider } from "@material-ui/core";
import useThemeContext from "@theme/hooks/useThemeContext";
import { memo, ReactNode, useEffect, useMemo, useState } from "react";

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
        typography: {
          fontFamily: "var(--ifm-font-family-base)",
        },
        palette: {
          primary: currentDark
            ? {
                light: "#76b3b3",
                main: "#5e9b9b",
                dark: "#2e6d6d",
              }
            : {
                light: "#8ecccc",
                main: "#76b3b3",
                dark: "#5e9b9b",
              },
          mode: currentDark ? "dark" : "light",
        },
        components: {
          MuiButton: {
            styleOverrides: {
              contained: {
                ":hover": {
                  color: "var(--ifm-font-color-base)",
                },
              },
            },
          },
        },
      }),
    [currentDark]
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
});
