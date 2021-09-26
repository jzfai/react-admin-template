// export const constantRoutes = []
export const asyncRouters = [
    {
        path: '/dashboard',
        redirect: '/dashboard/mock-test',
        alwaysShow: false,
        meta: { title: 'use demo', icon: 'dashboard' },
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
        path: '/nest',
        //redirect: '/faiF/homeFS',
        alwaysShow: true,
        meta: { title: 'nest', icon: 'about' },
        children: [
            {
                path: 'menu1-1',
                name: 'menu1-1',
                meta: { title: 'menu1-1', icon: 'home' },
                component: () => import('@/views/nested/menu1/menu1-1')
            },
            {
                path: 'menu1-2',
                name: 'menu1-2',
                meta: { title: 'menu1-2', icon: 'home' },
                alwaysShow: false,
                children: [
                    {
                        path: 'menu1-2-1',
                        component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                        name: 'menu1-2-1',
                        hidden: false,
                        meta: { title: 'menu1-2-1', icon: 'home' }
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
