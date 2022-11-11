<template>
    <nav id="nav" class="d-flex">
        <div class="col-3">
            <img src="" alt="Company Logo">
        </div>
        <div class="col-8">
            <ul class="list-holder">
                <router-link to="/" class="nav-link">
                    <li class="list-item">Home</li>
                </router-link>
                <router-link to="/about" class="nav-link">
                    <li class="list-item">About</li>
                </router-link>
                <button class="nav-link">
                    <li class="list-item">Services</li>
                </button>
                <router-link to="/contact-us" class="nav-link">
                    <li class="list-item">Contact Us</li>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.list-holder {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 5px;
}

.list-item {
    list-style-type: none;
    padding: 5px;
}
</style>