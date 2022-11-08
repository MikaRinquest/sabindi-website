<template>
    <base-layout section-title="What do we do?" id="r-services">
        <div class="holder">
            <div class="pill-holder col-8">
                <ul class="nav nav-pills " id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">Buying</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">Selling</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">Renting</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled"
                            aria-selected="false">Letting</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab" tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Consectetur accusamus voluptatem neque aspernatur odit amet eos incidunt quia voluptatibus
                        provident! Error sit cumque tempora perspiciatis nobis, officiis saepe assumenda aperiam.</div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                        tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus
                        voluptatem neque aspernatur odit amet eos incidunt quia voluptatibus provident! Error sit cumque
                        tempora perspiciatis nobis, officiis saepe assumenda aperiam.</div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                        tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus
                        voluptatem neque aspernatur odit amet eos incidunt quia voluptatibus provident! Error sit cumque
                        tempora perspiciatis nobis, officiis saepe assumenda aperiam.</div>
                    <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab"
                        tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus
                        voluptatem neque aspernatur odit amet eos incidunt quia voluptatibus provident! Error sit cumque
                        tempora perspiciatis nobis, officiis saepe assumenda aperiam.</div>
                </div>
            </div>
            <div class="free col-4">
                <h2>FREE EVALUATION</h2>
                <p>Interested? Apply <router-link to="/evaluation">here</router-link>
                </p>
            </div>
        </div>

    </base-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
.holder {
    display: flex;

}

.nav-link {
    color: #888;
    font-size: 24px;
    font-weight: bold;
}

.nav-link:hover {
    color: var(--sabindi);
    background-color: transparent;
}


.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: var(--sabindi);
    background-color: transparent !important;
    text-decoration: underline;
}

.tab-pane {
    font-size: 20px;
}

/* 
.free {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.free>h2 {
    text-align: center
} */

/* .button {
    text-align: center;
    width: 50%;
} */



/* Small phones */
@media only screen and (max-width:576px) {}

/* Bigger Phones */
@media only screen and (min-width:576px) {
    .nav-pills {
        justify-content: center;
    }

    .tab-pane {
        text-align: center;
        word-break: break-word;
        width: 300px;
    }

}

/* Tablets */
@media only screen and (min-width:768px) {

    .pill-holder {
        display: flex;
    }

    .nav-pills {
        display: flex;
        flex-direction: column;
        border-style: none solid none none;
        margin-right: 40px;
        margin-left: 50px
    }

    .tab-pane {
        word-break: break-word;
        width: 500px;
    }
}

/* Laptops */
@media only screen and (min-width:992px) {}

/* Desktops */
@media only screen and (min-width:1200px) {}
</style>