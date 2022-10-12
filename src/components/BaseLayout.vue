<template>
    <section class="section">
        <h2 class="sectionTitle">{{sectionTitle}}</h2>
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
    margin-top: 75px;
    margin-bottom: 75px;
}

.sectionTitle {
    text-align: center;
    padding-bottom: 50px;
    font-size: 3rem;
    color: var(--sabindi)
}
</style>