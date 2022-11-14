<template>
    <section id="landing">
        <div class="landing-holder">
            <div class="text-holder col-5" data-aos="fade-right">
                <h1 class="welcome">Welcome to Sabindi Group Global</h1>
                <h3 class="slogan">Your <span class="slogan-inner">one stop property shop</span></h3>
            </div>
            <div class="col-2"></div>
            <div class="s-hold col-5" data-aos="fade-left">
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

@media only screen and (max-width:350px) {
    .landing-holder {
        flex-direction: column;
        align-items: center;
    }

    .text-holder {
        width: 100%;
    }

    .welcome,
    .slogan {
        text-align: center;
    }

    .s-hold {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .superhero {
        width: 90%;
    }
}

@media only screen and (min-width:350px) and (max-width: 576px) {
    .landing-holder {
        flex-direction: column;
        align-items: center;
    }

    .text-holder {
        width: 100%;
    }

    .welcome,
    .slogan {
        text-align: center;
    }

    .welcome {
        font-size: 30px;
    }

    .slogan {
        font-size: 25px;
    }

    .s-hold {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .superhero {
        width: 90%;
    }
}

@media only screen and (min-width:576px) and (max-width:768px) {
    .superhero {
        width: 100%;
        height: 60%;
    }
}

/* Tablets */
@media only screen and (min-width:768px) {}

/* Laptops */
@media only screen and (min-width:992px) {}

/* Desktops */
@media only screen and (min-width:1200px) {}
</style>