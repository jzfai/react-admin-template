// export const constantRoutes = []
export const asyncRouters = [
  {
    path: '/dashboard',
    // redirect: '/dashboard/mock-test',
    alwaysShow: true,
    meta: { title: '写法示例', icon: 'dashboard' },
    children: [
      {
        path: 'mock-test',
        component: () => import('@/views/example/mock/MockTest'),
        name: 'MockTest',
        meta: { title: 'MockTest', icon: 'dashboard' }
      },
      {
        path: 'svg-icon',
        component: () => import('@/views/example/svg-icon/SvgIconDemo'),
        name: 'SvgIcon',
        hidden: false,
        meta: { title: 'SvgIcon', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/faiF',
    //redirect: '/faiF/homeFS',
    alwaysShow: true,
    meta: { title: 'test1', icon: 'about' },
    children: [
      {
        path: 'homeFS',
        component: () => import('@/views/Home'),
        name: 'homeF',
        meta: { title: 'home', icon: 'home' }
      },
      {
        path: 'aboutFS',
        name: 'AboutFS',
        meta: { title: 'About', icon: 'home' },
        children: [
          {
            path: 'homeFT',
            component: () => import('@/views/About'),
            name: 'homeFT',
            meta: { title: 'home', icon: 'home' }
          },
          {
            path: 'aboutFT',
            component: () => import('@/views/example/svg-icon/SvgIconDemo'),
            name: 'AboutFT',
            hidden: false,
            meta: { title: 'About', icon: 'home' }
          }
        ]
      }
    ]
  }
]
