import Link from "@docusaurus/Link";
import { css, cx, keyframes } from "@emotion/css";
import { Box, Button, Container, Typography } from "@material-ui/core";
import OpenInNew from "@material-ui/icons/OpenInNew";
import A from "@site/src/component/A";
import FootPrintsVertical from "@site/src/component/FootPrintVertical/FootPrintsVertical";
import Rocket from "@site/src/icon/Rocket";
import { memo } from "react";
import { useI18n } from ".";

const cssArticle = css`
  label: Article;
  margin-top: -120px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
`;

const cssBackLink = css`
  label: BackLink;
  transition: transform 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &:hover {
    transform: scale(1.1);
  }
`;

const animeHeartBeat = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.05);
  }
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const cssHeartBeat = css`
  animation: 2s infinite ${animeHeartBeat} ease-in-out;
  &:hover {
    animation: none;
  }
`;

export default memo(function Article() {
  const i18n = useI18n();
  return (
    <Container maxWidth="md" className={cssArticle}>
      <FootPrintsVertical size={3}>
        <Typography variant="h3" component="h1">
          {i18n.title}
        </Typography>
        <Typography>{i18n.description}</Typography>
      </FootPrintsVertical>
      <FootPrintsVertical size={4} invert>
        <Button
          variant="contained"
          size="large"
          className={cssBackLink}
          component={A}
          href="https://conference.ddd-tw.com"
          endIcon={<OpenInNew />}
        >
          <Typography variant="h6" component="span">
            {i18n.conferencesEveryYears}
          </Typography>
        </Button>
      </FootPrintsVertical>
      <FootPrintsVertical size={5} invert>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          className={cx(cssBackLink, cssHeartBeat)}
          component={Link}
          to="/"
        >
          <Box
            display="flex"
            flexDirection="column"
            fontSize="6em"
            alignItems="center"
            gap={1}
          >
            <Rocket fontSize="inherit" />
            <Typography variant="h4" component="span">
              {i18n.forward2021}
            </Typography>
          </Box>
        </Button>
      </FootPrintsVertical>
    </Container>
  );
});
