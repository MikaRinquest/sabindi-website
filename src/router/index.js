// import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
// import App from './App.vue'

import Home from "../views/Home.vue"
import RealEstate from "../views/RealEstate.vue"
import Maintenance from "../views/Maintenance.vue"

const routes = [
{
path:"/",
name:"Home",
component:Home
},


{
path:"/about",
name:"Home-About",
component:() => import("../components/Home/About.vue")
},

{
path:"/real-estate",
name:RealEstate,
component:RealEstate
},

{
path:"/maintenance",
name:Maintenance,
component:Maintenance
}

]



// createApp(rootComponent: App).user(plugin: router).mount(rootContainer:'#app')

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router