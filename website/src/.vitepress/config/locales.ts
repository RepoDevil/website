
const locales = {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          {
             text : 'Get #{app_version}',
          items: [
            { text: 'Download', link: '/download/' },
            { text: 'Changelogs', link: '/changelogs/' },
          ],
        },
        { text: 'Docs', link: '/docs/guides/getting-started' },
        { text: 'News', link: '/news/' },
        ],
        sidebar: { 
          '/docs/': [
            {
            items: [
              { text: 'Download', link: '/download/' },
              { text: 'Changelogs', link: '/changelogs/' },
              { text: 'Forks', link: '/forks/' },
              { text: 'Contribute', link: '/docs/contribute' },
            ],      },
            {
              text: 'Guides',
              items: [
                { text: 'Introduction', link: '/docs/guides/getting-started' },
              ],
            },
          ],
        },
      },
    },
    es: {
      label: 'Español',
      lang: 'es',
      themeConfig: {
        nav: [
          {
            text: 'Obtener #{app_version}',
            items: [
              { text: 'Descargar', link: '/es/download/' },
              { text: 'Registro de cambios', link: '/es/changelogs/' },
            ],
          },
          { text: 'Docs', link: '/es/docs/guides/getting-started' },
          { text: 'Noticias', link: '/es/news/' },
        ],
        sidebar: {
          '/es/docs/': [
            {
              text: 'Guías',
              items: [
                { text: 'Introducción', link: '/es/docs/guides/getting-started' },
              ],
            },
          ],
        },
      },
    },
  af: {
    label: 'Afrikaans',
    lang: 'af',
    themeConfig: {
      nav: [
        {
          text: 'Kry #{app_version}',
          items: [
            { text: 'Aflaai', link: '/af/download/' },
            { text: 'Veranderinge', link: '/af/changelogs/' },
          ],
        },
        { text: 'Dokumentasie', link: '/af/docs/guides/getting-started' },
        { text: 'Nuus', link: '/af/news/' },
      ],
      sidebar: {
        '/af/docs/': [
          {
            items: [
              { text: 'Aflaai', link: '/af/download/' },
              { text: 'Veranderinge', link: '/af/changelogs/' },
              { text: 'Forks', link: '/af/forks/' },
              { text: 'Dra by', link: '/af/docs/contribute' },
            ],
          },
          {
            text: 'Gidse',
            items: [
              { text: 'Inleiding', link: '/af/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  ar: {
    label: 'Arabic',
    lang: 'ar',
    themeConfig: {
      nav: [
        {
          text: 'احصل على #{app_version}',
          items: [
            { text: 'تحميل', link: '/ar/download/' },
            { text: 'سجل التغييرات', link: '/ar/changelogs/' },
          ],
        },
        { text: 'الوثائق', link: '/ar/docs/guides/getting-started' },
        { text: 'الأخبار', link: '/ar/news/' },
      ],
      sidebar: {
        '/ar/docs/': [
          {
            items: [
              { text: 'تحميل', link: '/ar/download/' },
              { text: 'سجل التغييرات', link: '/ar/changelogs/' },
              { text: 'فوركس', link: '/ar/forks/' },
              { text: 'المساهمة', link: '/ar/docs/contribute' },
            ],
          },
          {
            text: 'الأدلة',
            items: [
              { text: 'مقدمة', link: '/ar/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  as: {
    label: 'Assamese',
    lang: 'as',
    themeConfig: {
      nav: [
        {
          text: 'পাওক #{app_version}',
          items: [
            { text: 'ডাউনলোড', link: '/as/download/' },
            { text: 'পৰিবৰ্তন পঞ্জী', link: '/as/changelogs/' },
          ],
        },
        { text: 'দলিলসমূহ', link: '/as/docs/guides/getting-started' },
        { text: 'সংবাদ', link: '/as/news/' },
      ],
      sidebar: {
        '/as/docs/': [
          {
            items: [
              { text: 'ডাউনলোড', link: '/as/download/' },
              { text: 'পৰিবৰ্তন পঞ্জী', link: '/as/changelogs/' },
              { text: 'ফৰ্কস', link: '/as/forks/' },
              { text: 'অংশগ্ৰহণ কৰক', link: '/as/docs/contribute' },
            ],
          },
          {
            text: 'গাইডসমূহ',
            items: [
              { text: 'প্ৰৱেশ', link: '/as/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  ca: {
    label: 'Catalan',
    lang: 'ca',
    themeConfig: {
      nav: [
        {
          text: 'Obtén #{app_version}',
          items: [
            { text: 'Descarregar', link: '/ca/download/' },
            { text: 'Canvis', link: '/ca/changelogs/' },
          ],
        },
        { text: 'Documentació', link: '/ca/docs/guides/getting-started' },
        { text: 'Notícies', link: '/ca/news/' },
      ],
      sidebar: {
        '/ca/docs/': [
          {
            items: [
              { text: 'Descarregar', link: '/ca/download/' },
              { text: 'Canvis', link: '/ca/changelogs/' },
              { text: 'Bifurcacions', link: '/ca/forks/' },
              { text: 'Contribuir', link: '/ca/docs/contribute' },
            ],
          },
          {
            text: 'Guies',
            items: [
              { text: 'Introducció', link: '/ca/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  'zh-CN': {
    label: 'Chinese Simplified',
    lang: 'zh-CN',
    themeConfig: {
      nav: [
        {
          text: '获取 #{app_version}',
          items: [
            { text: '下载', link: '/zh-CN/download/' },
            { text: '更新日志', link: '/zh-CN/changelogs/' },
          ],
        },
        { text: '文档', link: '/zh-CN/docs/guides/getting-started' },
        { text: '新闻', link: '/zh-CN/news/' },
      ],
      sidebar: {
        '/zh-CN/docs/': [
          {
            items: [
              { text: '下载', link: '/zh-CN/download/' },
              { text: '更新日志', link: '/zh-CN/changelogs/' },
              { text: '分叉', link: '/zh-CN/forks/' },
              { text: '贡献', link: '/zh-CN/docs/contribute' },
            ],
          },
          {
            text: '指南',
            items: [
              { text: '介绍', link: '/zh-CN/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  'zh-TW': {
    label: 'Chinese Traditional',
    lang: 'zh-TW',
    themeConfig: {
      nav: [
        {
          text: '取得 #{app_version}',
          items: [
            { text: '下載', link: '/zh-TW/download/' },
            { text: '更新日誌', link: '/zh-TW/changelogs/' },
          ],
        },
        { text: '文件', link: '/zh-TW/docs/guides/getting-started' },
        { text: '新聞', link: '/zh-TW/news/' },
      ],
      sidebar: {
        '/zh-TW/docs/': [
          {
            items: [
              { text: '下載', link: '/zh-TW/download/' },
              { text: '更新日誌', link: '/zh-TW/changelogs/' },
              { text: '分支', link: '/zh-TW/forks/' },
              { text: '貢獻', link: '/zh-TW/docs/contribute' },
            ],
          },
          {
            text: '指南',
            items: [
              { text: '介紹', link: '/zh-TW/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  cs: {
    label: 'Czech',
    lang: 'cs',
    themeConfig: {
      nav: [
        {
          text: 'Získat #{app_version}',
          items: [
            { text: 'Stáhnout', link: '/cs/download/' },
            { text: 'Změny', link: '/cs/changelogs/' },
          ],
        },
        { text: 'Dokumentace', link: '/cs/docs/guides/getting-started' },
        { text: 'Novinky', link: '/cs/news/' },
      ],
      sidebar: {
        '/cs/docs/': [
          {
            items: [
              { text: 'Stáhnout', link: '/cs/download/' },
              { text: 'Změny', link: '/cs/changelogs/' },
              { text: 'Forky', link:

 '/cs/forks/' },
              { text: 'Přispět', link: '/cs/docs/contribute' },
            ],
          },
          {
            text: 'Příručky',
            items: [
              { text: 'Úvod', link: '/cs/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  da: {
    label: 'Danish',
    lang: 'da',
    themeConfig: {
      nav: [
        {
          text: 'Få #{app_version}',
          items: [
            { text: 'Download', link: '/da/download/' },
            { text: 'Ændringslog', link: '/da/changelogs/' },
          ],
        },
        { text: 'Dokumentation', link: '/da/docs/guides/getting-started' },
        { text: 'Nyheder', link: '/da/news/' },
      ],
      sidebar: {
        '/da/docs/': [
          {
            items: [
              { text: 'Download', link: '/da/download/' },
              { text: 'Ændringslog', link: '/da/changelogs/' },
              { text: 'Forks', link: '/da/forks/' },
              { text: 'Bidrag', link: '/da/docs/contribute' },
            ],
          },
          {
            text: 'Vejledninger',
            items: [
              { text: 'Introduktion', link: '/da/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  nl: {
    label: 'Dutch',
    lang: 'nl',
    themeConfig: {
      nav: [
        {
          text: 'Krijg #{app_version}',
          items: [
            { text: 'Downloaden', link: '/nl/download/' },
            { text: 'Wijzigingen', link: '/nl/changelogs/' },
          ],
        },
        { text: 'Documentatie', link: '/nl/docs/guides/getting-started' },
        { text: 'Nieuws', link: '/nl/news/' },
      ],
      sidebar: {
        '/nl/docs/': [
          {
            items: [
              { text: 'Downloaden', link: '/nl/download/' },
              { text: 'Wijzigingen', link: '/nl/changelogs/' },
              { text: 'Forks', link: '/nl/forks/' },
              { text: 'Bijdragen', link: '/nl/docs/contribute' },
            ],
          },
          {
            text: 'Gidsen',
            items: [
              { text: 'Inleiding', link: '/nl/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  fi: {
    label: 'Finnish',
    lang: 'fi',
    themeConfig: {
      nav: [
        {
          text: 'Hanki #{app_version}',
          items: [
            { text: 'Lataa', link: '/fi/download/' },
            { text: 'Muutoslokit', link: '/fi/changelogs/' },
          ],
        },
        { text: 'Dokumentaatio', link: '/fi/docs/guides/getting-started' },
        { text: 'Uutiset', link: '/fi/news/' },
      ],
      sidebar: {
        '/fi/docs/': [
          {
            items: [
              { text: 'Lataa', link: '/fi/download/' },
              { text: 'Muutoslokit', link: '/fi/changelogs/' },
              { text: 'Haarukat', link: '/fi/forks/' },
              { text: 'Osallistu', link: '/fi/docs/contribute' },
            ],
          },
          {
            text: 'Oppaat',
            items: [
              { text: 'Johdanto', link: '/fi/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  fr: {
    label: 'French',
    lang: 'fr',
    themeConfig: {
      nav: [
        {
          text: 'Obtenez #{app_version}',
          items: [
            { text: 'Télécharger', link: '/fr/download/' },
            { text: 'Journal des modifications', link: '/fr/changelogs/' },
          ],
        },
        { text: 'Documentation', link: '/fr/docs/guides/getting-started' },
        { text: 'Actualités', link: '/fr/news/' },
      ],
      sidebar: {
        '/fr/docs/': [
          {
            items: [
              { text: 'Télécharger', link: '/fr/download/' },
              { text: 'Journal des modifications', link: '/fr/changelogs/' },
              { text: 'Forks', link: '/fr/forks/' },
              { text: 'Contribuer', link: '/fr/docs/contribute' },
            ],
          },
          {
            text: 'Guides',
            items: [
              { text: 'Introduction', link: '/fr/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  de: {
    label: 'German',
    lang: 'de',
    themeConfig: {
      nav: [
        {
          text: 'Holen Sie sich #{app_version}',
          items: [
            { text: 'Herunterladen', link: '/de/download/' },
            { text: 'Änderungsprotokolle', link: '/de/changelogs/' },
          ],
        },
        { text: 'Dokumentation', link: '/de/docs/guides/getting-started' },
        { text: 'Nachrichten', link: '/de/news/' },
      ],
      sidebar: {
        '/de/docs/': [
          {
            items: [
              { text: 'Herunterladen', link: '/de/download/' },
              { text: 'Änderungsprotokolle', link: '/de/changelogs/' },
              { text: 'Forks', link: '/de/forks/' },
              { text: 'Beitragen', link: '/de/docs/contribute' },
            ],
          },
          {
            text: 'Anleitungen',
            items: [
              { text: 'Einführung', link: '/de/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  el: {
    label: 'Greek',
    lang: 'el',
    themeConfig: {
      nav: [
        {
          text: 'Λάβετε #{app_version}',
          items: [
            { text: 'Κατεβάστε', link: '/el/download/' },
            { text: 'Αλλαγές', link: '/el/changelogs/' },
          ],
        },
        { text: 'Τεκμηρίωση', link: '/el/docs/guides/getting-started' },
        { text: 'Νέα', link: '/el/news/' },
      ],
      sidebar: {
        '/el/docs/': [
          {
            items: [
              { text: 'Κατεβάστε', link: '/el/download/' },
              { text: 'Αλλαγές', link: '/el/changelogs/' },
              { text: 'Forks', link: '/el/forks/' },
              { text: 'Συνεισφέρετε', link: '/el/docs/contribute' },
            ],
          },
          {
            text: 'Οδηγοί',
            items: [
              { text: 'Εισαγωγή', link: '/el/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  he: {
    label: 'Hebrew',
    lang: 'he',
    themeConfig: {
      nav: [
        {
          text: 'קבל #{app_version}',
          items: [
            { text: 'הורד', link: '/he/download/' },
            { text: 'יומני שינויים', link: '/he/changelogs/' },
          ],
        },
        { text: 'תיעוד', link: '/he/docs/guides/getting-started' },
        { text: 'חדשות', link: '/he/news/' },
      ],
      sidebar: {
        '/he/docs/': [
          {
            items: [
              { text: 'הורד', link: '/he/download/' },
              { text: 'יומני שינויים', link: '/he/changelogs/' },
              { text: 'Forks', link: '/he/forks/' },
              { text: 'תרומה', link: '/he/docs/contribute' },
            ],
          },
          {
            text: 'מדריכים',
            items: [
              { text: 'מבוא', link: '/he/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  hi: {
    label: 'Hindi',
    lang: 'hi',
    themeConfig: {
      nav: [
        {
          text: 'प्राप्त करें #{app_version}',
          items: [
            { text: 'डाउनलोड करें', link: '/hi/download/' },
            { text: 'परिवर्तन लॉग', link: '/hi/changelogs/' },
          ],
        },
        { text: 'दस्तावेज़', link: '/hi/docs/guides/getting-started' },
        { text: 'समाचार', link: '/hi/news/' },
      ],
      sidebar: {
        '/hi/docs/': [
          {
            items: [
              { text: 'डाउनलोड करें', link: '/hi/download/' },
              { text: 'परिवर्तन लॉग', link: '/hi/changelogs/' },
              { text: 'Forks', link: '/hi/forks/' },
              { text: 'योगदान करें', link: '/hi/docs/contribute' },
            ],
          },
          {
            text: 'मार्गदर्शिकाएँ',
            items: [
              { text: 'परिचय', link: '/hi/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  hu: {
    label: 'Hungarian',
    lang: 'hu',
    themeConfig: {
      nav: [
        {
          text: 'Szerezd meg #{app_version}',
          items: [
            { text: 'Letöltés', link: '/hu/download/' },
            { text: 'Változásnaplók', link: '/hu/changelogs/' },
          ],
        },
        { text: 'Dokumentáció', link: '/hu/docs/guides/getting-started' },
        { text: 'Hírek', link: '/hu/news/' },
      ],
      sidebar: {
        '/hu/docs/': [
          {
            items: [
              { text: 'Letöltés', link: '/hu/download/' },
              { text: 'Változásnaplók', link: '/hu/changelogs/' },
              { text: 'Forks', link: '/hu/forks/' },
              { text: 'Hozzájárulás', link: '/hu/docs/contribute' },
            ],
          },
          {
            text: 'Útmutatók',
            items: [
              { text: 'Bevezetés', link: '/hu/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  it: {
    label: 'Italian',
    lang: 'it',
    themeConfig: {
      nav: [
        {
          text: 'Ottieni #{app_version}',
          items: [
            { text: 'Scarica', link: '/it/download/' },
            { text: 'Modifiche', link: '/it/changelogs/' },
          ],
        },
        { text: 'Documentazione', link: '/it/docs/guides/getting-started' },
        { text: 'Notizie', link: '/it/news/' },
      ],
      sidebar: {
        '/it/docs/': [
          {
            items: [
              { text: 'Scarica', link: '/it/download/' },
              { text: 'Modifiche', link: '/it/changelogs/' },
              { text: 'Forks', link: '/it/forks/' },
              { text: 'Contribuisci', link: '/it/docs/contribute' },
            ],
          },
          {
            text: 'Guide',
            items: [
              { text: 'Introduzione', link: '/it/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  ja: {
    label: 'Japanese',
    lang: 'ja',
    themeConfig: {
      nav: [
        {
          text: '#{app_version} を取得',
          items: [
            { text: 'ダウンロード', link: '/ja/download/' },
            { text: '変更履歴', link: '/ja/changelogs/' },
          ],
        },
        { text: 'ドキュメント', link: '/ja/docs/guides/getting-started' },
        { text: 'ニュース', link: '/ja/news/' },
      ],
      sidebar: {
        '/ja/docs/': [
          {
            items: [
              { text: 'ダウンロード', link: '/ja/download/' },
              { text: '変更履歴', link: '/ja/changelogs/' },
              { text: 'フォーク', link: '/ja/forks/' },
              { text: '貢献する', link: '/ja/docs/contribute' },
            ],
          },
          {
            text: 'ガイド',
            items: [
              { text: 'イントロダクション', link: '/ja/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  ko: {
    label: 'Korean',
    lang: 'ko',
    themeConfig: {
      nav: [
        {
          text: '#{app_version} 받기',
          items: [
            { text: '다운로드', link: '/ko/download/' },
            { text: '변경 로그', link: '/ko/changelogs/' },
          ],
        },
        { text: '문서', link: '/ko/docs/guides/getting-started' },
        { text: '뉴스', link: '/ko/news/' },
      ],
      sidebar: {
        '/ko/docs/': [
          {
            items: [
              { text: '다운로드', link: '/ko/download/' },
              { text: '변경 로그', link: '/ko/changelogs/' },
              { text: '포크', link: '/ko/forks/' },
              { text: '기여하기', link: '/ko/docs/contribute' },
            ],
          },
          {
            text: '가이드',
            items: [
              { text: '소개', link: '/ko/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  no: {
    label: 'Norwegian',
    lang: 'no',
    themeConfig: {
      nav: [
        {
          text: 'Få #{app_version}',
          items: [
            { text: 'Last ned', link: '/no/download/' },
            { text: 'Endringslogg', link: '/no/changelogs/' },
          ],
        },
        { text: 'Dokumentasjon', link: '/no/docs/guides/getting-started' },
        { text: 'Nyheter', link: '/no/news/' },
      ],
      sidebar: {
        '/no/docs/': [
          {
            items: [
              { text: 'Last ned', link: '/no/download/' },
              { text: 'Endringslogg', link: '/no/changelogs/' },
              { text: 'Forks', link: '/no/forks/' },
              { text: 'Bidra', link: '/no/docs/contribute' },
            ],
          },
          {
            text: 'Guider',
            items: [
              { text: 'Introduksjon', link: '/no/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  pl: {
    label: 'Polish',
    lang: 'pl',
    themeConfig: {
      nav: [
        {
          text: 'Pobierz #{app_version}',
          items: [
            { text: 'Pobierz', link: '/pl/download/' },
            { text: 'Dzienniki zmian', link: '/pl/changelogs/' },
          ],
        },
        { text: 'Dokumentacja', link: '/pl/docs/guides/getting-started' },
        { text: 'Aktualności', link: '/pl/news/' },
      ],
      sidebar: {
        '/pl/docs/': [
          {
            items: [
              { text: 'Pobierz', link: '/pl/download/' },
              { text: 'Dzienniki zmian', link: '/pl/changelogs/' },
              { text: 'Forki', link: '/pl/forks/' },
              { text: 'Współpraca', link: '/pl/docs/contribute' },
            ],
          },
          {
            text: 'Przewodniki',
            items: [
              { text: 'Wprowadzenie', link: '/pl/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  pt: {
    label: 'Portuguese',
    lang: 'pt',
    themeConfig: {
      nav: [
        {
          text: 'Obter #{app_version}',
          items: [
            { text: 'Baixar', link: '/pt/download/' },
            { text: 'Registro de mudanças', link: '/pt/changelogs/' },
          ],
        },
        { text: 'Documentação', link: '/pt/docs/guides/getting-started' },
        { text: 'Notícias', link: '/pt/news/' },
      ],
      sidebar: {
        '/pt/docs/': [
          {
            items: [
              { text: 'Baixar', link: '/pt/download/' },
              { text: 'Registro de mudanças', link: '/pt/changelogs/' },
              { text: 'Forks', link: '/pt/forks/' },
              { text: 'Contribuir', link: '/pt/docs/contribute' },
            ],
          },
          {
            text: 'Guias',
            items: [
              { text: 'Introdução', link: '/pt/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  'pt-BR': {
    label: 'Portuguese, Brazilian',
    lang: 'pt-BR',
    themeConfig: {
      nav: [
        {
          text: 'Obter #{app_version}',
          items: [
            { text: 'Baixar', link: '/pt-BR/download/' },
            { text: 'Registro de mudanças', link: '/pt-BR/changelogs/' },
          ],
        },
        { text: 'Documentação', link: '/pt-BR/docs/guides/getting-started' },
        { text: 'Notícias',

 link: '/pt-BR/news/' },
      ],
      sidebar: {
        '/pt-BR/docs/': [
          {
            items: [
              { text: 'Baixar', link: '/pt-BR/download/' },
              { text: 'Registro de mudanças', link: '/pt-BR/changelogs/' },
              { text: 'Forks', link: '/pt-BR/forks/' },
              { text: 'Contribuir', link: '/pt-BR/docs/contribute' },
            ],
          },
          {
            text: 'Guias',
            items: [
              { text: 'Introdução', link: '/pt-BR/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  ro: {
    label: 'Romanian',
    lang: 'ro',
    themeConfig: {
      nav: [
        {
          text: 'Obțineți #{app_version}',
          items: [
            { text: 'Descarcă', link: '/ro/download/' },
            { text: 'Logări schimbări', link: '/ro/changelogs/' },
          ],
        },
        { text: 'Documentație', link: '/ro/docs/guides/getting-started' },
        { text: 'Știri', link: '/ro/news/' },
      ],
      sidebar: {
        '/ro/docs/': [
          {
            items: [
              { text: 'Descarcă', link: '/ro/download/' },
              { text: 'Logări schimbări', link: '/ro/changelogs/' },
              { text: 'Forks', link: '/ro/forks/' },
              { text: 'Contribuie', link: '/ro/docs/contribute' },
            ],
          },
          {
            text: 'Ghiduri',
            items: [
              { text: 'Introducere', link: '/ro/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  ru: {
    label: 'Russian',
    lang: 'ru',
    themeConfig: {
      nav: [
        {
          text: 'Получить #{app_version}',
          items: [
            { text: 'Загрузить', link: '/ru/download/' },
            { text: 'Журналы изменений', link: '/ru/changelogs/' },
          ],
        },
        { text: 'Документация', link: '/ru/docs/guides/getting-started' },
        { text: 'Новости', link: '/ru/news/' },
      ],
      sidebar: {
        '/ru/docs/': [
          {
            items: [
              { text: 'Загрузить', link: '/ru/download/' },
              { text: 'Журналы изменений', link: '/ru/changelogs/' },
              { text: 'Forks', link: '/ru/forks/' },
              { text: 'Внести вклад', link: '/ru/docs/contribute' },
            ],
          },
          {
            text: 'Руководства',
            items: [
              { text: 'Введение', link: '/ru/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  sk: {
    label: 'Slovak',
    lang: 'sk',
    themeConfig: {
      nav: [
        {
          text: 'Získať #{app_version}',
          items: [
            { text: 'Stiahnuť', link: '/sk/download/' },
            { text: 'Zmeny', link: '/sk/changelogs/' },
          ],
        },
        { text: 'Dokumentácia', link: '/sk/docs/guides/getting-started' },
        { text: 'Novinky', link: '/sk/news/' },
      ],
      sidebar: {
        '/sk/docs/': [
          {
            items: [
              { text: 'Stiahnuť', link: '/sk/download/' },
              { text: 'Zmeny', link: '/sk/changelogs/' },
              { text: 'Forks', link: '/sk/forks/' },
              { text: 'Prispieť', link: '/sk/docs/contribute' },
            ],
          },
          {
            text: 'Príručky',
            items: [
              { text: 'Úvod', link: '/sk/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  sl: {
    label: 'Slovenian',
    lang: 'sl',
    themeConfig: {
      nav: [
        {
          text: 'Dobi #{app_version}',
          items: [
            { text: 'Prenesi', link: '/sl/download/' },
            { text: 'Dnevnik sprememb', link: '/sl/changelogs/' },
          ],
        },
        { text: 'Dokumentacija', link: '/sl/docs/guides/getting-started' },
        { text: 'Novice', link: '/sl/news/' },
      ],
      sidebar: {
        '/sl/docs/': [
          {
            items: [
              { text: 'Prenesi', link: '/sl/download/' },
              { text: 'Dnevnik sprememb', link: '/sl/changelogs/' },
              { text: 'Forks', link: '/sl/forks/' },
              { text: 'Prispevajte', link: '/sl/docs/contribute' },
            ],
          },
          {
            text: 'Navodila',
            items: [
              { text: 'Uvod', link: '/sl/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  sr: {
    label: 'Serbian',
    lang: 'sr',
    themeConfig: {
      nav: [
        {
          text: 'Набавите #{app_version}',
          items: [
            { text: 'Преузимање', link: '/sr/download/' },
            { text: 'Дневници промена', link: '/sr/changelogs/' },
          ],
        },
        { text: 'Документација', link: '/sr/docs/guides/getting-started' },
        { text: 'Вести', link: '/sr/news/' },
      ],
      sidebar: {
        '/sr/docs/': [
          {
            items: [
              { text: 'Преузимање', link: '/sr/download/' },
              { text: 'Дневници промена', link: '/sr/changelogs/' },
              { text: 'Forks', link: '/sr/forks/' },
              { text: 'Доприноси', link: '/sr/docs/contribute' },
            ],
          },
          {
            text: 'Водичи',
            items: [
              { text: 'Увод', link: '/sr/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  sv: {
    label: 'Swedish',
    lang: 'sv',
    themeConfig: {
      nav: [
        {
          text: 'Få #{app_version}',
          items: [
            { text: 'Ladda ner', link: '/sv/download/' },
            { text: 'Ändringslogg', link: '/sv/changelogs/' },
          ],
        },
        { text: 'Dokumentation', link: '/sv/docs/guides/getting-started' },
        { text: 'Nyheter', link: '/sv/news/' },
      ],
      sidebar: {
        '/sv/docs/': [
          {
            items: [
              { text: 'Ladda ner', link: '/sv/download/' },
              { text: 'Ändringslogg', link: '/sv/changelogs/' },
              { text: 'Forks', link: '/sv/forks/' },
              { text: 'Bidra', link: '/sv/docs/contribute' },
            ],
          },
          {
            text: 'Guider',
            items: [
              { text: 'Introduktion', link: '/sv/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  tr: {
    label: 'Turkish',
    lang: 'tr',
    themeConfig: {
      nav: [
        {
          text: 'Al #{app_version}',
          items: [
            { text: 'İndir', link: '/tr/download/' },
            { text: 'Değişiklik Günlükleri', link: '/tr/changelogs/' },
          ],
        },
        { text: 'Belgeler', link: '/tr/docs/guides/getting-started' },
        { text: 'Haberler', link: '/tr/news/' },
      ],
      sidebar: {
        '/tr/docs/': [
          {
            items: [
              { text: 'İndir', link: '/tr/download/' },
              { text: 'Değişiklik Günlükleri', link: '/tr/changelogs/' },
              { text: 'Forks', link: '/tr/forks/' },
              { text: 'Katkıda Bulun', link: '/tr/docs/contribute' },
            ],
          },
          {
            text: 'Kılavuzlar',
            items: [
              { text: 'Giriş', link: '/tr/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  uk: {
    label: 'Ukrainian',
    lang: 'uk',
    themeConfig: {
      nav: [
        {
          text: 'Отримати #{app_version}',
          items: [
            { text: 'Завантажити', link: '/uk/download/' },
            { text: 'Журнали змін', link: '/uk/changelogs/' },
          ],
        },
        { text: 'Документація', link: '/uk/docs/guides/getting-started' },
        { text: 'Новини', link: '/uk/news/' },
      ],
      sidebar: {
        '/uk/docs/': [
          {
            items: [
              { text: 'Завантажити', link: '/uk/download/' },
              { text: 'Журнали змін', link: '/uk/changelogs/' },
              { text: 'Forks', link: '/uk/forks/' },
              { text: 'Внести вклад', link: '/uk/docs/contribute' },
            ],
          },
          {
            text: 'Керівництва',
            items: [
              { text: 'Вступ', link: '/uk/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
  vi: {
    label: 'Vietnamese',
    lang: 'vi',
    themeConfig: {
      nav: [
        {
          text: 'Nhận #{app_version}',
          items: [
            { text: 'Tải xuống', link: '/vi/download/' },
            { text: 'Nhật ký thay đổi', link: '/vi/changelogs/' },
          ],
        },
        { text: 'Tài liệu', link: '/vi/docs/guides/getting-started' },
        { text: 'Tin tức', link: '/vi/news/' },
      ],
      sidebar: {
        '/vi/docs/': [
          {
            items: [
              { text: 'Tải xuống', link: '/vi/download/' },
              { text: 'Nhật ký thay đổi', link: '/vi/changelogs/' },
              { text: 'Forks', link: '/vi/forks/' },
              { text: 'Đóng góp', link: '/vi/docs/contribute' },
            ],
          },
          {
            text: 'Hướng dẫn',
            items: [
              { text: 'Giới thiệu', link: '/vi/docs/guides/getting-started' },
            ],
          },
        ],
      },
    },
  },
};

export default locales;