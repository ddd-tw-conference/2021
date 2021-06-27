const baseUrl = process.env.BASE_URL || "/";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "DDD TW Conference 2021",
  tagline: `Footprints of the pioneers. Let's follow the footprints of the pioneers from all over the world and "Tackling Complexity in the Heart of Software"`,
  url: "https://conference.ddd-tw.com",
  baseUrl,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ddd-tw-community", // Usually your GitHub org/user name.
  projectName: "2021-ddd-conference", // Usually your repo name.
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "zh-TW"],
  //   localeConfigs: {
  //     en: {
  //       label: "English",
  //       direction: "ltr",
  //     },
  //   },
  // },
  themeConfig: {
    image: "img/ogImage.png",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "DDD TW Conference 2021",
      logo: {
        alt: "DDD TW Conference 2021",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/conf2020",
          label: "Review 2020",
          position: "right",
        },
        // {
        //   type: "localeDropdown",
        //   position: "right",
        // },
        // { to: "/speakers", label: "講者介紹", position: "right" },
        // { to: "/agenda", label: "議程", position: "right" },
        // { to: "/workshop", label: "工作坊", position: "right" },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
        },
      },
    ],
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Noto+Serif+TC:wght@400;700&display=swap",
  ],
  scripts: ["https://www.youtube.com/iframe_api"],
  plugins: ["@docusaurus/plugin-ideal-image"],
};
