<template>
    <base-layout section-Title="Our Branches" id="branch">
        <div class="d-flex flex-column align-items-center">
            <img src="https://i.postimg.cc/0Q81y0qg/Branches.png" alt="Locations of our branches" class="branch">
            <p class="italics">We currently have a branch in Cape Town and Centurion</p>
        </div>
    </base-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
.italics {
    font-style: italic;
}

.branch {
    width: 45%;
}

/* Small phones */
@media only screen and (max-width:576px) {
    .branch {
        width: 95%;
    }

    .italics {
        text-align: center;
    }
}

/* Bigger Phones */
@media only screen and (min-width:576px) {}

/* Tablets */
@media only screen and (min-width:768px) {}

/* Laptops */
@media only screen and (min-width:992px) {}

/* Desktops */
@media only screen and (min-width:1200px) {}
</style>