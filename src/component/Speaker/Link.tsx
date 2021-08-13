import { IconButton } from "@material-ui/core";
import { Language, Mail } from "@material-ui/icons";
import A from "@site/src/component/A";
import AboutMeIcon from "@site/src/icon/AboutMeIcon";
import BloggerIcon from "@site/src/icon/BloggerIcon";
import FacebookIcon from "@site/src/icon/FacebookIcon";
import FacebookSocialIcon from "@site/src/icon/FacebookSocialIcon";
import GithubIcon from "@site/src/icon/GithubIcon";
import LinkedinIcon from "@site/src/icon/LinkedinIcon";
import TwitterIcon from "@site/src/icon/TwitterIcon";
import YouTubeIcon from "@site/src/icon/YouTubeIcon";
import React, { memo, useMemo } from "react";

export type LinkProps = {
  type:
    | "about.me"
    | "facebook"
    | "facebookgroup"
    | "github"
    | "youtube"
    | "twitter"
    | "linkedin"
    | "email"
    | "blogger"
    | "web";
  link: string;
};

export default memo(function Link({ type, link }: LinkProps) {
  const { href, Icon } = useMemo(() => {
    switch (type) {
      case "about.me":
        return {
          href: `https://about.me/${link}`,
          Icon: AboutMeIcon,
        };
      case "facebook":
        return {
          href: `https://fb.me/${link}`,
          Icon: FacebookIcon,
        };
      case "facebookgroup":
        return {
          href: `https://www.facebook.com/groups/${link}`,
          Icon: FacebookSocialIcon,
        };
      case "github":
        return {
          href: `https://github.com/${link}`,
          Icon: GithubIcon,
        };
      case "youtube":
        return {
          href: `https://youtube.com/${link}`,
          Icon: YouTubeIcon,
        };
      case "twitter":
        return {
          href: `https://twitter.com/${link}`,
          Icon: TwitterIcon,
        };
      case "linkedin":
        return {
          href: `https://www.linkedin.com/in/${link}`,
          Icon: LinkedinIcon,
        };
      case "email":
        return {
          href: `mailto:${link}`,
          Icon: Mail,
        };
      case "blogger":
        return {
          href: `https://${link}.blogspot.com/`,
          Icon: BloggerIcon,
        };
      case "web":
        return {
          href: link,
          Icon: Language,
        };
      default:
        throw new Error(`unknown type: ${type}`);
    }
  }, [link, type]);
  return (
    <IconButton component={A} href={href} size="small" color="secondary">
      <Icon />
    </IconButton>
  );
});
