import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import store from './store/index'

import { createRouter, createWebHistory } from 'vue-router'
import Blog from './components/Blog.vue'
const BlogDetails = () => import('./components/BlogDetails.vue')
const BlogContent = () => import('./components/BlogContent.vue')
const About = () => import('./components/About.vue')


const routes = [
  { path: '/about', component: About },
  { path: '/', component: Home },
  { path: '/blog/:id', component: Blog, children: [
    { path: 'blogContent', component: BlogContent },
    { path: 'blogDetails', component: BlogDetails }
  ] },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(store)
app.use(router).mount('#app')
