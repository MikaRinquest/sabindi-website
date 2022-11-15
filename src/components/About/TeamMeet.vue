<template>
    <base-layout section-Title="Meet The Team" id="t-sabindi">
        <Carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
            <Slide v-for="slide in slides" :key="slide">
                <div class="carousel__item">
                    <div class="team-holder">
                        <div class="about-team">
                            <div class="col-md-3">
                                <img :src="slide.image">
                            </div>
                            <div class="about-holder col-md-8">
                                <h2>{{ slide.name }}</h2>
                                <p class="about">{{ slide.about }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Pagination />
                <Navigation />
            </template>
        </Carousel>
    </base-layout>
</template>

<script>
import { Carousel, Slide, Pagination, } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default {
    name: 'WrapAround',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        slides: [
            {
                id: "1",
                name: "Abdul Sayed",
                image: "https://picsum.photos/200",
                about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus tempus ullamcorper. Ut suscipit, elit ut aliquam imperdiet, orci turpis malesuada risus, id interdum nisi ligula sit amet lacus. Donec cursus mi at laoreet sollicitudin. Ut non massa at ex sollicitudin fermentum eget vitae lorem. Vestibulum justo nisi, euismod ut.",
            },
            {
                id: "2",
                name: "Joshua Hendricks",
                image: "https://picsum.photos/200",
                about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus tempus ullamcorper. Ut suscipit, elit ut aliquam imperdiet, orci turpis malesuada risus, id interdum nisi ligula sit amet lacus. Donec cursus mi at laoreet sollicitudin. Ut non massa at ex sollicitudin fermentum eget vitae lorem. Vestibulum justo nisi, euismod ut.",
            },
            {
                id: "3",
                name: "Abdush Shakoor Lakay",
                image: "https://picsum.photos/200",
                about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus tempus ullamcorper. Ut suscipit, elit ut aliquam imperdiet, orci turpis malesuada risus, id interdum nisi ligula sit amet lacus. Donec cursus mi at laoreet sollicitudin. Ut non massa at ex sollicitudin fermentum eget vitae lorem. Vestibulum justo nisi, euismod ut.",
            },
            {
                id: "3",
                name: "Enosh Elliott",
                image: "https://picsum.photos/200",
                about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus tempus ullamcorper. Ut suscipit, elit ut aliquam imperdiet, orci turpis malesuada risus, id interdum nisi ligula sit amet lacus. Donec cursus mi at laoreet sollicitudin. Ut non massa at ex sollicitudin fermentum eget vitae lorem. Vestibulum justo nisi, euismod ut.",
            },
        ],
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 1,
                snapAlign: 'start',
            },
        },
    }),
}
</script>

<style scoped>
.team-holder {
    width: 100%;
    display: flex;
    justify-content: center;
}

.about-team {
    display: flex;
    width: 70%;
}

.about-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about {
    width: 80%;
}



/* Small phones */
@media only screen and (max-width:576px) {
    .about-team {
        width: 100%;
        flex-direction: column;
    }

    .about {
        width: 95%;
        font-size: 15px;
    }

}

@media only screen and (min-width:360px) {
    .about {
        font-size: 20px;
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