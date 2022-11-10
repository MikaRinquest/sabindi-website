<template>
    <base-layout section-title="Testimonials" id="testimonials">
        <Carousel :autoplay="4000" :wrap-around="true">
            <Slide v-for="slide in slides" :key="slide.id">
                <div class="carousel__item">
                    <i class="bi bi-quote"></i>
                    <p class="testimonial">{{ slide.testimonial }}</p>
                    <h2>{{ slide.name }}</h2>
                    <i class="bi bi-quote"></i>
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
                    testimonial: " A pipe burst on my property in Chestnut Drive Hout Bay just before Christmas. We had no idea where it was. Specialist gas detectors came 3 times, and a plumbing company tried for days to find the problem to no avail. I was feeling hopeless by now.On Friday afternoon at 4PM, my broker Tanja from AGM Mapsure told me Abdul and his guys from Sabindi Construction were on their way and would stay until Abdul saw me happy.I thought “yea right” By now I had all but given up. Amazing! They worked methodically, logically, and like Trojans until 10: 30PM.I could not believe it! The following day(Saturday), they isolated the faulty line, ran new pipes, re- paved the driveway, cemented up wherever was needed, replaced the blocked pressure reducer ran diagnostics and just about everything else like a regiment of happy soldiers, and then gave me back my water WITH extra pressure to boot.They worked without a break until 7PM.I have never seen such swift and organised action.I have never experienced work ethic on this level.Abdul(35) was a naval officer for 15 years, and he runs his operation like a battleship.I have never been so impressed by anyone, or any fledgling company before.So, for the first time in a very long time, I can very confidently recommend Abdul and his company called Sabindi Construction."
                },
                {
                    id: "2",
                    name: "Samantha Kiley",
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

.testimonial {
    word-break: break-word;
}

.bi-quote {
    font-size: 30px;
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
        width: 1000px;
        font-size: 20px;
    }
}
</style>