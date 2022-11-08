<template>
    <base-layout section-title="Get into contact with us." id="contact">




        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                    type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Western Cape Branch
                    Branch</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                    type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Gauteng
                    Branch</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                tabindex="0">
                <div class="c-contain d-flex ">
                    <div class="contact col-6">
                        <form class="d-flex flex-column ">
                            <div class="contact-details d-flex justify-content-center mb-2">
                                <div class="form-floating sharedinput me-3">
                                    <input type="email" class="form-control" id="email" placeholder="name@example.com">
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating sharedinput">
                                    <input type="password" class="form-control" id="tel" placeholder="Phone Number">
                                    <label for="floatingPassword">Phone Number</label>
                                </div>
                            </div>
                            <div class="form-floating ms-2 mb-2">
                                <input type="email" class="form-control" id="name" placeholder="FullName">
                                <label for="floatingInput">Name and Surname</label>
                            </div>
                            <div class="form-floating ms-2 mb-2">
                                <textarea class="form-control textarea" placeholder="Type your message here"
                                    id="msg"></textarea>
                                <label for=" floatingTextarea">Message</label>
                            </div> <button type="submit">Send a message</button>
                        </form>
                    </div>
                    <div class="map col-6 ms-5">
                        <iframe :src="westernCape" width="600" height="225" style="border:0;" allowfullscreen=""
                            loading="lazy   " referrerpolicy="no-referrer-when-downgrade" class="iframe"></iframe>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <div class="c-contain d-flex ">
                    <div class="contact col-6">
                        <form class="d-flex flex-column ">
                            <div class="contact-details d-flex justify-content-center mb-2">
                                <div class="form-floating sharedinput me-3">
                                    <input type="email" class="form-control" id="email" placeholder="name@example.com">
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating sharedinput">
                                    <input type="password" class="form-control" id="tel" placeholder="Phone Number">
                                    <label for="floatingPassword">Phone Number</label>
                                </div>
                            </div>
                            <div class="form-floating ms-2 mb-2">
                                <input type="email" class="form-control" id="name" placeholder="FullName">
                                <label for="floatingInput">Name and Surname</label>
                            </div>
                            <div class="form-floating ms-2 mb-2">
                                <textarea class="form-control textarea" placeholder="Type your message here"
                                    id="msg"></textarea>
                                <label for=" floatingTextarea">Message</label>
                            </div> <button type="submit">Send a message</button>
                        </form>
                    </div>
                    <div class="map col-6 ms-5">
                        <iframe :src="gauteng" width="600" height="450" style="border:0;" allowfullscreen=""
                            loading="lazy   " referrerpolicy="no-referrer-when-downgrade" class="iframe"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </base-layout>
</template>

<script>
export default {
    props: ["westernCape", "gauteng"],
}
</script>

<style scoped>
.c-contain {
    width: 99%;
    margin-top: 10px;
}

.contact {
    padding-left: 100px;
    align-self: center;
}

.sharedinput {
    width: 45%;
    /* height: 35px; */
}

.textarea {
    height: 150px;
}

.nav-tabs {
    display: flex;
    justify-content: center;
}

.nav-item {
    font-size: 25px;
}

.nav-pills {
    display: flex;
    justify-content: center;
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

/* Small phones */
@media only screen and (max-width:576px) {
    .c-contain {
        flex-direction: column;
    }

    .contact {
        padding-left: 10px;
        padding-right: 10px;
        width: 100%
    }

    .contact-details {
        flex-direction: column;
        width: 100%;
    }

    .sharedinput {
        width: 100%;
        margin-bottom: 5px;
        margin-left: 0.5rem;
    }

    .form-floating {
        margin-left: 0 !important;
    }

    .map {
        margin-left: 0 !important;
        width: 95%;
    }

}

/* Bigger Phones */
@media only screen and (min-width:576px) {
    .c-contain {
        flex-direction: column;
    }

    .contact {
        padding-left: 10px;
        padding-right: 10px;
        width: 100%
    }

    .contact-details {
        flex-direction: column;
        width: 100%;
    }

    .sharedinput {
        width: 100%;
        margin-bottom: 5px;
        margin-left: 0.5rem;
    }

    .form-floating {
        margin-left: 0 !important;
    }

    .map {
        margin-left: 0 !important;
        width: 100%;
    }
}

/* Tablets */
@media only screen and (min-width:768px) {
    .c-contain {
        flex-direction: row;
    }

    .contact {
        align-self: center;
        width: 50%;
    }

    .contact-details {
        flex-direction: row;
    }

    .sharedinput {
        width: 45%;
        /* height: 35px; */
    }

    .map {
        width: 50%;
    }
}

/* Laptops */
@media only screen and (min-width:992px) {}

/* Desktops */
@media only screen and (min-width:1200px) {}
</style>