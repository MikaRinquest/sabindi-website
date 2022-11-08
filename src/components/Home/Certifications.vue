<template>
    <base-layout section-title="Our Certifications" id="certification">
        <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in slides" :key="slide.id">
                <div class="carousel__item"><img :src="slide.img" alt="Certifications" /></div>
            </Slide>
            <template #addons>
                <Pagination />
                <Navigation />
            </template>
        </Carousel>
    </base-layout>
</template>
  
<script>
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default {
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
            wrapAround: "true",
            transition: "500",
        },
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 2,
                snapAlign: 'center',
                // From 900px the image sizes should be 400px, else make it 300
            },
            // 1024 and up
            1024: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        },
        slides: [
            {
                id: "1",
                img: "https://i.postimg.cc/gJDnSK35/nhbrc.jpg"
            },
            {
                id: "2",
                img: "https://i.postimg.cc/wBDtJzM9/ppra.png"
            },
            {
                id: "3",
                img: "https://i.postimg.cc/zvzgSGPn/bibc-logo-img.jpg"
            },
            {
                id: "4",
                img: "https://i.postimg.cc/FRgSLLGr/cidb-logo-about.jpg"
            },
            {
                id: "5",
                img: "https://i.postimg.cc/xTVZQrGN/iopsa.png"
            },
            {
                id: "6",
                img: "https://i.postimg.cc/JnbbcFsS/csd.jpg"
            },
        ],
    }),

    name: 'Autoplay',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
}
</script>
  
<style scoped>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>