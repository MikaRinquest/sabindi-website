<template>
    <base-layout section-title="Testimonials" id="testimonials">
        <!-- <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <h2 class="name">Insert name here</h2>
                    <p class="testimonial">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum molestiae
                        expedita, ab maiores
                        numquam ipsa illo nobis quis at dicta voluptatibus dolore magni eveniet nemo accusamus sunt quia
                        illum. Accusantium.</p>
                </div>
                <div class="carousel-item">
                    <h2 class="name">Insert name here</h2>
                    <p class="testimonial">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum molestiae
                        expedita, ab maiores
                        numquam ipsa illo nobis quis at dicta voluptatibus dolore magni eveniet nemo accusamus sunt quia
                        illum. Accusantium.</p>
                </div>
                <div class="carousel-item">
                    <h2 class="name">Insert name here</h2>
                    <p class="testimonial">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum molestiae
                        expedita, ab maiores
                        numquam ipsa illo nobis quis at dicta voluptatibus dolore magni eveniet nemo accusamus sunt quia
                        illum. Accusantium.</p>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> -->
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
    width: 500px;
}

.carousel-control-next {
    color: black
}
</style>