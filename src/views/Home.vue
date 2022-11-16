<template>
    <Landing />
    <About />
    <Services />
    <Clients />
    <Certifications />
    <Testimonials />
    <contact></contact>
</template>

<script>
import Landing from "../components/Home/Landing.vue"
import Services from "../components/Home/Services.vue"
import About from "../components/Home/About.vue"
import Clients from "../components/Home/Clients.vue"
import Certifications from "../components/Home/Certifications.vue"
import Testimonials from "../components/Home/Testimonials.vue"

export default {
    components: {
        Landing,
        Services,
        About,
        Clients,
        Certifications,
        Testimonials,
    }
}
</script>

<style scoped>
#clients {
    background-color: #f5f5f5;
    margin-top: 1vh;
}
</style>