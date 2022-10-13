<template>
    <base-layout section-title="Testimonials" id="testimonials">
        <Carousel :autoplay="4000" :wrap-around="true">
            <Slide v-for="slide in slides" :key="slide.id">
                <div class="carousel__item">
                    <h2>{{slide.name}}</h2>
                    <p class="testimonial">{{slide.testimonial}}</p>
                </div>
            </Slide>

            <template #addons>
                <Pagination />
            </template>
        </Carousel>
    </base-layout>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
export default {
    data() {
        return {
            slides: [
                {
                    id: "1",
                    name: "Insert name",
                    testimonial: "Blah  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda animi ea alias aliquam explicabo tenetur ipsam, ratione sapiente sequi dolorum iste eligendi repellendus expedita! Corporis non officiis veritatis possimus."
                },
                {
                    id: "2",
                    name: "Insert name",
                    testimonial: "Blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda animi ea alias aliquam explicabo tenetur ipsam, ratione sapiente sequi dolorum iste eligendi repellendus expedita! Corporis non officiis veritatis possimus."
                },
                {
                    id: "3",
                    name: "Insert name",
                    testimonial: "Blah blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda animi ea alias aliquam explicabo tenetur ipsam, ratione sapiente sequi dolorum iste eligendi repellendus expedita! Corporis non officiis veritatis possimus."
                },
            ]
        }
    },
    name: 'Autoplay',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
};
</script>

<style scoped>
.name {
    text-align: center;
}

.testimonial {
    word-break: break-word;
}

.carousel-control-next {
    color: black
}

/* Small phones */
@media only screen and (max-width:576px) {
    .testimonial {
        width: 200px;
    }
}

/* Tablets */
@media only screen and (min-width:768px) {
    .testimonial {
        width: 500px;
    }
}

/* Desktops */
@media only screen and (min-width:1200px) {
    .testimonial {
        width: 700px;
    }
}
</style>