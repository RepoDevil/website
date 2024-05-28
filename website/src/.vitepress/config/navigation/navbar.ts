import type { DefaultTheme } from 'vitepress'

const nav: Record<string, DefaultTheme.NavItem[]> = {
  '/': [
    {
      text: 'Get #{app_version}',
      activeMatch: '^/*?(download|changelogs)/*?$',
      items: [
        { text: 'Download', link: '/download/' },
        { text: 'Changelogs', link: '/changelogs/' },
      ],
    },
    { text: 'Docs', link: '/docs/guides/getting-started', activeMatch: '/docs/' },
    { text: 'News', link: '/news/', activeMatch: '/news/' },
  ],
  '/es_ES/': [
    {
      text: 'Obtener #{app_version}',
      activeMatch: '^/es_ES/*?(download|changelogs)/*?$',
      items: [
        { text: 'Descargar', link: '/es_ES/download/' },
        { text: 'Cambios', link: '/es_ES/changelogs/' },
      ],
    },
    { text: 'Documentos', link: '/es_ES/docs/guides/getting-started', activeMatch: '/es_ES/docs/' },
    { text: 'Noticias', link: '/es_ES/news/', activeMatch: '/es_ES/news/' },
  ]
}

export default nav