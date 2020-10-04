function page(path) {
  return () => import( /* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [{
    path: '/',
    name: 'welcome',
    component: page('welcome.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: page('auth/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: page('auth/register.vue')
  },
  {
    path: '/password/reset',
    name: 'password.request',
    component: page('auth/password/email.vue')
  },
  {
    path: '/password/reset/:token',
    name: 'password.reset',
    component: page('auth/password/reset.vue')
  },
  {
    path: '/email/verify/:id',
    name: 'verification.verify',
    component: page('auth/verification/verify.vue')
  },
  {
    path: '/email/resend',
    name: 'verification.resend',
    component: page('auth/verification/resend.vue')
  },

  {
    path: '/home',
    name: 'home',
    component: page('home.vue')
  },
  {
    path: '/settings',
    component: page('settings/index.vue'),
    children: [{
        path: '',
        redirect: {
          name: 'settings.profile'
        }
      },
      {
        path: 'profile',
        name: 'settings.profile',
        component: page('settings/profile.vue')
      },
      {
        path: 'password',
        name: 'settings.password',
        component: page('settings/password.vue')
      }
    ]
  },
  //articles
  {
    path: '/articles',
    name: 'articles',
    component: page('articles/index.vue'),
  },
  {
    path: '/article/manager',
    name: 'article.manager',
    component: page('articles/manager.vue'),
  },
  {
    path: '/article/create',
    name: 'article.create',
    component: page('articles/create.vue'),
  },
  {
    path: '/article/edit/:id',
    name: 'article.edit',
    component: page('articles/edit.vue'),
  },
  {
    path: '/article/view/:url',
    name: 'article.view',
    component: page('articles/view.vue'),
  },
  //notes
  {
    path: '/notes',
    name: 'notes',
    component: page('notes/index.vue'),
  },
  {
    path: '/note/create',
    name: 'note.create',
    component: page('notes/create.vue'),
  },
  {
    path: '/note/edit/:id',
    name: 'note.edit',
    component: page('notes/edit.vue'),
  },
  {
    path: '/404',
    name: 'page.not.found',
    component: page('errors/404.vue')
  },
  {
    path: '*',
    component: page('errors/404.vue')
  }
]
