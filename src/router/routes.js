
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'info',
        name: 'info',
        component: () => import('pages/Info.vue'),
        meta: {
          backButton: true
        }
      },
      {
        path: 'form',
        name: 'formNote',
        component: () => import('pages/Form.vue'),
        props: true,
        meta: {
          backButton: true
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
