<template>
    <base-layout id="h-services" section-title="What We Offer">
        <!-- <div class="d-flex">
            <div class="col-7"></div>
            <div class="col-5">
                <div class="maintenance">
                    <h2>Maintenance</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat voluptatibus nesciunt
                        dolorum
                        rerum blanditiis sunt, perspiciatis quam eligendi sapiente adipisci, quibusdam vitae dicta. Quis
                        modi molestiae sapiente exercitationem eos!</p>
                    <router-link to="maintenance">
                        <button>Go</button>
                    </router-link>
                </div>
                <div class="real-estate">
                    <h2>Real Estate</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur quam impedit.
                        Molestiae, sequi. Repellat cupiditate est quia distinctio sequi nesciunt! Non deserunt rerum
                        illum
                        ad voluptatum repudiandae voluptas provident.</p>
                    <router-link to="real-estate">
                        <button>Go</button>
                    </router-link>
                </div>
            </div>
        </div> 
     </div> -->
        <div class="s-holder">
            <div class="maintenance col-md-5">
                <h3 class="text-center">Maintenance</h3>
                <img src="https://i.postimg.cc/MKGfPw5L/tool-icon-8066.png" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, illo. Tempore qui eos maiores!
                    Exercitationem consequatur dignissimos odit quasi, ipsa earum molestias facere voluptate vitae totam
                    temporibus voluptatum amet! Sint!</p>
                <router-link to="maintenance">
                    <button class="lm-button d-flex align-items-center">
                        <p class="learn-more">Learn more</p>
                    </button>
                </router-link>
            </div>
            <div class="real-estate col-md-5">
                <h3 class="text-center">Real Estate</h3>
                <img src="https://i.postimg.cc/Pfy8QJWZ/toppng-com-icon-home-png-home-icon-ios-1526x1461.png" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, illo. Tempore qui eos maiores!
                    Exercitationem consequatur dignissimos odit quasi, ipsa earum molestias facere voluptate vitae totam
                    temporibus voluptatum amet! Sint!</p>
                <router-link to="real-estate">
                    <button class="lm-button d-flex align-items-center">
                        <p class="learn-more">Learn more</p>
                    </button>
                </router-link>
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
#h-services {
    /* background-color: var(--test); */
    background-color: #FF9530;
    box-shadow: 5px 5px 10px #acacac,
        -5px -5px 10px #acacac;
}

.s-holder {
    display: inline-flex;
    justify-content: center;
}

.maintenance,
.real-estate {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.text-center {
    color: black;
    font-size: 45px;
}

h3+img {
    height: 70%;
}

img+p {
    padding-top: 5px;
    text-align: center;
    color: black;
    font-weight: 500;
    font-size: 20px;
}

.b-holder {
    display: flex;
    align-items: center;
    vertical-align: middle;
    margin-bottom: 0;
}

.lm-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 50px;
    border-radius: 5px;
    font-size: 20px;
    background-color: #FFFDD0;
    transition: 0.5s;
}

.lm-button:hover,
.lm-button:focus {
    box-shadow: inset 0 -3.25em 0 0 #f8f0c6;
}

.learn-more {
    margin-bottom: 0;
}

/* Small phones */
@media only screen and (max-width:576px) {
    .s-holder {
        flex-direction: column;
    }

    .maintenance,
    .real-estate {
        width: 100%;
    }

    .maintenance {
        padding-bottom: 25px;
    }

    .text-center {
        font-size: 35px;
    }

    h3+img {
        width: 55%
    }

    img+p {
        width: 100%;
        word-break: keep-all;
        word-wrap: break-word;
        font-size: 15px;
    }

    .lm-button {
        width: 100%;
    }

}


/* Bigger Phones */
@media only screen and (min-width:390px) {
    img+p {
        font-size: 23px;
    }
}

/* Tablets */
@media only screen and (min-width:768px) {}


/* Laptops */
@media only screen and (min-width:992px) {}

/* Desktops */
@media only screen and (min-width:1200px) {}
</style>