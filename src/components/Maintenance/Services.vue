<template>
    <div class="margin">
        <div class="n-margin">
            <div class="img-fit">
                <!-- <img src="https://i.postimg.cc/cLzfV7nm/IMG-20221108-140820.jpg" alt="Paris"> -->
            </div>
            <!-- <div class="bg-img"></div> -->
            <div></div>
            <h2 class="sectionTitle">Maintenance</h2>
            <div class="inspiration">
                <h2 class="sub-heading">The Challenges of maintenance</h2>
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam esse consequatur aliquid
                    laudantium
                    quia.</p>
                <ul>
                    <li class="list-item">Poor workmanship by previous builders.</li>
                    <li class="list-item"></li>
                    <li class="list-item"></li>
                    <li class="list-item"></li>
                    <li class="list-item">Emergency happening at night, but there is no one available to do
                        maintenance.</li>
                </ul>
            </div>
            <div class="inspiration">
                <h2 class="sub-heading">The Solution Sabindi is providing</h2>
                <p class="text"></p>
                <ul>
                    <li class="list-item">We do our work with military specialised precision, ensuring that you get
                        the quality work
                        you
                        deserve.
                    </li>
                    <li class="list-item"></li>
                    <li class="list-item"></li>
                    <li class="list-item"></li>
                    <li class="list-item">As soon as we get approval, Sabindi is on their way to check the damages.
                    </li>
                </ul>
            </div>
            <div class="inspiration">
                <h2 class="sub-heading">Benefits of choosing us</h2>
                <p class="text"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sectionTitle {
    text-align: start;
    margin-left: 5%;
    font-size: 4rem;
    color: var(--highlight);
}

.margin {
    width: 100%;
    background-color: lightgrey;
}

.n-margin {
    width: 90%;
    margin-left: 5%;
    background-color: white;
}

.img-fit[data-v-9bf65c48] {
    height: 500px;
    width: 90%;
    margin-left: 5%;
    background: url(https://i.postimg.cc/cLzfV7nm/IMG-20221108-140820.jpg);
    /* background-repeat: no-repeat; */
    background-size: cover;
    background-position: center;
}

.inspiration {
    margin-left: 5%;
    margin-right: 5%;
}

.list-item {
    font-size: 25px;
}

.text {
    font-size: 25px;
}

.sub-heading {
    color: var(--sabindi)
}

/* Small phones */
@media only screen and (max-width:350px) {
    .sectionTitle {
        font-size: 2rem;
        padding-bottom: 25px;
    }

    .text {
        font-size: 20px;
    }

    .list-item {
        font-size: 20px;
        margin-left: 10%;
    }

    .img-fit {
        height: 250px !important;
    }

}

/* Bigger Phones */
@media only screen and (min-width:350px) {
    .sectionTitle {
        font-size: 3rem;
        padding-bottom: 25px;
    }

    .text {
        font-size: 20px;
    }

    .list-item {
        font-size: 20px;
        margin-left: 10%;
    }

    .img-fit {
        height: 250px !important;
    }
}

/* Tablets */
@media only screen and (min-width:768px) {
    .sectionTitle {
        font-size: 4rem;
    }

    .sub-heading {
        font-size: 2.5rem;
    }

    .text {
        font-size: 25px;
    }

    .list-item {
        font-size: 25px;
    }
}

@media only screen and (min-width:900px) {
    .sub-heading {
        font-size: 3rem;
    }

    .text {
        font-size: 27px;
    }

    .list-item {
        font-size: 27px;
    }
}

/* Laptops */
@media only screen and (min-width:992px) {}

/* Desktops */
@media only screen and (min-width:1200px) {}
</style>