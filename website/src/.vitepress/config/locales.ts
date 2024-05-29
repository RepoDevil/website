
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
    ar: {
      label: 'Arabic',
      lang: 'ar',
      themeConfig: {
        nav: [
          {
            text: 'احصل على #{app_version}',
            items: [
              { text: 'تحميل', link: '/تحميل/' },
              { text: 'سجل التغييرات', link: '/تغييرات/' },
            ],
          },
          { text: 'المستندات', link: '/مستندات/دلائل/البداية' },
          { text: 'الأخبار', link: '/أخبار/' },
        ],
        sidebar: {
          '/مستندات/': [
            {
              text: 'الدلائل',
              items: [
                { text: 'مقدمة', link: '/مستندات/دلائل/البداية' },
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
            text: '#{app_version} পাওঁ',
            items: [
              { text: 'ডাউনলোড', link: '/ডাউনলোড/' },
              { text: 'পরিবর্তনসূচী', link: '/পরিবর্তনসূচী/' },
            ],
          },
          { text: 'ডকুমেন্টেশন', link: '/ডকুমেন্টেশন/গাইডস/শুরু-হচ্ছে' },
          { text: 'নিউজ', link: '/নিউজ/' },
        ],
        sidebar: {
          '/ডকুমেন্টেশন/': [
            {
              text: 'গাইডসমূহ',
              items: [
                { text: 'পরিচিতি', link: '/ডকুমেন্টেশন/গাইডস/শুরু-হচ্ছে' },
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
              { text: 'Baixa', link: '/baixa/' },
              { text: 'Canvis', link: '/canvis/' },
            ],
          },
          { text: 'Documentació', link: '/documentacio/guies/inici' },
          { text: 'Notícies', link: '/noticies/' },
        ],
        sidebar: {
          '/documentacio/': [
            {
              text: 'Guies',
              items: [
                { text: 'Introducció', link: '/documentacio/guies/inici' },
              ],
            },
          ],
        },
      },
    },
    zhCN: {
      label: 'Chinese Simplified',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          {
            text: '获取 #{app_version}',
            items: [
              { text: '下载', link: '/下载/' },
              { text: '更新日志', link: '/更新日志/' },
            ],
          },
          { text: '文档', link: '/文档/指南/入门' },
          { text: '新闻', link: '/新闻/' },
        ],
        sidebar: {
          '/文档/': [
            {
              text: '指南',
              items: [
                { text: '介绍', link: '/文档/指南/入门' },
              ],
            },
          ],
        },
      },
    },
    zhTW: {
      label: 'Chinese Traditional',
      lang: 'zh-TW',
      themeConfig: {
        nav: [
          {
            text: '獲取 #{app_version}',
            items: [
              { text: '下載', link: '/下載/' },
              {  text: '更新日誌', link: '/更新日誌/' },
          ],
        },
        { text: '文檔', link: '/文檔/指南/入門' },
        { text: '新聞', link: '/新聞/' },
      ],
      sidebar: {
        '/文檔/': [
          {
            text: '指南',
            items: [
              { text: '介紹', link: '/文檔/指南/入門' },
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
            { text: 'Stáhnout', link: '/stáhnout/' },
            { text: 'Změny', link: '/změny/' },
          ],
        },
        { text: 'Dokumentace', link: '/dokumentace/průvodci/nástup' },
        { text: 'Novinky', link: '/novinky/' },
      ],
      sidebar: {
        '/dokumentace/': [
          {
            text: 'Průvodci',
            items: [
              { text: 'Úvod', link: '/dokumentace/průvodci/nástup' },
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
            { text: 'Download', link: '/download/' },
            { text: 'Ændringslog', link: '/ændringslog/' },
          ],
        },
        { text: 'Dokumentation', link: '/dokumentation/guider/komme-i-gang' },
        { text: 'Nyheder', link: '/nyheder/' },
      ],
      sidebar: {
        '/dokumentation/': [
          {
            text: 'Guider',
            items: [
              { text: 'Introduktion', link: '/dokumentation/guider/komme-i-gang' },
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
            { text: 'Download', link: '/downloaden/' },
            { text: 'Wijzigingen', link: '/wijzigingen/' },
          ],
        },
        { text: 'Documentatie', link: '/documentatie/gidsen/aan-de-slag' },
        { text: 'Nieuws', link: '/nieuws/' },
      ],
      sidebar: {
        '/documentatie/': [
          {
            text: 'Gidsen',
            items: [
              { text: 'Inleiding', link: '/documentatie/gidsen/aan-de-slag' },
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
            { text: 'Lataa', link: '/lataa/' },
            { text: 'Muutokset', link: '/muutokset/' },
          ],
        },
        { text: 'Dokumentaatio', link: '/dokumentaatio/oppaat/aloittaminen' },
        { text: 'Uutiset', link: '/uutiset/' },
      ],
      sidebar: {
        '/dokumentaatio/': [
          {
            text: 'Oppaat',
            items: [
              { text: 'Johdanto', link: '/dokumentaatio/oppaat/aloittaminen' },
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
          text: 'Obtenir #{app_version}',
          items: [
            { text: 'Télécharger', link: '/telecharger/' },
            { text: 'Journal des modifications', link: '/journal-des-modifications/' },
          ],
        },
        { text: 'Documentation', link: '/documentation/guides/premiers-pas' },
        { text: 'Actualités', link: '/actualites/' },
      ],
      sidebar: {
        '/documentation/': [
          {
            text: 'Guides',
            items: [
              { text: 'Introduction', link: '/documentation/guides/premiers-pas' },
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
          text: 'Hol #{app_version}',
          items: [
            { text: 'Herunterladen', link: '/herunterladen/' },
            { text: 'Änderungsprotokoll', link: '/änderungsprotokoll/' },
          ],
        },
        { text: 'Dokumentation', link: '/dokumentation/anleitungen/einstieg' },
        { text: 'Nachrichten', link: '/nachrichten/' },
      ],
      sidebar: {
        '/dokumentation/': [
          {
            text: 'Anleitungen',
            items: [
              { text: 'Einführung', link: '/dokumentation/anleitungen/einstieg' },
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
          text: 'Απόκτηση #{app_version}',
          items: [
            { text: 'Λήψη', link: '/ληψη/' },
            { text: 'Αλλαγές', link: '/αλλαγες/' },
          ],
        },
        { text: 'Τεκμηρίωση', link: '/τεκμηρίωση/οδηγοί/εισαγωγή' },
        { text: 'Νέα', link: '/νέα/' },
      ],
      sidebar: {
        '/τεκμηρίωση/': [
          {
            text: 'Οδηγοί',
            items: [
              { text: 'Εισαγωγή', link: '/τεκμηρίωση/οδηγοί/εισαγωγή' },
            ],
          },
        ],
      },
    },
  },
  he: {
    label : 'Hebrew',
    lang: 'he',
    themeConfig: {
      nav: [
        {
          text: 'קבל #{app_version}',
          items: [
            { text: 'הורד', link: '/הורדה/' },
            { text: 'יומן שינויים', link: '/יומן-שינויים/' },
          ],
        },
        { text: 'תיעוד', link: '/תיעוד/מדריכים/התחלה' },
        { text: 'חדשות', link: '/חדשות/' },
      ],
      sidebar: {
        '/תיעוד/': [
          {
            text: 'מדריכים',
            items: [
              { text: 'הקדמה', link: '/תיעוד/מדריכים/התחלה' },
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
          text: '#{app_version} प्राप्त करें',
          items: [
            { text: 'डाउनलोड करें', link: '/डाउनलोड/' },
            { text: 'परिवर्तन विवरण', link: '/परिवर्तन-विवरण/' },
          ],
        },
        { text: 'दस्तावेज़', link: '/दस्तावेज़/मार्गदर्शिकाएँ/प्रारंभ' },
        { text: 'समाचार', link: '/समाचार/' },
      ],
      sidebar: {
        '/दस्तावेज़/': [
          {
            text: 'मार्गदर्शिकाएँ',
            items: [
              { text: 'परिचय', link: '/दस्तावेज़/मार्गदर्शिकाएँ/प्रारंभ' },
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
          text: 'Szerezd be a(z) #{app_version}-t',
          items: [
            { text: 'Letöltés', link: '/letöltés/' },
            { text: 'Változási napló', link: '/változási-napló/' },
          ],
        },
        { text: 'Dokumentáció', link: '/dokumentáció/útmutatók/kezdés' },
        { text: 'Hírek', link: '/hírek/' },
      ],
      sidebar: {
        '/dokumentáció/': [
          {
            text: 'Útmutatók',
            items: [
              { text: 'Bevezetés', link: '/dokumentáció/útmutatók/kezdés' },
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
            { text: 'Scarica', link: '/scarica/' },
            { text: 'Registro delle modifiche', link: '/registro-delle-modifiche/' },
          ],
        },
        { text: 'Documentazione', link: '/documentazione/guide/iniziare' },
        { text: 'Notizie', link: '/notizie/' },
      ],
      sidebar: {
        '/documentazione/': [
          {
            text: 'Guide',
            items: [
              { text: 'Introduzione', link: '/documentazione/guide/iniziare' },
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
          text: '#{app_version} を入手',
          items: [
            { text: 'ダウンロード', link: '/ダウンロード/' },
            { text: '変更ログ', link: '/変更ログ/' },
          ],
        },
        { text: 'ドキュメント', link: '/ドキュメント/ガイド/はじめに' },
        { text: 'ニュース', link: '/ニュース/' },
      ],
      sidebar: {
        '/ドキュメント/': [
          {
            text: 'ガイド',
            items: [
              { text: 'イントロダクション', link: '/ドキュメント/ガイド/はじめに' },
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
            { text: '다운로드', link: '/다운로드/' },
            { text: '변경 로그', link: '/변경-로그/' },
          ],
        },
        { text: '문서', link: '/문서/가이드/시작하기' },
        { text: '뉴스', link: '/뉴스/' },
      ],
      sidebar: {
        '/문서/': [
          {
            text: '가이드',
            items: [
              { text: '소개', link: '/문서/가이드/시작하기' },
            ],
          },
        ],
      },
    },
  },
  nb: {
    label: 'Norwegian',
    lang: 'nb',
    themeConfig: {
      nav: [
        {
          text: 'Få #{app_version}',
          items: [
            { text: 'Nedlasting', link: '/nedlasting/' },
            { text: 'Endringslogg', link: '/endringslogg/' },
          ],
        },
        { text: 'Dokumentasjon', link: '/dokumentasjon/guider/komme-i-gang' },
        { text: 'Nyheter', link: '/nyheter/' },
      ],
      sidebar: {
        '/dokumentasjon/': [
          {
            text: 'Guider',
            items: [
              { text: 'Introduksjon', link: '/dokumentasjon/guider/komme-i-gang' },
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
            { text: 'Pobierz', link: '/pobierz/' },
            { text: 'Dziennik zmian', link: '/dziennik-zmian/' },
          ],
        },
        { text: 'Dokumentacja', link: '/dokumentacja/przewodniki/pierwsze-kroki' },
        { text: 'Wiadomości', link: '/wiadomości/' },
      ],
      sidebar: {
        '/dokumentacja/': [
          {
            text: 'Przewodniki',
            items: [
              { text: 'Wprowadzenie', link: '/dokumentacja/przewodniki/pierwsze-kroki' },
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
            { text: 'Download', link: '/download/' },
            { text: 'Registo de alterações', link: '/registo-de-alterações/' },
          ],
        },
        { text: 'Documentação', link: '/documentação/guias/introdução' },
        { text: 'Notícias', link: '/notícias/' },
      ],
      sidebar: {
        '/documentação/': [
          {
            text: 'Guias',
            items: [
              { text: 'Introdução', link: '/documentação/guias/introdução' },
            ],
          },
        ],
      },
    },
  },
  ptBR: {
    label: 'Portuguese, Brazilian',
    lang: 'pt-BR',
    themeConfig: {
      nav: [
        {
          text: 'Obter #{app_version}',
          items: [
            { text: 'Download', link: '/download/' },
            { text: 'Registro de alterações', link: '/registro-de-alterações/' },
          ],
        },
        { text: 'Documentação', link: '/documentação/guias/introdução' },
        { text: 'Notícias', link: '/notícias/' },
      ],
      sidebar: {
        '/documentação/': [
          {
            text: 'Guias',
            items: [
              { text: 'Introdução', link: '/documentação/guias/introdução' },
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
            { text: 'Descărcare', link: '/descărcare/' },
            { text: 'Jurnalul modificărilor', link: '/jurnalul-modificărilor/' },
          ],
        },
        { text: 'Documentație', link: '/documentație/ghiduri/introducere' },
        { text: 'Știri', link: '/știri/' },
      ],
      sidebar: {
        '/documentație/': [
          {
            text: 'Ghiduri',
            items: [
              { text: 'Introducere', link: '/documentație/ghiduri/introducere' },
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
            { text: 'Загрузка', link: '/загрузка/' },
            { text: 'История изменений', link: '/история-изменений/' },
          ],
        },
        { text: 'Документация', link: '/документация/руководства/начало' },
        { text: 'Новости', link: '/новости/' },
      ],
      sidebar: {
        '/документация/': [
          {
            text: 'Руководства',
            items: [
              { text: 'Введение', link: '/документация/руководства/начало' },
            ],
          },
        ],
      },
    },
  },
  sr: {
    label: 'Serbian (Cyrillic)',
    lang: 'sr',
    themeConfig: {
      nav: [
        {
          text: 'Добијте #{app_version}',
          items: [
            { text: 'Преузимање', link: '/преузимање/' },
            { text: 'Дневник измена', link: '/дневник-измена/' },
          ],
        },
        { text: 'Документација', link: '/документација/водичи/почетак' },
        { text: 'Вести', link: '/вести/' },
      ],
      sidebar: {
        '/документација/': [
          {
            text: 'Водичи',
            items: [
              { text: 'Увод', link: '/документација/водичи/почетак' },
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
            { text: 'Ladda ner', link: '/ladda-ner/' },
            { text: 'Ändringslogg', link: '/ändringslogg/' },
          ],
        },
        { text: 'Dokumentation', link: '/dokumentation/guider/komma-igång' },
        { text: 'Nyheter', link: '/nyheter/' },
      ],
      sidebar: {
        '/dokumentation/': [
          {
            text: 'Guider',
            items: [
              { text: 'Introduktion', link: '/dokumentation/guider/komma-igång' },
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
          text: '#{app_version} Edinin',
          items: [
            { text: 'İndir', link: '/indir/' },
            { text: 'Değişiklik Günlüğü', link: '/değişiklik-günlüğü/' },
          ],
        },
        { text: 'Belgeler', link: '/belgeler/kılavuzlar/başlarken' },
        { text: 'Haberler', link: '/haberler/' },
      ],
      sidebar: {
        '/belgeler/': [
          {
            text: 'Kılavuzlar',
            items: [
              { text: 'Giriş', link: '/beleler/kılavuzlar/başlarken' },
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
            { text: 'Завантажити', link: '/завантажити/' },
            { text: 'Журнал змін', link: '/журнал-змін/' },
          ],
        },
        { text: 'Документація', link: '/документація/посібники/початок' },
        { text: 'Новини', link: '/новини/' },
      ],
      sidebar: {
        '/документація/': [
          {
            text: 'Посібники',
            items: [
              { text: 'Вступ', link: '/документація/посібники/початок' },
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
            { text: 'Tải xuống', link: '/tải-xuống/' },
            { text: 'Nhật ký thay đổi', link: '/nhật-ký-thay-đổi/' },
          ],
        },
        { text: 'Tài liệu', link: '/tài-liệu/hướng-dẫn/bắt-đầu' },
        { text: 'Tin tức', link: '/tin-tức/' },
      ],
      sidebar: {
        '/tài-liệu/': [
          {
            text: 'Hướng dẫn',
            items: [
              { text: 'Giới thiệu', link: '/tài-liệu/hướng-dẫn/bắt-đầu' },
            ],
          },
        ],
      },
    },
  },
};

 export default locales;
  