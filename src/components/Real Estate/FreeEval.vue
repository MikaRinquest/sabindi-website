<template>
    <base-layout section-title="Get into contact with us." id="contact">
        <div class="contact ">
            <form class="d-flex flex-column m-3">
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
                    <textarea class="form-control textarea" placeholder="Type your message here" id="msg"></textarea>
                    <label for=" floatingTextarea">Message</label>
                </div> <button type="submit">Send a message</button>
            </form>
        </div>

    </base-layout>
</template>

<script>
export default {

}
</script>

 <style scoped>
.sharedinput {
    width: 45%;
    /* height: 35px; */
}


.textarea {
    height: 150px;
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


}
</style>