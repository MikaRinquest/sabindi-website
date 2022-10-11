<template>
    <Landing />
    <Portfolio />
    <Affiliations />
    <Contact />
</template>

<script>
import Landing from "../components/Maintenance/Landing.vue"
import Portfolio from "../components/Maintenance/Portfolio.vue"
import Affiliations from "../components/Maintenance/Affiliations.vue"
import Contact from "../components/Home/Contact.vue"
export default {
    components: {
        Landing,Portfolio,Affiliations,Contact
    }
}
</script>

<style scoped>

</style>