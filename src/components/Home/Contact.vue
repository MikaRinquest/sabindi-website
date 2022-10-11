<template>
    <base-layout section-title="Get into contact with us.">
        <div class="d-flex w-100">
            <div class="contact w-50">
                <form class="d-flex flex-column ">
                    <div class="d-flex justify-content-center mb-2">
                        <div class="form-floating sharedinput me-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating sharedinput">
                            <input type="password" class="form-control" id="floatingPassword"
                                placeholder="Phone Number">
                            <label for="floatingPassword">Phone Number</label>
                        </div>
                    </div>
                    <div class="form-floating ms-2 mb-2">
                        <input type="email" class="form-control" id="floatingInput" placeholder="FullName">
                        <label for="floatingInput">Name and Surname</label>
                    </div>
                    <div class="form-floating ms-2 mb-2">
                        <textarea class="form-control" placeholder="Type your message here"
                            id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Message</label>
                    </div> <button type="submit">Send a message</button>
                </form>
            </div>
            <div class="map w-50 ms-5"><iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.82419609174!2d18.51457869999999!3d-34.048380499999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc434c2a64ac1d%3A0xce5010552bd198ed!2sSabindi%20Group%20Global!5e0!3m2!1sen!2sza!4v1665473909584!5m2!1sen!2sza"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe></div>
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
</style>