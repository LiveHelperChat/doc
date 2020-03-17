module.exports = {
  title: 'Live Helper chat',
  tagline: 'Open Source Live Support',
  url: 'https://doc.livehelperchat.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'LiveHelperChat', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Live Helper Chat',
      logo: {
        alt: 'Live Helper Chat',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/install',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
            label: 'News',
            href: 'https://livehelperchat.com/news-5c.html'
        },
        {
          href: 'https://github.com/LiveHelperChat',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: '',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://forum.livehelperchat.com',
            }
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Site',
              href: 'https://livehelperchat.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/LiveHelperChat',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/livehelperchat',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCW-_0mDY01cMbLXrTiDiEMA',
            },
          {
              label: 'Facebook',
              href: 'https://www.facebook.com/LiveHelperChat/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Live Helper Chat, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
