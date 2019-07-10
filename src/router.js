import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Film from './views/index.vue'
import Cinema from './views/Cinema.vue'
import Tw from './views/Tw.vue'
import User from './views/User.vue'
import List from './components/List.vue'
import  City from './components/city.vue'
import   Detial from './components/detail.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{name:'home'} 
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detial/:id',
      name: 'detial',
      component: Detial
    },

    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect:{name:'film'},
      children:[
        {
        path: '/home/film',
        name: 'film',
        component: Film,
        redirect:{ name:'list'},
        children:[
          {
            path:"/home/film/:type?",
            name: 'list',
            component: List
          }
        ]
        },
        {
          path: '/home/cinema',
          name: 'cinema',
          component: Cinema
        },
        {
          path: '/home/tw',
          name: 'tw',
          component: Tw
        },
        {
          path: '/home/user',
          name: 'user',
          component: User
        },
      ]
        
      
    },
   
    

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
