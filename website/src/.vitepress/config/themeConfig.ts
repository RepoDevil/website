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

  socialLinks: [
    {
      icon: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 380"><defs><style>.cls-1{fill:#171321;}</style></defs><g id="LOGO"><path class="cls-1" d="M282.83,170.73l-.27-.69-26.14-68.22a6.81,6.81,0,0,0-2.69-3.24,7,7,0,0,0-8,.43,7,7,0,0,0-2.32,3.52l-17.65,54H154.29l-17.65-54A6.86,6.86,0,0,0,134.32,99a7,7,0,0,0-8-.43,6.87,6.87,0,0,0-2.69,3.24L97.44,170l-.26.69a48.54,48.54,0,0,0,16.1,56.1l.09.07.24.17,39.82,29.82,19.7,14.91,12,9.06a8.07,8.07,0,0,0,9.76,0l12-9.06,19.7-14.91,40.06-30,.1-.08A48.56,48.56,0,0,0,282.83,170.73Z"/></g></svg>'
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