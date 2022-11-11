<template>
    <div class="dropdown" @mouseover="true" @mouseleave="false">
        <a href="#">{{ nav - name }}</a>
        <transition name="fade" apear>
            <div class="sub-menu" v-if="true">
            <div class="menu-item"></div>
        </transition>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>