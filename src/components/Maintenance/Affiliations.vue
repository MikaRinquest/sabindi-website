<template>
  <base-layout section-title="Affiliations" id="affiliates">
    <Carousel :itemsToShow="4" :wrapAround="true" :transition="500">
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
  data() {
    return {
      slides: [
        {
          id: "1",
          img: "https://picsum.photos/200/300"
        },
        {
          id: "2",
          img: "https://picsum.photos/200/300"
        },
        {
          id: "3",
          img: "https://picsum.photos/200/300"
        },
        {
          id: "4",
          img: "https://picsum.photos/200/300"
        },
        {
          id: "5",
          img: "https://picsum.photos/200/300"
        },
      ]
    }
  },
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