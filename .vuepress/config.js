module.exports = {
  title: 'K53 Guide PWA Docs',
  description: 'A straight forward guide on contributing to the K53 Guide PWA project 📃',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Introduction', link: '/introduction/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'K53 Guide App', link: 'https://www.k53guide.co.za' },
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/introduction/',
          '/guide/'
        ],
      },
      {
        title: 'Tutorials',
        collapsable: false,
        children: [
          '/tutorials/'
        ]
      }
    ],
    lastUpdated: true,
    repo: 'ShailenNaidoo/k53_learners_guide',
    docsRepo: 'ShailenNaidoo/k53_learners_guide_docs',
    editLinks: true,
    editLinkText: 'Found a bug? Help us fix it'
  },
}