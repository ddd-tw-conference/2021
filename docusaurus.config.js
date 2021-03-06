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
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hant"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
      },
    },
  },
  themeConfig: {
    announcementBar: {
      id: "conference-2021-outdated",
      content: [
        "✨ This is the official site for conference 2021.",
        'Please checkout more info <a href="https://conference.ddd-tw.com/" rel="noopener noreferrer" target="_blank" style="color: #F012BE;">HERE</a>.',
      ].join(" "),
      backgroundColor: "#FFDC00",
      textColor: "#0074D9",
      isCloseable: false,
    },
    image: "img/ogImage.png",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: true,
      title: "DDD TW Conference 2021",
      logo: {
        alt: "DDD TW Conference 2021",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/schedule/workshops",
          label: "Workshops",
          position: "right",
        },
        {
          to: "/schedule/speeches",
          label: "Speeches",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://dddtaiwan.kktix.cc/events/dddesigntwconference2021",
          label: "JOIN NOW",
          position: "right",
          className: "join-now",
        },
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
    "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Noto+Serif+TC:wght@400;700&family=Wire+One&display=swap",
  ],
  scripts: ["https://www.youtube.com/iframe_api"],
  plugins: ["@docusaurus/plugin-ideal-image"],
};
