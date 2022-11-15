<template>
    <div class="content-holder" id="about">
        <div class="a-content">
            <div class="a-text">
                <h2 class="about-title">About Sabindi</h2>
                <p class="about-s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, obcaecati a!
                    Ipsa
                    eum dolorum
                    laborum quasi, nulla, culpa veniam soluta repudiandae vitae ipsam illo, cumque velit? Quidem id
                    maxime itaque?
                    Libero facilis in repellendus laudantium illum modi ipsa ut omnis. Itaque voluptate
                    exercitationem
                    in. Quasi saepe expedita praesentium aperiam odit ad fugiat necessitatibus! Suscipit deleniti
                    incidunt possimus, eos maiores labore?
                </p>
                <router-link to="About">
                    <h3 class="learn-more">Learn more about Sabindi.</h3>
                </router-link>
            </div>
            <div class="a-img"><img src="https://i.postimg.cc/L6ZQTfvd/Polish-20221104-112247759.png" alt=""
                    class="abdul"></div>
        </div>
    </div>

</template>

<script>
import BaseLayout from '../BaseLayout.vue'
export default {
    components: { BaseLayout },

}
</script>

<style scoped>
.content-holder {
    position: relative;
    height: 80vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: black;

}

.content-holder::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-image: url('https://i.postimg.cc/8cYR141R/hero-stance.jpg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
}

.a-content {
    width: 70%;
    align-self: center;
    display: inline-flex;
    align-items: center;
}

.about-title {
    text-align: center;
    text-decoration: underline;
    padding-bottom: 50px;
    font-size: 3rem;
    font-weight: 650;
    color: white;
}

.about-s {
    font-size: 20px;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    position: relative;
    text-align: center;
}

.learn-more {
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    transition: 0.3s;

}

.learn-more:hover {
    color: var(--sabindi);
    transition: 0.3s;
}

.a-img {
    width: 10%;
    margin-left: 5%;
}

.abdul {
    height: 500px;
}

/* Galaxy fold */
@media only screen and (max-width:300px) {
    .content-holder {
        height: 100vh;
    }

    .a-content {
        flex-direction: column;
        align-items: center;
        width: 85%;

    }

    .about-title {
        padding-bottom: 0px;
        font-size: 2rem;
    }

    .about-s {
        font-size: 15px;
    }

    .a-img {
        display: flex;
        width: 100%;
        justify-content: center;

    }

    .abdul {
        height: 200px;
    }
}

/* Small phone */
@media only screen and (min-width:300px) and (max-width:576px) {
    .content-holder {
        height: 100vh;
        width: 100vw;
    }

    .a-content {
        flex-direction: column;
        align-items: center;
        width: 85%;

    }

    .about-title {
        padding-bottom: 0px;
        font-size: 2rem;
    }

    .about-s {
        width: 300px;
        font-size: 17px;
    }

    .a-img {
        display: flex;
        width: 100%;
        justify-content: center;

    }

    .abdul {
        height: 300px;
    }
}

/* Bigger Phones */
@media only screen and (min-width:576px) {}

/* Tablets */
@media only screen and (min-width:768px) {}

/* Laptops */
@media only screen and (min-width:992px) {}

/* Desktops */
@media only screen and (min-width:1200px) {}
</style>
