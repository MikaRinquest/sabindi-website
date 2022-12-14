import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "aos/dist/aos.css";

import BaseLayout from "./components/BaseLayout.vue";
import WeTradeContactLayout from "./components/WeTrade-Contact-Layout.vue";
import SabindiContactLayout from "./components/Sabindi-Contact-Layout.vue";
import Contact from "./components/Contact.vue";
import NeoNav from "./components/Neo-Nav.vue";
import Footer from "./components/Footer.vue";

const app = createApp(App).use(router);
// .mount('#app')

app.component("base-layout", BaseLayout);
app.component("wt-contact-layout", WeTradeContactLayout);
app.component("s-contact-layout", SabindiContactLayout);
app.component("contact", Contact);
app.component("navbar", NeoNav);
app.component("bottom", Footer);

AOS.init();

router.isReady().then(() => {
  app.mount("#app");
});

//   Helps use app.component
