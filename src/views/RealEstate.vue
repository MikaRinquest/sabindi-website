<template >
    <RealEstateNavbar />
    <WeTrade />
    <Listings />
    <Services />
    <contact-layout id="r-contact">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.438223504324!2d18.460073214951688!3d-33.981276032336055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc41cf9bdf894b%3A0x82532243c5af9fbd!2sWeTrade%20Property%20Southern%20Suburbs!5e0!3m2!1sen!2sza!4v1665495565984!5m2!1sen!2sza"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" class="iframe"></iframe>
    </contact-layout>
</template>
<script>
import RealEstateNavbar from "../components/Real Estate/RealEstateNavbar.vue"
import WeTrade from "../components/Real Estate/WeTrade.vue"
import Listings from "../components/Real Estate/Listings.vue"
import Services from "../components/Real Estate/Services.vue"
// import Contact from "../components/Real Estate/Contact.vue"
export default {
    components: {
        RealEstateNavbar,
        WeTrade,
        Services,
        Listings,
        // Contact
    }
}
</script>
<style >

</style>