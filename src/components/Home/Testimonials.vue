<template>
    <base-layout section-title="Testimonials" id="testimonials">
        <Carousel :autoplay="4000" :wrap-around="true">
            <Slide v-for="slide in slides" :key="slide.id">
                <div class="carousel__item">
                    <img :src="slide.img2" class="quote2" />
                    <p class="testimonial">{{ slide.testimonial }}</p>
                    <img :src="slide.img1" class="quote1" />
                    <h2>{{ slide.name }}</h2>
                    <h3>{{ slide.subtitle }}</h3>
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
                    name: "Mitch Dunn",
                    subtitle: "Client",
                    img1: "https://i.postimg.cc/d3fC35cm/quote1.png",
                    img2: "https://i.postimg.cc/zvvWq96G/quote2.png",
                    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus tempus ullamcorper. Ut suscipit, elit ut aliquam imperdiet, orci turpis malesuada risus, id interdum nisi ligula sit amet lacus. Donec cursus mi at laoreet sollicitudin. Ut non massa at ex sollicitudin fermentum eget vitae lorem. Vestibulum justo nisi, euismod ut."
                },
                {
                    id: "2",
                    name: "Samantha Kiley",
                    subtitle: "Client",
                    img1: "https://i.postimg.cc/d3fC35cm/quote1.png",
                    img2: "https://i.postimg.cc/zvvWq96G/quote2.png",
                    testimonial: "The guys were amazing! A tough morning with banks, new house..... All that nonsense, but once again SABINDI made it so much better😄😄"
                },
                // {
                //     id: "3",
                //     name: "Insert name",
                //     testimonial: "Blah blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda animi ea alias aliquam explicabo tenetur ipsam, ratione sapiente sequi dolorum iste eligendi repellendus expedita! Corporis non officiis veritatis possimus."
                // },
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

.carousel__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}

.testimonial {
    width: 90%;
    word-break: break-word;
    margin-top: 0.5rem;
    color: grey;
    font-style: italic;
}


.quote2 {
    align-self: flex-start;
}

.quote1 {
    align-self: flex-end;
}

.quote1,
.quote2 {
    width: 3%;
}

.carousel-control-next {
    color: black
}

/* Small phones */
@media only screen and (max-width:576px) {
    .testimonial {
        font-size: 20px;
    }
}

@media only screen and (min-width:576px) {
    .testimonial {
        font-size: 30px;
    }
}

/* Tablets */
@media only screen and (min-width:992px) {
    .testimonial {
        font-size: 20px;
    }
}

/* Desktops */
@media only screen and (min-width:1200px) {}
</style>