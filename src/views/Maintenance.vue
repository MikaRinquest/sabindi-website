<template>
    <MaintenanceNavbar />
    <Services />
    <!-- <Portfolio />
    <Affiliations /> -->
    <Contact />
</template>

<script>
import MaintenanceNavbar from "../components/Maintenance/MaintenanceNavbar.vue"
import Services from "../components/Maintenance/Services.vue"
// import Portfolio from "../components/Maintenance/Portfolio.vue"
// import Affiliations from "../components/Maintenance/Affiliations.vue"
import Contact from "../components/Contact.vue"
export default {
    components: {
        MaintenanceNavbar,
        Services,
        // Portfolio,
        // Affiliations,
        Contact
    }
}
</script>

<style scoped>

</style>