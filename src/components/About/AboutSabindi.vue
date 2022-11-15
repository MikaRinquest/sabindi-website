<template>
    <base-layout section-Title="About Sabindi" id="a-sabindi">
        <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in slides" :key="slide">
                <div class="carousel__item">
                    <h2>{{ slide.title }}</h2>
                    <p class="s-text">{{ slide.text }}</p>
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
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default {
    name: 'ExamplePagination',
    components: {
        Pagination,
        Carousel,
        Slide,
        Navigation,
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
                title: "About Sabindi",
                text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            },
            {
                id: "2",
                title: "Our Mission",
                text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            },
            {
                id: "3",
                title: "Our Vision",
                text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            },
            {
                id: "4",
                title: "Our Values",
                text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
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
/* Small phones */
@media only screen and (max-width:576px) {
    .s-text {
        width: 200px;
        word-break: break-all;
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