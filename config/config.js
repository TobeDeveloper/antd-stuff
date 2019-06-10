export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
        ],
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: './Index'
            },
            {
                path: '/dashboard',
                routes: [
                    { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                    { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                    { path: '/dashboard/workspace', component: 'Dashboard/Workspace' }
                ]
            }
        ]
    }]
}