<template>
    <LandingNavbar />
    <Landing />
    <Services />
</template>

<script>
import Landing from "../components/Landing.vue"
import LandingNavbar from "../components/LandingNavbar.vue"
import Services from "../components/Services.vue"

export default {
    components: {
        Landing,
        LandingNavbar,
        Services
    }
}
</script>

<style>

</style>