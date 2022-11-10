<template>
    <nav id="nav">
        <div class="col-6">
            <img src="" alt="Company Logo">
        </div>
        <div class="col-6">
            <ul class="list-holder">
                <router-link to="/">
                    <li class="list-item">Go back home</li>
                </router-link>
                |
                <a href="#about-us">
                    <li class="list-item">About Us</li>
                </a>
                |
                <a href="#portfolio">
                    <li class="list-item">Branches</li>
                </a>
                |
                <a href="#affiliates">
                    <li class="list-item">Clients</li>
                </a>
                |
            </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
#nav {
    border: 1px solid black;
    height: 6vh;
    width: 100vw;
    display: flex;
    position: fixed;
}

.list-holder {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: end;
}

.list-item {
    list-style-type: none;
    padding: 5px;
}
</style>