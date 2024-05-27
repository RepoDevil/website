import type { DefaultTheme } from 'vitepress'

import nav from './navigation/navbar'
import sidebar from './navigation/sidebar'

const themeConfig: DefaultTheme.Config = {
  logo: {
    src: '/img/logo-128px.png',
    width: 24,
    height: 24,
  },

  // Reference the nav object based on the locale
  nav: nav['/'], // Default to English navigation

  sidebar,

  outline: [2, 3],

  // Some icons from https://github.com/vuejs/vitepress/issues/1214
  socialLinks: [
    {
      icon: {
      svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitLab</title><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/></svg>'
    },
      link: 'https://gitlab.com/RepoDevil/Himitsu',
      ariaLabel: 'Project GitLab',
    },
    {
      icon: 'github',
      link: 'https://github.com/RepoDevil/Himitsu',
      ariaLabel: 'Project GitHub',
    },
    {
      icon: 'discord',
      link: 'https://discord.gg/vnrhgrt',
      ariaLabel: 'Discord Server',
    },
    // ... other social links
  ],

  footer: {
    message: '<a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Open-source Apache Licensed</a> <span class="divider">|</span> <a href="/privacy/">Privacy policy</a>',
    copyright: `Copyright © ${new Date().getFullYear()} Himitsu`,
  },

  editLink: {
    pattern: 'https://github.com/mihonapp/website/edit/main/website/src/:path',
    text: 'Help us improve this page',
  },

  lastUpdated: {
    text: 'Last updated',
    formatOptions: {
      forceLocale: true,
      dateStyle: 'long',
      timeStyle: 'short',
    },
  },

  search: {
    provider: 'algolia',
    options: {
      appId: 'IXX45N1P5C',
      apiKey: 'a7a819b0bd88bc7333c7f42d611ec04e',
      indexName: 'mihon',
    },
  },
}

export default themeConfig