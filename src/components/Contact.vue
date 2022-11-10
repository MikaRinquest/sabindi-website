<template>
    <base-layout sectionTitle="Contact Us">
        <div class="d-flex justify-content-center">
            <div class="card d-flex ">
                <div class="d-flex flex-row">
                    <div class="capeTown col-6">
                        <div class="city">
                            <h3>Cape Town</h3>
                        </div>
                        <div class="address">
                            <div class="icon"><i class="bi bi-map-fill"></i></div>
                            <div>
                                <a href="https://goo.gl/maps/zfhF5sFkKw4tzeix8" target="_blank">
                                    <p class="text">Zeekoevlei, Grassy Park</p>
                                </a>
                            </div>
                        </div>
                        <div class="email">
                            <div class="icon"><i class="bi bi-envelope"></i></div>
                            <div>
                                <a href="mailto:enquiries@sabindi.co.za">
                                    <p class="text">enquiries@sabindi.co.za</p>
                                </a>
                            </div>
                        </div>
                        <div class="phone">
                            <div class="icon"><i class="bi bi-telephone-fill"></i></div>
                            <div>
                                <a href="https://wa.me/0817079992" target="_blank">
                                    <p class="text">087 655 9555</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="centurion col-6">
                        <div class="city">
                            <h3>Johannesburg</h3>
                        </div>
                        <div class="address">
                            <div class="icon"><i class="bi bi-map-fill"></i></div>
                            <div>
                                <p class="text">Valhalla, Centurion</p>
                            </div>
                        </div>
                        <div class="email">
                            <div class="icon"><i class="bi bi-envelope"></i></div>
                            <div>
                                <p class="text">info@sabindi.co.za</p>
                            </div>
                        </div>
                        <div class="phone">
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
    </base-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
    width: 70%;
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

.text {
    font-size: 23px;
}
</style>