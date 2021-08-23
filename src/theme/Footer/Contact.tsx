import { css } from "@emotion/css";
import { IconButton } from "@material-ui/core";
import Email from "@material-ui/icons/Email";
import A from "@site/src/component/A";
import FacebookIcon from "@site/src/icon/FacebookIcon";
import FacebookSocialIcon from "@site/src/icon/FacebookSocialIcon";
import InstagramIcon from "@site/src/icon/InstagramIcon";
import MessengerIcon from "@site/src/icon/MessengerIcon";
import TwitterIcon from "@site/src/icon/TwitterIcon";
import YouTubeIcon from "@site/src/icon/YouTubeIcon";
import { memo } from "react";

const cls = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default memo(function Contact() {
  return (
    <div className={cls}>
      <div className={cls}>
        <IconButton component={A} href="mailto:conference@ddd-tw.com">
          <Email />
        </IconButton>
        <IconButton component={A} href="https://m.me/DDDCommunity.tw">
          <MessengerIcon />
        </IconButton>
      </div>
      <div className={cls}>
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
      </div>
    </div>
  );
});
