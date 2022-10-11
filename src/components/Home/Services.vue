<template>
    <base-layout section-title="What we offer" id="services">
        <!-- Add minor hover effects to the containers -->
        <router-link to="/maintenance">
            <div class="m-contain">
                <h2>Maintenance</h2>
            </div>
        </router-link>
        <div class="r-contain">
            <h2>Real Estate</h2>
        </div>
    </base-layout>
</template>

<script>
import BaseLayout from '../BaseLayout.vue'
export default {
    components: { BaseLayout },

}
</script>

<style scoped>
#services {
    display: flex;
    margin-top: 15px;
    padding-bottom: 15px;
}

.m-contain {
    border: 2px solid black;
    width: 45vw;
    margin-right: 5vw;
    margin-left: 30px;
    text-align: center;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
}


.r-contain {
    border: 2px solid black;
    width: 45vw;
    text-align: center;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>