export const constantRoute = [
  {
    path: '/login',
    //@ts-ignore
    component: () => import('@/views/login/index.vue'),
    name: 'login', // 命名路由
    meta: {
      title: '登录', // 菜单标题
      hidden: true,
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'home',
    redirect: '/home',
    meta: {
      title: 'layout',
      hidden: false,
      icon: 'Grid',
    },
    children: [
      {
        path: '/home',
        //@ts-ignore
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'screen',
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'Monitor',
    },
  },
  // 用户管理部分
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'), //? 依然要使用layout作为主骨架
    name: 'Acl',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'lock',
    },
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'Acl',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'Avatar',
        },
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
    ],
  },
  // 产品管理部分
  {
    path:"/product",
    component: () => import('@/layout/index.vue'), 
    name:"Product",
    meta:{
      title: '产品管理',
      hidden: false,
      icon:"DataAnalysis"
    },
    children:[
      {
        path:"/product/tradmark",
        component:() => import("@/views/product/trademark/index.vue"),
        name:"Trademark",
        meta:{
          title: '品牌管理',
          hidden: false,
          icon:"Star"
        },
      },
      {
        path:"/product/attr",
        component:() => import("@/views/product/attr/index.vue"),
        name:"Attr",
        meta:{
          title: '属性管理',
          hidden: false,
          icon:"Star"
        },
      },
      {
        path:"/product/spu",
        component:() => import("@/views/product/spu/index.vue"),
        name:"Spu",
        meta:{
          title: 'Spu管理',
          hidden: false,
          icon:"Star"
        },
      },
      {
        path:"/product/sku",
        component:() => import("@/views/product/sku/index.vue"),
        name:"Sku",
        meta:{
          title: 'Sku管理',
          hidden: false,
          icon:"Star"
        },
      }
    ]
  },
  {
    path: '/404',
    //@ts-ignore
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*', //匹配任意路由
    redirect: '/404',
    name: 'any',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
];
