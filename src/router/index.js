import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

import Home from "../views/Home.vue"

const routes = [
    {path:"/",
name:"Home",
component:Home
}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router