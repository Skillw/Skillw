// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const light = require('prism-react-renderer/themes/github');
const dark = require('prism-react-renderer/themes/duotoneDark');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Skill World",
  tagline: "主打一个自由度",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://www.skillw.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Skillw', // Usually your GitHub org/user name.
  projectName: 'Skillw Projects', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'cn',
    locales: ['cn'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Skillw/Website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Skillw/Website/',
            blogSidebarTitle: 'All posts',
            blogSidebarCount: 'ALL',
          },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social_card.png",
      navbar: {
        title: "Skillw Projects",
        logo: {
          alt: "logo",
          src: "img/skillw.png",
        },
        items: [
          {
            label: "教程",
            sidebarId: "main",
            position: "left",
            type: "docSidebar",
          },
          // {
          //   label: "Pouvoir",
          //   sidebarId: "pouvoir",
          //   to: "/pouvoir",
          //   position: "left",
          // },
          { to: "/blog", label: "博客", position: "left" },
          {
            href: "https://github.com/Skillw/Website",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Javadoc",
                to: "https://doc.skillw.com/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "QQ 群",
                href: "https://qm.qq.com/cgi-bin/qm/qr?k=Qa0cBPaf8E7UIjzkvfyFfdFPB2GioYXv&jump_from=webapi&authKey=pv4APvYr458WvqZs1obthsdf1FacdkAm4vC8AMNU9TtJl6sd+g3JchdEzN+FFQdN",
              }
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/Skillw/Website",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Skillw Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: light,
        darkTheme: dark,
        additionalLanguages: ['java','yaml','kotlin'],
      },
    }),
};

module.exports = config;
