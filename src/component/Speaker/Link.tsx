import { IconButton } from "@material-ui/core";
import A from "@site/src/component/A";
import AboutMeIcon from "@site/src/icon/AboutMeIcon";
import FacebookIcon from "@site/src/icon/FacebookIcon";
import GithubIcon from "@site/src/icon/GithubIcon";
import TwitterIcon from "@site/src/icon/TwitterIcon";
import YouTubeIcon from "@site/src/icon/YouTubeIcon";
import React, { memo, useMemo } from "react";

export type LinkProps = {
  type: "about.me" | "facebook" | "github" | "youtube" | "twitter";
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
