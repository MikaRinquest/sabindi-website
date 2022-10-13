<template>
    <LandingNavbar />
    <Landing />
    <Services />
    <About />
    <Industries />
    <Certifications />
    <Testimonials />
    <contact-layout id="h-contact"> <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.82419609174!2d18.51457869999999!3d-34.048380499999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc434c2a64ac1d%3A0xce5010552bd198ed!2sSabindi%20Group%20Global!5e0!3m2!1sen!2sza!4v1665473909584!5m2!1sen!2sza"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            class="iframe"></iframe>
    </contact-layout>
</template>

<script>
import Landing from "../components/Home/Landing.vue"
import LandingNavbar from "../components/Home/LandingNavbar.vue"
import Services from "../components/Home/Services.vue"
import About from "../components/Home/About.vue"
import Industries from "../components/Home/Industries.vue"
import Certifications from "../components/Home/Certifications.vue"
import Testimonials from "../components/Home/Testimonials.vue"

export default {
    components: {
        Landing,
        LandingNavbar,
        Services,
        About,
        Industries,
        Certifications,
        Testimonials,
    }
}
</script>

<style scoped>

</style>