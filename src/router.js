import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('@/views/home/index.vue'),
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/news',
      name: 'news',
      components: {
        default: () => import('@/views/news/index.vue'),
        header: Header
      }
    },
    {
      path: '/coupon',
      name: 'coupon',
      components: {
        default: () => import('@/views/coupon/index.vue'),
        header: Header
      }
    },
    {
      path: '/course',
      name: 'course',
      components: {
        default: () => import('@/views/course/index.vue'),
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/early',
      name: 'early',
      components: {
        default: () => import('@/views/early/index.vue'),
        header: Header
      }
    },
    {
      path: '/family',
      name: 'family',
      components: {
        default: () => import('@/views/family/index.vue'),
        header: Header
      }
    },
    {
      path: '/healthy',
      name: 'healthy',
      components: {
        default: () => import('@/views/healthy/index.vue'),
        header: Header
      }
    },
    {
      path: '/living',
      name: 'living',
      components: {
        default: () => import('@/views/living/index.vue'),
        header: Header
      }
    },
    {
      path: '/prodoct',
      name: 'prodoct',
      components: {
        default: () => import('@/views/prodoct/index.vue'),
        header: Header
      }
    },
    {
      path: '/babyhealthy',
      name: 'babyhealthy',
      components: {
        default: () => import('@/views/babyhealthy/index.vue'),
        header: Header
      }
    },
    {
      path: '/recipe',
      name: 'recipe',
      components: {
        default: () => import('@/views/recipe/index.vue'),
        header: Header
      }
    },
    {
      path: '/listening',
      name: 'listening',
      components: {
        default: () => import('@/views/listening/index.vue'),
        header: Header
      }
    },
    {
      path: '/howeat',
      name: 'howeat',
      components: {
        default: () => import('@/views/howeat/index.vue'),
        header: Header
      }
    },
    {
      path: '/search',
      name: 'search',
      components: {
        default: () => import('@/views/search/index.vue'),
        header: Header
      }
    },
    {
      path: '/note',
      name: 'note',
      components: {
        default: () => import('@/views/note/index.vue'),
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/ziliao',
      name: 'ziliao',
      components: {
        default: () => import('@/views/ziliao/index.vue'),
        header: Header
      }
    },
    {
      path: '/firsttime',
      name: 'firsttime',
      components: {
        default: () => import('@/views/firsttime/index.vue'),
        header: Header
      }
    },
    {
      path: '/growth',
      name: 'growth',
      components: {
        default: () => import('@/views/growth/index.vue'),
        header: Header
      }
    },
    {
      path: '/photos',
      name: 'photos',
      components: {
        default: () => import('@/views/photos/index.vue'),
        header: Header
      },
      children: [
        {
          path: '',
          redirect: 'photos'
        },
        {
          path: 'photos',
          name: 'photos',
          component: () => import('@/components/photos/Photos.vue')
        },
        {
          path: 'zhaopian',
          name: 'zhaopian',
          component: () => import('@/components/photos/Zhaopian.vue')
        },
        {
          path: 'videochat',
          name: 'videochat',
          component: () => import('@/components/photos/Videochat.vue')
        }
      ]
    },
    {
      path: '/friends',
      name: 'friends',
      components: {
        default: () => import('@/views/friends/index.vue'),
        header: Header
      }
    },
    {
      path: '/community',
      name: 'community',
      components: {
        default: () => import('@/views/community/index.vue'),
        header: Header,
        footer: Footer
      },
      children: [
        {
          path: '',
          redirect: 'concern'
        },
        {
          path: 'concern',
          name: 'concern',
          component: () => import('@/components/communt/Concern.vue')
        },
        {
          path: 'hot',
          name: 'hot',
          component: () => import('@/components/communt/Hot.vue')
        }
      ]
    },
    {
      path: '/mine',
      name: 'mine',
      components: {
        default: () => import('@/views/mine/index.vue')
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('@/views/register/index.vue'),
        header: Header
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('@/views/login/index.vue'),
        header: Header
      }
    },
    {
      path: '/phonealbum', // 相册定制
      name: 'phonealbum',
      components: {
        default: () => import('@/views/phonealbum/index.vue'),
        header: Header
      }
    },
    {
      path: '/mycollection', // 我的收藏
      name: 'mycollection',
      components: {
        default: () => import('@/views/mycollection/index.vue'),
        header: Header
      }
    },
    {
      path: '/babyinformation', // 宝贝信息
      name: 'babyinformation',
      components: {
        default: () => import('@/views/babyinformation/index.vue'),
        header: Header
      }
    },
    {
      path: '/babyinfo', // 宝贝信息
      name: 'babyinfo',
      components: {
        default: () => import('@/views/babyinfo/index.vue'),
        header: Header
      }
    },
    {
      path: '/babyin', // 宝贝信息
      name: 'babyin',
      components: {
        default: () => import('@/views/babyin/index.vue'),
        header: Header
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/user/index.vue'),
        header: Header,
        footer: Footer
      }
    },
    {
      path: '/photopurchase', // 相册购买
      name: 'photopurchase',
      components: {
        default: () => import('@/views/photopurchase/index.vue'),
        header: Header
      }
    },
    {
      path: '/knowledge', // 育儿知识
      name: 'knowledge',
      components: {
        default: () => import('@/views/knowledge/index.vue'),
        header: Header
      }
    },
    {
      path: '/feedback', // 意见反馈
      name: 'feedback',
      components: {
        default: () => import('@/views/feedback/index.vue'),
        header: Header
      }
    },
    {
      path: '/settings', // 通用设置
      name: 'settings',
      components: {
        default: () => import('@/views/settings/index.vue'),
        header: Header
      }
    },
    {
      path: '/account', // 账号信息
      name: 'account',
      components: {
        default: () => import('@/views/account/index.vue'),
        header: Header
      }
    },
    {
      path: '/setpassword', // 重置密码
      name: 'setpassword',
      components: {
        default: () => import('@/views/setpassword/index.vue'),
        header: Header
      }
    },
    {
      path: '/myorder', // 我的订单
      name: 'myorder',
      components: {
        default: () => import('@/views/myorder/index.vue'),
        header: Header
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/user/index.vue'),
        header: Header,
        footer: Footer
      },
      children: [
        {
          path: '',
          redirect: 'nologin'
        },
        {
          path: 'nologin', // 前面不需要加 / 我们要的是 /user/nologin 加了就变成了 /nologin
          name: 'nologin',
          component: () => import('@/components/user/Nologin.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/components/user/Login.vue')
        }
      ]
    }
  ]
})

export default router
