<template>
    <section id="landing">
        <div class="landing-holder">
            <div class="text-holder col-5" data-aos="fade-up">
                <h1 class="welcome">Welcome to Sabindi Group Global</h1>
                <h3 class="slogan">Your <span class="slogan-inner">one stop property shop</span></h3>
            </div>
            <div class="col-3"></div>
            <div class="col-4" data-aos="fade-down">
                <img src="https://i.postimg.cc/PrN2qD0p/IMG-20221102-WA0073-edit-137035315313985.jpg"
                    alt="Superhero Pose" class="superhero">
            </div>
            <!-- Image will have an animation fading in -->
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
#landing {
    height: 100vh;
    background-image: url("https://i.postimg.cc/nrWY5hk0/sc.jpg");
    /* background-repeat: no-repeat; */
    background-size: cover;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.landing-holder {
    display: flex;
}

.welcome {
    color: white;
    text-shadow: 2px 2px 4px #000000;
}

.superhero {
    width: 100%;
}

.slogan {
    color: white;
    text-shadow: 2px 2px 4px #000000;
}

.slogan-inner {
    color: var(--test)
}
</style>