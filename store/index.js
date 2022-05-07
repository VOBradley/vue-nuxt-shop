export const state = () => ({
  nav: [
    {
      label: 'Поставщикам',
      link: '/',
    },
    {
      label: 'Поставки',
      link: '/',
    },
    {
      label: 'О нас',
      link: '/',
    },
  ],

  middlenav: [
    {
      label: 'Виды рыбы',
      link: '/fish',
    },
    {
      label: 'Каталог',
      dropdown: false,
      nodes: [
        {
          label: 'Снеки',
          link: '/',
        },
        {
          label: 'Чипсы',
          link: '/',
        },
        {
          label: 'Семга слабосолёная',
          link: '/',
        },
      ],
    },
    {
      label: 'Новинки и акции',
      link: '/',
    },
    {
      label: 'Доставка и оплата',
      link: '/',
    },
    {
      label: 'Статьи',
      link: '/',
    },
  ],

  auth: [
    {
      label: 'Личный кабинет',
      link: '',
    },
    {
      label: 'Вход',
      link: '',
    },
    {
      label: 'Регистрация',
      link: '',
    },
  ],

  morelink: [
    {
      label: 'Подписка',
      link: '/',
    },
    {
      label: 'Подписка',
      link: '/',
    },
    {
      label: 'Подписка',
      link: '/',
    },
    {
      label: 'Подписка',
      link: '/',
    },
  ],

  social: [
    {
      icon: '/img/icon-vk.svg',
      link: '/',
    },
    {
      icon: '/img/icon-instagram.svg',
      link: '/',
    },
    {
      icon: '/img/icon-youtube.svg',
      link: '/',
    },
    {
      icon: '/img/icon-whatsapp.svg',
      link: '/',
    },
  ],

  phone1: '996700000157',
  phone2: '996700000157',
  phone3: '996700000157',
})

export const getters = {
  nav: (state) => state.nav,
}
