import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../page/home-page'
import Music from '../page/music'
import AddBlog from '../page/home-page/add-blog'

const routes = [
  { path: '/', component: Home },
  { path: '/music', component: Music },
  { path: '/add-blog', component: AddBlog }
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
})
export default router
