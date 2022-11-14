<template>
    <nav id="nav" class="d-flex">
        <div class="img-hold col-3">
            <img src="../assets/image857.png" alt="Company Logo" class="logo">
        </div>
        <div class="col-8">
            <ul class="list-holder">
                <router-link to="/" class="nav-link">
                    <li class="list-item">Home</li>
                </router-link>
                <router-link to="/about" class="nav-link">
                    <li class="list-item">About</li>
                </router-link>
                <div class="dropdown-holder d-flex flex-column">
                    <span @mouseover="open" @mouseleave="close">
                        <li class="list-item services">Services
                            <ul class="dropdown" v-if="active">
                                <router-link to="/maintenance">
                                    <li class="dropdown-item">Maintenance</li>
                                </router-link>
                                <router-link to="/real-estate">
                                    <li class="dropdown-item">Real Estate</li>
                                </router-link>
                            </ul>
                        </li>
                    </span>
                </div>
                <router-link to="/contact-us" class="nav-link">
                    <li class="list-item">Contact Us</li>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            active: false
        }
    },
    methods: {
        open() {
            this.active = true;
        },

        close() {
            this.active = false;
        }
    }
}
</script>

<style scoped>
.list-holder {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 5px;
    height: 100%;
}

.list-item {
    list-style-type: none;
    padding: 15px;
    font-size: 25px;
}

.list-item:hover {
    cursor: pointer;
}

.dropdown {
    /* padding-left: 5px; */
    padding-top: 25px;
    width: 15%;
    box-shadow: 3px 3px 8px #5a5a5a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    list-style: none;
    border: 1px solid black;
    border-top: 0;
    background-color: lightgray;
    opacity: 0.9;
}

.dropdown-item:hover {
    background-color: white;
}
</style>