<template>
    <base-layout sectionTitle="Contact Us">
        <div class=" d-flex flex-column align-items-center">
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
                    <form class="d-flex flex-column">
                        <div class="d-flex">
                            <div class="form-floating mb-3 me-3">
                                <input type="email" class="form-control" id="floatingnFirstW" placeholder="Jon">
                                <label for="floatingnFirstW">First Name</label>
                            </div>
                            <div class="form-floating mb-3 ">
                                <input type="email" class="form-control" id="floatingLastW" placeholder="Doe">
                                <label for="floatingLastW">Surname</label>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class="form-floating mb-3 me-3">
                                <input type="tel" class="form-control" id="floatingPhoneW" placeholder="111 222 3333">
                                <label for="floatingPhoneW">Phone Number</label>
                            </div>
                            <div class="form-floating mb-3 ">
                                <input type="email" class="form-control" id="floatingEmailW"
                                    placeholder="name@example.com">
                                <label for="floatingEmailW">Email address</label>
                            </div>
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a message here"
                                id="floatingTextareaW"></textarea>
                            <label for="floatingTextarea">Leave a message here.</label>
                        </div>
                        <button type="submit" class="mt-3 w-45 align-self-center">Send Email</button>
                    </form>
                </div>
                <div class="tab-pane fade" id="pills-centurion" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">
                    <form class="d-flex flex-column">
                        <div class="d-flex">
                            <div class="form-floating mb- me-3">
                                <input type="email" class="form-control" id="floatingFirstG" placeholder="Jon">
                                <label for="floatingFirstG">First Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingLastG" placeholder="Doe">
                                <label for="floatingLastG">Surname</label>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class="form-floating mb-3 me-3">
                                <input type="tel" class="form-control" id="floatingPhoneG" placeholder="111 222 3333">
                                <label for="floatingPhoneG">Phone Number</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingEmailG"
                                    placeholder="name@example.com">
                                <label for="floatingEmailG">Email address</label>
                            </div>
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a message here"
                                id="floatingTextareaG"></textarea>
                            <label for="floatingTextarea">Leave a message here.</label>
                        </div>
                        <button type="submit" class="mt-3 w-45 align-self-center">Send Email</button>
                    </form>
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
.sectionTitle {
    font-size: 4rem;
}


.nav-pills {
    --bs-nav-pills-border-radius: 0;
    --bs-nav-pills-link-active-color: var(--sabindi);
    --bs-nav-pills-link-active-bg: transparent;
}

.nav {
    --bs-nav-link-color: black;
    --bs-nav-link-hover-color: var(--sabindi);
}


.nav-link {
    font-size: 35px;
}

#pills-tab {
    width: 50%;
}

li.nav-item {
    display: flex;
    justify-content: center;
    width: 50%;
}

*,
*:focus {
    outline: none
}

.form {
    width: 500px;
    margin: 0 auto;
    margin-top: 150px;
    font-family: sans-serif;
    background: #fff
}

.form-item {
    position: relative;
    margin-bottom: 15px;
    font-size: 20px;
}

.form-item input {
    display: block;
    width: 400px;
    height: 40px;
    background: transparent;
    border: solid 1px #ccc;
    transition: all .3s ease;
    padding: 0 15px
}

.form-item input:focus {
    border-color: blue
}

.form-item label {
    position: absolute;
    cursor: text;
    z-index: 2;
    top: 13px;
    left: 10px;
    font-size: 12px;
    font-weight: bold;
    background: #fff;
    padding: 0 10px;
    color: #999;
    transition: all .3s ease
}

.form-item input:focus+label,
.form-item input:valid+label {
    font-size: 11px;
    top: -5px
}

.form-item input:focus+label {
    color: blue
}

input {
    width: 400px;
}
</style>