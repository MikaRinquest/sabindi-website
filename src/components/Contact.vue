<template>
    <base-layout sectionTitle="Contact Us">
        <div class="m-contact d-flex justify-content-center">
            <div class="card d-flex ">
                <div class="d-flex flex-row">
                    <div class="capeTown col-md-6">
                        <div>
                            <h3 class="city">Cape Town</h3>
                        </div>
                        <div class="address ">
                            <div class="icon"><i class="bi bi-map-fill"></i></div>
                            <div>
                                <a class="tag" href="https://goo.gl/maps/zfhF5sFkKw4tzeix8" target="_blank">
                                    <p class="text">Zeekoevlei, Grassy Park</p>
                                </a>
                            </div>
                        </div>
                        <div class="email ">
                            <div class="icon"><i class="bi bi-envelope"></i></div>
                            <div>
                                <a class="tag" href="mailto:enquiries@sabindi.co.za">
                                    <p class="text">enquiries@sabindi.co.za</p>
                                </a>
                            </div>
                        </div>
                        <div class="phone ">
                            <div class="icon"><i class="bi bi-telephone-fill"></i></div>
                            <div>
                                <a class="tag" href="https://wa.me/0876559555" target="_blank">
                                    <p class="text">087 655 9555</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="centurion col-md-6">
                        <div>
                            <h3 class="city">Johannesburg</h3>
                        </div>
                        <div class="address ">
                            <div class="icon"><i class="bi bi-map-fill"></i></div>
                            <div>
                                <p class="text">Valhalla, Centurion</p>
                            </div>
                        </div>
                        <div class="email ">
                            <div class="icon"><i class="bi bi-envelope"></i></div>
                            <div>
                                <p class="text">info@sabindi.co.za</p>
                            </div>
                        </div>
                        <div class="phone ">
                            <div class="icon"><i class="bi bi-telephone-fill"></i></div>
                            <div>
                                <p class="text">111 222 3333</p>
                            </div>
                        </div>
                    </div>
                </div>
                <router-link to="contact-us" class="align-self-center">
                    <button>Send an email</button>
                </router-link>
            </div>
        </div>
        <div class="s-contact-holder">
            <div class="s-contact d-flex flex-column align-items-center">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-capeTown" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">Cape Town</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-centurion" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">Centurion</button>
                    </li>

                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-capeTown" role="tabpanel"
                        aria-labelledby="pills-home-tab" tabindex="0">

                        <div class="capeTown col-md-6">
                            <div>
                                <h3 class="city">Cape Town</h3>
                            </div>
                            <div class="address ">
                                <div class="icon"><i class="bi bi-map-fill"></i></div>
                                <div>
                                    <a class="tag" href="https://goo.gl/maps/zfhF5sFkKw4tzeix8" target="_blank">
                                        <p class="text">Zeekoevlei, Grassy Park</p>
                                    </a>
                                </div>
                            </div>
                            <div class="email ">
                                <div class="icon"><i class="bi bi-envelope"></i></div>
                                <div>
                                    <a class="tag" href="mailto:enquiries@sabindi.co.za">
                                        <p class="text">enquiries@sabindi.co.za</p>
                                    </a>
                                </div>
                            </div>
                            <div class="phone ">
                                <div class="icon"><i class="bi bi-telephone-fill"></i></div>
                                <div>
                                    <a class="tag" href="https://wa.me/0876559555" target="_blank">
                                        <p class="text">087 655 9555</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-centurion" role="tabpanel" aria-labelledby="pills-home-tab"
                        tabindex="0">
                        <div class="centurion col-md-6">
                            <div>
                                <h3 class="city">Johannesburg</h3>
                            </div>
                            <div class="address ">
                                <div class="icon"><i class="bi bi-map-fill"></i></div>
                                <div>
                                    <p class="text">Valhalla, Centurion</p>
                                </div>
                            </div>
                            <div class="email ">
                                <div class="icon"><i class="bi bi-envelope"></i></div>
                                <div>
                                    <p class="text">info@sabindi.co.za</p>
                                </div>
                            </div>
                            <div class="phone ">
                                <div class="icon"><i class="bi bi-telephone-fill"></i></div>
                                <div>
                                    <p class="text">111 222 3333</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </base-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
    width: 65% !important;
    box-shadow: 5px 5px 6px #afafaf,
        -5px -5px 6px #f1f1f1;
}

.capeTown,
.centurion {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icon {
    color: var(--test);
    font-size: 23px;
    text-align: center;
}

.tag {
    font-weight: 400;
}

.text {
    font-size: 23px;
}


.s-contact {
    display: none !important;
    box-shadow: 5px 5px 6px #afafaf,
        -5px -5px 6px #f1f1f1;
}

.nav-pills {
    --bs-nav-pills-border-radius: 0;
    --bs-nav-pills-link-active-color: var(--sabindi);
    --bs-nav-pills-link-active-bg: transparent;
}

.nav-link {
    color: black;
}

/* Small phones */

@media only screen and (max-width:576px) {


    .m-contact {
        display: none !important;
    }

    .s-contact-holder {
        display: flex;
        justify-content: center;
    }

    .s-contact {
        display: flex !important;
        width: 90%;
    }

    .nav-pills {
        flex-direction: row;
    }

    .nav-link {
        font-size: 22px;
        font-weight: 700;
        padding: 5px;
    }

}

/* Bigger Phones */
@media only screen and (min-width:576px) {}

/* Tablets */
@media only screen and (min-width:768px) {
    .card {
        width: 90%;
    }

    .city {
        font-size: 2rem;
    }

    .text {
        font-size: 27px;
    }
}

/* Laptops */
@media only screen and (min-width:992px) {}

/* Desktops */
@media only screen and (min-width:1200px) {}
</style>