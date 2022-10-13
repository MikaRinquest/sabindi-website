<template>
    <base-layout id="industries" section-title="Industries serviced">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-insurance-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-insurance" type="button" role="tab" aria-controls="pills-insurance"
                    aria-selected="true">Insurance</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-corporate-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-corporate" type="button" role="tab" aria-controls="pills-corporate"
                    aria-selected="false">Corporate</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-residential-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-residential" type="button" role="tab" aria-controls="pills-residential"
                    aria-selected="false">Residential</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-real-tab" data-bs-toggle="pill" data-bs-target="#pills-real"
                    type="button" role="tab" aria-controls="pills-real" aria-selected="false">Real Estate</button>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-insurance" role="tabpanel"
                aria-labelledby="pills-insurance-tab" tabindex="0">Hello World 0</div>
            <div class="tab-pane fade" id="pills-corporate" role="tabpanel" aria-labelledby="pills-corporate-tab"
                tabindex="0">Hello world 1</div>
            <div class="tab-pane fade" id="pills-residential" role="tabpanel" aria-labelledby="pills-residential-tab"
                tabindex="0">Hello World 2</div>
            <div class="tab-pane fade" id="pills-real" role="tabpanel" aria-labelledby="pills-real-tab" tabindex="0">
                Hello World 3</div>
        </div>


    </base-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-pills {
    display: flex;
    justify-content: center;
}

.nav-item {
    font-size: 25px;
}

.nav-link {
    color: var(--sabindi);
}

.nav-link:hover {
    color: black;
}



.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: var(--sabindi);
    background-color: transparent !important;
    text-decoration: underline;
}

.tab-content {
    display: flex;
    justify-content: center;
}

.tab-pane {
    text-align: center;
    word-break: break-word;
    width: 60%;
}

/* Small phones */
@media only screen and (max-width:576px) {
    .nav-item {
        font-size: 20px;
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