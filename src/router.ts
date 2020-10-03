import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [{
    path: '/',
    component: Home
  },
    {
      path: '/doc',
      component: Doc,
      redirect: { path: 'switch' },
      children: [{
        path: '/switch',
        component: SwitchDemo
      }]
    }]
})

export default router
