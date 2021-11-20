// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const redirects = require("./redirects.js");

const versions = {
  current: {
    label: "v6",
    path: "v6",
    banner: "none",
  },
  "v7": {
    label: "v7",
    path: "v7",
    banner: "unreleased",
  },
  "v0.5": {
    label: "v0.5",
    path: "v0.5",
    banner: "unmaintained",
  },
};

const config = {
  title: "Rojo",
  tagline:
    "Rojo enables Roblox developers to use professional-grade software engineering tools",
  url: "https://rojo.space",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "rojo-rbx",
  projectName: "rojo.space",
  trailingSlash: true,

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          editUrl: "https://github.com/rojo-rbx/rojo.space/edit/master/",
          lastVersion: "current",
          remarkPlugins: [require("mdx-mermaid")],
          versions,
        },
        blog: {
          showReadingTime: false,
          editUrl: "https://github.com/rojo-rbx/rojo.space/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: "Rojo Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: "https://github.com/rojo-rbx/rojo",
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
              label: "Tutorial",
              to: "/docs",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Roblox OSS Discord",
              href: "https://discord.gg/wH5ncNS",
            },
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
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Rojo Developers. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  plugins: [require.resolve("docusaurus-lunr-search")],
};

config.plugins.push([
  "@docusaurus/plugin-client-redirects",
  redirects(versions.current.path),
]);

module.exports = config;
