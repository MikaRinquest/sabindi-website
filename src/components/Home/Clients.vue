<template>
    <base-layout id="clients" section-title="Our Client Base">
        <div class="contain d-flex justify-content-center">
            <div class="holder d-flex ">
                <div class="santam col-4 d-flex justify-content-center"><img
                        src="https://i.postimg.cc/bJ4zbpCQ/santam.jpg" alt="" class="img"></div>
                <div class="bryte col-4 d-flex justify-content-center"><img
                        src="https://i.postimg.cc/rFXVwytT/bryte-insurers.jpg" alt="" class="img"></div>
                <div class="absa col-4 d-flex justify-content-center"><img src="https://i.postimg.cc/2SCCnHwX/absa.webp"
                        alt="" class="img"></div>

            </div>
        </div>

    </base-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
.contain {
    background-color: #f5f5f5;
}

.holder {
    align-items: center;
    height: 40vh;
    width: 95vw;
}

.img {
    width: 90%;
    height: 50%;
    border: 1px solid black;
    transition: 0.3s;
    height: 250px;
}

.img:hover {
    height: 300px;
    width: 100%;
    transition: 0.3s;
    box-shadow: 5px 5px 10px #a1a1a1,
        -5px -5px 10px #ffffff;
}

/* Small phones */
@media only screen and (max-width:576px) {}

/* Bigger Phones */
@media only screen and (min-width:576px) {
    .holder {
        flex-direction: row;
    }
}

/* Tablets */
@media only screen and (min-width:768px) {}

/* Laptops */
@media only screen and (min-width:992px) {}

/* Desktops */
@media only screen and (min-width:1200px) {}
</style>