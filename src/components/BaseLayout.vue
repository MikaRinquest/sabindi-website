<template>
    <section class="section">
        <h2 class="sectionTitle">{{ sectionTitle }}</h2>
        <slot></slot>
    </section>
</template>

<script>
export default {
    props: ['sectionTitle']
}
</script>

<style>
.section {
    /* height: 100%; */
    padding-top: 12vh;
    padding-bottom: 10px;
}

.sectionTitle {
    text-align: center;
    text-decoration: underline;
    padding-bottom: 50px;
    font-size: 3rem;
    font-weight: 650;
}

@media only screen and (max-width:300px) {
    .sectionTitle {
        font-size: 2rem;
    }
}
</style>