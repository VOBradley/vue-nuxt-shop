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
  ]
})

export const getters = {
  nav: (state) => state.nav,
}
