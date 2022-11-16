<template>
    <navbar></navbar>
    <TeamMeet />
    <!-- <AboutSabindi /> -->
    <Branches />
    <Clients />
    <!-- <TimeLine /> -->
    <contact></contact>
    <footer></footer>
</template>

<script>
// import AboutSabindi from "../components/About/AboutSabindi.vue"
import Clients from "../components/Home/Clients.vue"
import Branches from "../components/About/Branches.vue"
import TeamMeet from "../components/About/TeamMeet.vue"
// import Timeline from "../components/About/Timeline.vue"
export default {
    components: {

        // AboutSabindi,
        Clients,
        Branches,
        TeamMeet,
        // Timeline,
    }
}
</script>

<style scoped>

</style>