import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarMulti = {
  '/download/': defaultSidebar(),
  '/extensions/': defaultSidebar(),
  '/docs/': defaultSidebar(),
  '/forks/': defaultSidebar(),
  '/changelogs/': defaultSidebar(),
  '/news/': defaultSidebar(),
  '/sandbox/': defaultSidebar(),
  '/es_ES/download/': defaultSidebarEs(),
  '/es_ES/extensions/': defaultSidebarEs(),
  '/es_ES/docs/': defaultSidebarEs(),
  '/es_ES/forks/': defaultSidebarEs(),
  '/es_ES/changelogs/': defaultSidebarEs(),
  '/es_ES/news/': defaultSidebarEs(),
  '/es_ES/sandbox/': defaultSidebarEs(),
}

function defaultSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        { text: 'Download', link: '/download/' },
        { text: 'Changelogs', link: '/changelogs/' },
        { text: 'Forks', link: '/forks/' },
        { text: 'Contribute', link: '/docs/contribute' },
      ],
    },
    // ... other items
  ]
}

function defaultSidebarEs(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        { text: 'Descargar', link: '/es_ES/download/' },
        { text: 'Cambios', link: '/es_ES/changelogs/' },
        { text: 'Bifurcaciones', link: '/es_ES/forks/' },
        { text: 'Contribuir', link: '/es_ES/docs/contribute' },
      ],
    },
    // ... other items
  ]
}

export default sidebar