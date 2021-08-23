import { css } from "@emotion/css";
import { Container, Paper } from "@material-ui/core";
import MuiTheme from "@site/src/component/MuiTheme";
import Contact from "./Contact";
import CopyRight from "./CopyRight";

const cssContainer = css`
  label: Footer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

function Footer() {
  return (
    <MuiTheme>
      <Paper component="footer">
        <Container className={cssContainer}>
          <Contact />
          <CopyRight />
        </Container>
      </Paper>
    </MuiTheme>
  );
}

export default Footer;
