// import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
// import App from './App.vue'

import Home from "../views/Home.vue"

const routes = [
{
path:"/",
name:"Home",
component:Home
}
]



// createApp(rootComponent: App).user(plugin: router).mount(rootContainer:'#app')

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router