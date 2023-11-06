import { LuClock, LuHistory, LuHome, LuMonitorPlay, LuPlayCircle, LuPlaySquare, LuThumbsUp, LuUserSquare2 } from 'react-icons/lu'

export const menu = [
  {
    id: '1',
    category: 'menu',
    items: [
      {
        id: '1',
        label: 'Inicio',
        icon: LuHome,
        href: '/'
      },
      {
        id: '2',
        label: 'Shorts',
        icon: LuPlayCircle,
        href: '/shorts'
      },
      {
        id: '3',
        label: 'Suscripciones',
        icon: LuMonitorPlay,
        href: '/suscripciones'
      },
    ],
  },
  {
    id: '2',
    category: 'user',
    items: [
      {
        id: 1,
        label: 'Tú canal',
        icon: LuUserSquare2,
        href: '/perfil'
      },
      {
        id: 2,
        label: 'Historial',
        icon: LuHistory,
        href: '/historial'
      },

      {
        id: 3,
        label: 'Mis vídeos',
        icon: LuPlaySquare,
        href: '/playlist'
      },
      {
        id: 4,
        label: 'Ver más tarde',
        icon: LuClock,
        href: '/playlist'
      },
      {
        id: 5,
        label: 'Vídeos que me gus...',
        icon: LuThumbsUp,
        href: '/playlist'
      }
    ]
  },
  {
    id: '3',
    category: 'subscriptions',
    items: [
      {
        id: 1,
        label: 'Midudev',
        icon: "",
        image: 'https://pbs.twimg.com/media/E_HKHvGX0AQ7gfx.jpg',
        href: '/profile'
      },
      {
        id: 2,
        label: 'Toiler',
        icon: "",
        image: 'https://pbs.twimg.com/media/E_HKHvGX0AQ7gfx.jpg',
        href: '/profile'
      },
      {
        id: 3,
        label: 'JotreDev',
        icon: "",
        image: 'https://pbs.twimg.com/media/E_HKHvGX0AQ7gfx.jpg',
        href: '/profile'
      }
    ]
  },
  {
    id: '4',
    category: 'explore',
    items: [
      {
        id: 1,
        label: 'Tendencias',
        icon: <LuHistory />,
        href: '/trending'
      },
      {
        id: 2,
        label: 'Música',
        icon: <LuHistory />,
        href: '/music'
      },
      {
        id: 3,
        label: 'Películas',
        icon: <LuHistory />,
        href: '/movies'
      },
      {
        id: 4,
        label: 'Videojuegos',
        icon: <LuHistory />,
        href: '/games'
      },
      {
        id: 5,
        label: 'Noticias',
        icon: <LuHistory />,
        href: '/news'
      },
      {
        id: 6,
        label: 'Deportes',
        icon: <LuHistory />,
        href: '/sports'
      },
      {
        id: 7,
        label: 'Aprendizajes',
        icon: <LuHistory />,
        href: '/learning'
      },
      {
        id: 8,
        label: 'Podcasts',
        icon: <LuHistory />,
        href: '/podcasts'
      }

    ]
  },
  {
    id: '5',
    category: 'settings',
    items: [
      {
        id: 1,
        label: 'Configuración',
        icon: <LuHistory />,
        href: '/settings'
      },
      {
        id: 2,
        label: 'Ayuda',
        icon: <LuHistory />,
        href: '/help'
      },
      {
        id: 3,
        label: 'Enviar comentarios',
        icon: <LuHistory />,
        href: '/sendComments'
      }
    ]
  }
];
