// export const constantRoutes = []
export const asyncRouters = [
  {
    path: '/',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard'),
        meta: { title: 'Dashboard', icon: 'table' }
      }
    ]
  },
  {
    path: '/example',
    alwaysShow: false,
    redirect: '/example/table',
    meta: { title: 'Example', icon: 'example' },
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
    path: '/error-log',
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: { title: 'Error Log', icon: 'bug' }
      }
    ]
  },
  {
    path: '/nested',
    redirect: '/nested/menu1-1',
    alwaysShow: true,
    meta: { title: 'Nested', icon: 'nested' },
    children: [
      {
        path: 'menu1-1',
        name: 'menu1-1',
        meta: { title: 'menu1-1', icon: 'nested' },
        component: () => import('@/views/nested/menu1/menu1-1')
      },
      {
        path: 'menu1-2',
        name: 'menu1-2',
        meta: { title: 'menu1-2', icon: 'nested' },
        alwaysShow: false,
        children: [
          {
            path: 'menu1-2-1',
            component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
            name: 'menu1-2-1',
            hidden: false,
            meta: { title: 'menu1-2-1', icon: 'nested' }
          },
          {
            path: 'menu1-2-2',
            component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
            name: 'menu1-2-2',
            meta: { title: 'menu1-2-2', icon: 'home' }
          }
        ]
      }
    ]
  }
]
