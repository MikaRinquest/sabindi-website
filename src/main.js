import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import BaseLayout from './components/BaseLayout.vue'


const app = createApp(App)
.use(router)
// .mount('#app')

app.component("base-layout",BaseLayout)

router.isReady().then(() => {
    app.mount('#app');
  });
//   Helps use app.component