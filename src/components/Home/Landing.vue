<template>
    <section id="landing">
        <div class="landing-holder">
            <h1>Welcome To...</h1>
            <img src="https://picsum.photos/200" alt="Sabindi Logo" class="sabindi-home" />
            <!-- Image will have an animation fading in -->
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
#landing {
    height: 100vh;
    background-image: url("https://i.postimg.cc/PrF24nsR/pineapple-gcd1922933-1920.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.landing-holder {
    display: flex;
    flex-direction: column;
}

.sabindi-home {
    text-align: center;
    padding-top: 10px;
}
</style>