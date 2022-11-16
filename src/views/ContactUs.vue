<template>
    <div class=" holder d-flex justify-content-center">
        <Vacancies />
        <Contact />
    </div>
</template>

<script>
import Contact from "../components/Contact/Contact.vue"
import Vacancies from "../components/Contact/Vacancies.vue"
export default {
    components: {
        Contact,
        Vacancies,
    }
}
</script>

<style>
.holder {
    min-height: 90vh
}
</style>