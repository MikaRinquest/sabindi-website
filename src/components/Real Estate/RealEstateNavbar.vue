<template>
    <nav id="nav">
        <div class="col-5">
            <img src="https://i.postimg.cc/pLH5Wqrd/wetrade.png" alt="WeTrade Logo" class="wetrade">
        </div>
        <div class="col-7">
            <ul class="list-holder">
                <router-link to="/">
                    <li class="list-item">Go back home</li>
                </router-link>
                |
                <a href="#wetrade">
                    <li class="list-item">WeTrade24</li>
                </a>
                |
                <a href="#listings">
                    <li class="list-item">Listings</li>
                </a>
                |
                <a href="#r-services">
                    <li class="list-item">Services</li>
                </a>
                |
                <a href="#r-contact">
                    <li class="list-item">Contact</li>
                </a>
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
    width: 100vw;
    display: flex;
    position: fixed;
    background-color: black;
    color: white;
}

.wetrade {
    height: 10vh;
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
    color: var(--wetrade);
}
</style>