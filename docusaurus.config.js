module.exports = {
  title: 'Live Helper chat',
  tagline: 'Open Source Live Support',
  url: 'https://doc.livehelperchat.com',
  baseUrl: '/',
  /*themes: ['@docusaurus/theme-search-algolia'],*/
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'LiveHelperChat', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.
    scripts: [
        /*{
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
            async: true,
            'data-ad-client' : "ca-pub-3487178404951359"
        }*/
    ],
    themeConfig: {
      algolia: {
          appId: 'DU0VWURKF8',
          apiKey: '9eb0af19c0a5e66add270c05de84f985',
          indexName: 'livehelperchat',
          contextualSearch: true,
          /*searchParameters: {
              facetFilters: ['language:en'],
          }*//*,
          searchParameters: {},
          algoliaOptions: {}, */// Optional, if provided by Algolia
      },
    navbar: {
      title: 'Live Helper Chat',
      logo: {
        alt: 'Live Helper Chat',
        src: 'img/logo.png',
      },
      items: [
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
      style: 'light',
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
  plugins: ["@docusaurus/plugin-ideal-image"/*,require.resolve('docusaurus-lunr-search')*/],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
          gtag: {
              trackingID: 'G-E8YM5FP73M',
              anonymizeIP: true,
          },
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
