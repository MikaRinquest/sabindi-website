<template>
    <AboutNavbar />
    <!-- <NeoNav /> -->
    <AboutSabindi />
    <Branches />
    <Clients />
    <!-- <TeamMeet /> -->
    <!-- <TimeLine /> -->
    <Contact />
</template>

<script>
import AboutNavbar from "../components/About/AboutNavbar.vue"
// import NeoNav from "../components/Neo-Nav.vue"
import AboutSabindi from "../components/About/AboutSabindi.vue"
import Clients from "../components/Home/Clients.vue"
import Branches from "../components/About/Branches.vue"
import Contact from "../components/Contact.vue"
// import TeamMeet from "../components/About/TeamMeet.vue"
// import Timeline from "../components/About/Timeline.vue"
export default {
    components: {
        AboutNavbar,
        // NeoNav,
        AboutSabindi,
        Clients,
        Branches,
        Contact
        // TeamMeet,
        // Timeline,
    }
}
</script>

<style scoped>

</style>