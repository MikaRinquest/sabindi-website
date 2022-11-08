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
    margin-top: 11vh;
    margin-bottom: 75px;
}

.sectionTitle {
    text-align: center;
    padding-bottom: 50px;
    font-size: 3rem;
    color: var(--sabindi)
}

@media only screen and (max-width:300px) {
    .sectionTitle {
        font-size: 2rem;
    }
}
</style>