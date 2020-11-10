module.exports = {
  title: 'Live Helper chat',
  tagline: 'Open Source Live Support',
  url: 'https://doc.livehelperchat.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'LiveHelperChat', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.
    scripts: [
        {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
            async: true,
            'data-ad-client' : "ca-pub-3487178404951359"
        }
    ],
    themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-1221542-10',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
      algolia: {
          appId: 'BH4D9OD16A',
          apiKey: '4e69460f132c380e64701ff0b65e1de4',
          indexName: 'livehelperchat',
          algoliaOptions: {}, // Optional, if provided by Algolia
      },
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
            label: 'Forum',
            href: 'https://forum.livehelperchat.com'
        },
        {
            label: 'Commercial Support',
            href: 'https://livehelperchat.com/support-13c.html'
        },
        {
          href: 'https://github.com/LiveHelperChat',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: '',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Install guide',
              to: 'docs/install',
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
  plugins: ["@docusaurus/plugin-ideal-image"],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/LiveHelperChat/doc/edit/master/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
