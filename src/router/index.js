import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import ('../views/home/Home')
const Category = () => import ('../views/category/Category')
const Shopcart = () => import ('../views/shopcart/Shopcart')
const Profile = () => import ('../views/profile/Profile')
const Detail = () => import ('../views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  },
	{
		path: '/detail/:iid',
		component: Detail
	}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

//以下代码解决路由地址重复点击的报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router
