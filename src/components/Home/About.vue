<template>
    <base-layout id="about" section-title="About Sabindi">
        <div class="about1">
            <div class="img1">
                <img src="" alt="Picture">
            </div>
            <div class="text1">
                <h2 class="h1">About Us</h2>
                <p class="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis cum nostrum
                    tempore
                    consectetur nemo rerum adipisci eaque aliquam quisquam atque temporibus, voluptas expedita doloribus
                    ratione qui mollitia voluptatum autem?</p>
            </div>
        </div>
        <div class="about2">
            <div class="text2">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis cum nostrum
                    tempore
                    consectetur nemo rerum adipisci eaque aliquam quisquam atque temporibus, voluptas expedita doloribus
                    ratione qui mollitia voluptatum autem?</p>
            </div>
            <div class="img2">
                <img src="" alt="Picture">
            </div>
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
#about {
    display: flex;
    flex-direction: column;
}

.about1 {
    display: flex;
    justify-content: space-around;
    width: 100vw;
}

.img1 {
    width: 40%;
    padding-left: 20px;
}

.text1 {
    width: 40%;
}

.h1 {
    text-align: end;
}

.p1 {
    text-align: start;
}

.about2 {
    display: flex;
    justify-content: space-around;
    width: 100vw;
}

.text2 {
    width: 40%;
    padding-top: 10px;
    padding-left: 20px;
}

.img2 {
    width: 40%;
    padding-top: 10px;
}
</style>