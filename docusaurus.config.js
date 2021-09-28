const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Rojo',
  tagline: 'Rojo enables Roblox developers to use professional-grade software engineering tools',
  url: 'https://rojo.space',
  baseUrl: '/rojo.space/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'unix-system', // Usually your GitHub org/user name.
  projectName: 'rojo.space', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/rojo-rbx/rojo.space/edit/main/',
          lastVersion: "6.x",
          versions: {
            "current": {
              "label": "7.x",
              "path": "7.x",
              "banner": "unreleased"
            },
            "6.x": {
              "label": "6.x",
              "banner": "none"
            },
            "0.5.x": {
              "label": "0.5.x",
              "banner": "unmaintained"
            },
            "0.4.x": {
              "label": "0.4.x",
              "banner": "unmaintained"
            }
          }
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/rojo-rbx/rojo.space/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Rojo Logo',
          src: 'img/logo-square-512.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
  
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/rojo-rbx/rojo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Roblox OSS Discord',
                href: 'https://discord.gg/wH5ncNS',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/rojo-rbx/rojo',
              },
            ],
          },
        ],
        copyright: `Last Updated ${new Date().toDateString()} with ❤️ by the Rojo Team. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
