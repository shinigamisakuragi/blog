import Page from '../Page';

export default [
    {
        path: '/',
        name: '',
        component: Page,
        children: [
            {
                path: 'about',
                name: '关于我',
                component: () => import('../views/about.vue')
            },
            {
                path: 'source',
                name: '网站源码',
                component: () => import('../views/source-code.vue')
            },
        ]
    },
    {
        path: '/js',
        name: 'JavaScript',
        component: Page,
        children: [
            {
                path: 'debounce',
                name: 'JS中使用"弹跳（debounce）"机制优化事件监听',
                component: () => import('../views/js/debounce.vue')
            },
            {
                path: 'throttle',
                name: 'JS中使用"节流（throttle）"机制优化事件监听',
                component: () => import('../views/js/throttle.vue')
            },
            {
                path: 'async-await',
                name: 'JS中的异步函数（async&await）的简单例子🌰',
                component: () => import('../views/js/async-await.vue')
            },
        ]
    },
    {
        path: '/php',
        name: 'PHP',
        component: Page,
        children: [
            {
                path: 'php',
                name: 'php',
                component: () => import('../views/js/async-await.vue')
            },
        ]
    }
]