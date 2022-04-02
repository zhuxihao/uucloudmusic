import Vue from 'vue'
import VueRouter from 'vue-router'
import Mainpage from '../views/Mainpage.vue'
import Wecome from '../views/Wecome.vue'
import Findmusic from '../views/Findmusic.vue'
import Mymusic from '../views/Mymusic.vue'
import Concern from '../views/Concern.vue'
import Shop from '../views/Shop.vue'
import Musicpeople from '../views/Musicpeople.vue'
import tuijian from '../views/tuijian.vue'
import paihang from '../views/paihang.vue'
import gedan from '../views/gedan.vue'
import zhubo from '../views/zhubo.vue'
import geshou from '../views/geshou.vue'
import xindie from '../views/xindie.vue'
import Clauseserve from '../views/Clauseserve.vue'
import Clauseprivacy from '../views/Clauseprivacy.vue'
import Clausechild from '../views/Clausechild.vue'
import songlist from '../views/songlist.vue'


Vue.use(VueRouter)

mode:'hash'
const routes = [
  {
    path: '/',
    name: 'Mainpage',
    component: Mainpage,
    children:[
      {
        path: '/Findmusic',
        name: 'Findmusic',
        component: Findmusic,
        children:[
          {
            path: '/tuijian',
            name: 'tuijian',
            component: tuijian,
            meta: {
              keepAlive: true, 
          }
          },
          {
            path: '/paihang',
            name: 'paihang',
            component: paihang,
            meta: {
              keepAlive: true, 
          }
          },
          {
            path: '/gedan',
            name: 'gedan',
            component: gedan,
            meta: {
              keepAlive: true, 
          }
          },
          {
            path: '/zhubo',
            name: 'zhubo',
            component: zhubo,
            meta: {
              keepAlive: true, 
          }
          },
          {
            path: '/geshou',
            name: 'geshou',
            component: geshou,
            meta: {
              keepAlive: true, 
          }
          },
          {
            path: '/xindie',
            name: 'xindie',
            component: xindie,
            meta: {
              keepAlive: true, 
          }
          },
          {
            path:'/songlist',
            name:'/songlist',
            component:songlist,
            meta: {
              keepAlive: false, 
          }
          }
        ]
      },
      {
        path: '/Mymusic',
        name: 'Mymusic',
        component: Mymusic
      },
      {
        path: '/Concern',
        name: 'Concern',
        component: Concern
      },

      {
        path: '/Musicpeople',
        name: 'Musicpeople',
        component: Musicpeople
      }
    ]
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/Clauseserve',
    name: 'Clauseserve',
    component: Clauseserve
  },
  {
    path: '/Clauseprivacy',
    name: 'Clauseprivacy',
    component: Clauseprivacy
  },
  {
    path: '/Clausechild',
    name: 'Clausechild',
    component: Clausechild
  },
  {
    path: '/',
    name: 'Wecome',
    component: Wecome
  },

 
]

const router = new VueRouter({
  routes
})

export default router
