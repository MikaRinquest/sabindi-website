<template>
    <base-layout section-title="Get into contact with us.">
        <div class="d-flex w-100">
            <div class="contact w-50">
                <form class="d-flex flex-column ">
                    <div class="d-flex justify-content-center mb-2">
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
                        <textarea class="form-control" placeholder="Type your message here" id="msg"></textarea>
                        <label for="floatingTextarea">Message</label>
                    </div> <button type="submit">Send a message</button>
                </form>
            </div>
            <div class="map w-50 ms-5">
                <slot></slot>
            </div>
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