import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    navbar: {
      download: 'Download',
      changelogs: 'Changelogs',
      docs: 'Docs',
      news: 'News',
    },
    sidebar: {
      download: 'Download',
      changelogs: 'Changelogs',
      forks: 'Forks',
      contribute: 'Contribute',
      faq: {
        general: 'General',
        library: 'Library',
        updates: 'Updates',
        smartUpdates: 'Smart updates',
        upcoming: 'Upcoming',
        browse: 'Browse',
        extensions: 'Extensions',
        localSource: 'Local source',
        downloads: 'Downloads',
        reader: 'Reader',
        settings: 'Settings',
        storage: 'Storage',
      },
      guides: {
        gettingStarted: 'Getting started',
        troubleshooting: 'Troubleshooting',
        commonIssues: 'Common issues',
        diagnosis: 'Diagnosis',
        sourceMigration: 'Source migration',
        backups: 'Backups',
        tracking: 'Tracking',
        categories: 'Categories',
        advancedEditing: 'Advanced editing',
        readerSettings: 'Reader settings',
      },
    },
  },
  es: {
    navbar: {
      download: 'Descargar',
      changelogs: 'Registro de cambios',
      docs: 'Documentos',
      news: 'Noticias',
    },
    sidebar: {
      download: 'Descargar',
      changelogs: 'Registro de cambios',
      forks: 'Bifurcaciones',
      contribute: 'Contribuir',
      faq: {
        general: 'General',
        library: 'Biblioteca',
        updates: 'Actualizaciones',
        smartUpdates: 'Actualizaciones inteligentes',
        upcoming: 'Próximamente',
        browse: 'Navegar',
        extensions: 'Extensiones',
        localSource: 'Fuente local',
        downloads: 'Descargas',
        reader: 'Lector',
        settings: 'Configuraciones',
        storage: 'Almacenamiento',
      },
      guides: {
        gettingStarted: 'Empezando',
        troubleshooting: 'Solución de problemas',
        commonIssues: 'Problemas comunes',
        diagnosis: 'Diagnóstico',
        sourceMigration: 'Migración de fuente',
        backups: 'Copias de seguridad',
        tracking: 'Seguimiento',
        categories: 'Categorías',
        advancedEditing: 'Edición avanzada',
        readerSettings: 'Configuraciones del lector',
      },
    },
  },
  // Add other languages here
}

const i18n = createI18n({
  locale: 'en',
  messages,
})

export default i18n