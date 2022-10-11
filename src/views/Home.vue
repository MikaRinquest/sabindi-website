<template>
    <LandingNavbar />
    <Landing />
    <Services />
    <About />
    <Industries />
</template>

<script>
import Landing from "../components/Home/Landing.vue"
import LandingNavbar from "../components/Home/LandingNavbar.vue"
import Services from "../components/Home/Services.vue"
import About from "../components/Home/About.vue"
import Industries from "../components/Home/Industries.vue"

export default {
    components: {
        Landing,
        LandingNavbar,
        Services,
        About,
        Industries
    }
}
</script>

<style>

</style>