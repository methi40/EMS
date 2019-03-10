import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import CreateEvents from '@/components/Events/CreateEvents'
import Events from '@/components/Events/Events'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import Event from '@/components/Events/Event'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
   
    {
      path: '/Events',
      name: 'Events',
      component: Events
    },
     {
       path: '/CreateEvents',
       name: 'CreateEvents',
       component: CreateEvents
     },
      {
        path: '/Events/:id',
        name: 'Event',
        component: Event
      },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }, 
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ],
  mode: 'history'
})
