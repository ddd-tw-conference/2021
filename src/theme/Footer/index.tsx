/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css } from "@emotion/css";
import { Box, IconButton, Typography } from "@material-ui/core";
import { Email } from "@material-ui/icons";
import A from "@site/src/component/A";
import Dark from "@site/src/component/Dark";
import FacebookIcon from "@site/src/icon/FacebookIcon";
import FacebookSocialIcon from "@site/src/icon/FacebookSocialIcon";
import InstagramIcon from "@site/src/icon/InstagramIcon";
import MessengerIcon from "@site/src/icon/MessengerIcon";
import TwitterIcon from "@site/src/icon/TwitterIcon";
import YouTubeIcon from "@site/src/icon/YouTubeIcon";
import React from "react";

const cssFooter = css`
  label: Footer;
  background: var(--ifm-navbar-background-color);
  color: var(--ifm-color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px 32px;
`;

function Footer() {
  return (
    <Dark>
      <footer className={cssFooter}>
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          <IconButton component={A} href="mailto:conference@ddd-tw.com">
            <Email />
          </IconButton>
          <IconButton component={A} href="https://m.me/DDDCommunity.tw">
            <MessengerIcon />
          </IconButton>
          <IconButton component={A} href="https://twitter.com/DddTaiwan">
            <TwitterIcon />
          </IconButton>
          <IconButton component={A} href="https://www.instagram.com/ddd_twig">
            <InstagramIcon />
          </IconButton>
          <IconButton
            component={A}
            href="https://www.facebook.com/DDDCommunity.tw"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component={A}
            href="https://www.facebook.com/groups/dddtaiwan"
          >
            <FacebookSocialIcon />
          </IconButton>
          <IconButton
            component={A}
            href="https://www.youtube.com/channel/UCydw7dbEksG3axEMjHy4BxQ"
          >
            <YouTubeIcon />
          </IconButton>
        </Box>
        <Box textAlign="center">
          <Typography>
            {"©2021 Domain Driven Design Taiwan. All rights reserved."}
          </Typography>
        </Box>
      </footer>
    </Dark>
  );
}

export default Footer;
