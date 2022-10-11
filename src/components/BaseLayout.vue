<template>
    <section>
        <h2>{{sectionTitle}}</h2>
        <slot></slot>
    </section>
</template>

<script>
export default {
    props: ['sectionTitle']
}
</script>

<style>

</style>