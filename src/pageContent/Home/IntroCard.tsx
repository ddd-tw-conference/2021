import { Box, Paper, Typography } from "@material-ui/core";
import Image from "@theme/IdealImage";
import React, { ReactNode } from "react";

export default function IntroCard({
  img,
  title,
  content,
}: {
  img: string;
  title?: ReactNode;
  content?: ReactNode;
}) {
  const width = 360;
  return (
    <Box
      component={Paper}
      display="flex"
      flexDirection="column"
      flexWrap="nowrap"
      borderRadius={4}
      overflow="hidden"
      gap={2}
      alignItems="stretch"
      textAlign="center"
      maxWidth={width}
      height="auto"
    >
      <Box
        overflow="hidden"
        sx={{
          position: "relative",
          "&:before": {
            content: `""`,
            paddingTop: "calc(100% * 240 / 360)",
            float: "left",
          },
          "&:after": {
            display: "block",
            content: `""`,
            clear: "both",
          },
        }}
      >
        <Image img={img} max={width} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="nowrap"
        alignItems="stretch"
        textAlign="center"
        gap={2}
        pt={3}
        pb={4}
        pr={2}
        pl={2}
      >
        <Typography variant="h6">{title}</Typography>
        {typeof content === "string" ? (
          <Typography>{content}</Typography>
        ) : (
          content
        )}
      </Box>
    </Box>
  );
}
