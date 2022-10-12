<template>
    <base-layout id="h-services" section-title="What we offer">
        <div class="services">
            <!-- Add minor hover effects to the containers -->
            <router-link to="/maintenance">
                <div class="m-contain">
                    <h2 class="m-title">Maintenance</h2>
                </div>
            </router-link>
            <router-link to="/real-estate">
                <div class="r-contain">
                    <h2 class="r-title">Real Estate</h2>
                </div>
            </router-link>
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
.services {
    display: flex;
    height: 50vh;
    justify-content: space-evenly;
    margin-top: 15px;
    padding-bottom: 15px;
}

.m-contain {
    border: 2px solid black;
    width: 35vw;
    margin-right: 5vw;
    margin-left: 30px;
    text-align: center;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://i.postimg.cc/gc6wPdnT/plumber-g11c40faf8-1280.jpg");
    background-size: contain;
    box-shadow: 11px 11px 12px #aaaaaa,
        -11px -11px 12px #ffffff;
    transition: 0.3s;
}

.m-title {
    transition: 0.3s;
}

.m-contain:hover {
    /* font-size: 5rem; */
    width: 40vw;
    height: 45vh;
    box-shadow: 11px 11px 22px #5c5c5c,
        -11px -11px 22px #ffffff;
}

.m-contain:hover>.m-title {
    font-size: 3rem;
}

.r-contain {
    border: 2px solid black;
    width: 35vw;
    text-align: center;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://i.postimg.cc/KvS1GVTv/real-estate-agent-g5208c2924-1280.jpg");
    background-size: contain;
    box-shadow: 11px 11px 12px #aaaaaa,
        -11px -11px 12px #ffffff;
    transition: 0.3s;
}

.r-title {
    transition: 0.3s;
}

.r-contain:hover {

    width: 40vw;
    height: 45vh;
    box-shadow: 11px 11px 22px #5c5c5c,
        -11px -11px 22px #ffffff;
}

.r-contain:hover>.r-title {
    font-size: 3rem;
}
</style>