<template>
    <nav id="nav">
        <div>
            <img src="" alt="Company Logo">
        </div>
        <div>
            <ul class="list-holder">
                <router-link to="/">
                    <li class="list-item">Go back home</li>
                </router-link>
                |
                <li class="list-item">Services</li>
                |
                <li class="list-item">Portfolio</li>
                |
                <li class="list-item">Affiliations</li>
                |
                <li class="list-item">Contact</li>
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
    height: 5vh;
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