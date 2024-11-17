const routes = [
  {
    path: '/',
    component: () => import('src/views/layouts/EmptyLayout.vue'),
    meta: { requiresAuth: false },
    children: [
      {
        path: '/',
        component: () => import('src/views/layouts/MainLayout.vue'),
        redirect: to => { return '/about' },
        children: [
          {
            path: '/login',
            name: '/login',
            component: () => import('src/controllers/auth/SigninView.vue'),
            meta: { requiresAuth: false }
          },
          {
            path: '/register',
            name: '/register',
            component: () => import('src/controllers/auth/JoinView.vue'),
            meta: { requiresAuth: false }
          },
          {
            path: '/about',
            name: '/about',
            component: () => import('src/controllers/AboutController.vue'),
            meta: {
              breadcrumbName: 'About',
              breadcrumbParentName: '',
              requiresAuth: false,
            },
          },
          {
            path: '/lists/users',
            name: '/lists/users',
            component: () => import('src/controllers/lists/users/UserListController.vue'),
            meta: {
              breadcrumbName: 'Users',
              breadcrumbParentName: '',
              requiresAuth: false,
            },
          },
          {
            path: '/lists/users/:rId/:rName',
            name: '/lists/users/:rId/:rName',
            component: () => import('src/controllers/lists/users/UserReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/users',
              requiresAuth: false,
            },
          },
          {
            path: '/lists/product-brands',
            name: '/lists/product-brands',
            component: () => import('src/controllers/lists/product-brands/ProductBrandListController.vue'),
            meta: {
              breadcrumbName: 'ProductBrands',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/product-brands/:rId/:rName',
            name: '/lists/product-brands/:rId/:rName',
            component: () => import('src/controllers/lists/product-brands/ProductBrandReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/product-brands',
            },
          },
          {
            path: '/lists/product-categories',
            name: '/lists/product-categories',
            component: () => import('src/controllers/lists/product-categories/ProductCategoryListController.vue'),
            meta: {
              breadcrumbName: 'ProductCategories',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/product-categories/:rId/:rName',
            name: '/lists/product-categories/:rId/:rName',
            component: () => import('src/controllers/lists/product-categories/ProductCategoryReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/product-categories',
            },
          },
          {
            path: '/lists/products',
            name: '/lists/products',
            component: () => import('src/controllers/lists/products/ProductListController.vue'),
            meta: {
              breadcrumbName: 'Products',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/products/:rId/:rName',
            name: '/lists/products/:rId/:rName',
            component: () => import('src/controllers/lists/products/ProductReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/products',
            },
          },
        ],
        meta: { requiresAuth: false }
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/controllers/ErrorNotFound.vue'),
    meta: { requiresAuth: false }
  }
];

export default routes;
