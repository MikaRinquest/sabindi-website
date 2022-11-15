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

    <button class="nav-button" @click="openNav"><i class="bi bi-list"></i></button>
    <Transition name="slide">
        <nav id="r-nav" v-if="toggle">
            <!-- <button class="nav-button" @click="openNav"><i class="bi bi-list"></i></button> -->
            <!-- <div class="img-hold ">
            <img src="../assets/image857.png" alt="Company Logo" class="logo">
        </div> -->
            <div class="">
                <ul class="r-list-holder">
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
    </Transition>
</template>

<script>
export default {
    data() {
        return {
            active: false,
            toggle: false,
        }
    },
    methods: {
        open() {
            this.active = true;
        },

        close() {
            this.active = false;
        },

        openNav() {
            this.toggle = !this.toggle;
            console.log("You clicked me");
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

#r-nav {

    position: fixed;
    background-color: lightgrey;
    z-index: 5;
    width: 100%;
}

.r-list-holder {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}

.nav-button {
    display: none;
    background-color: transparent;
}




@media only screen and (max-width:576px) {
    #nav {
        display: none !important;
    }

    .nav-button {
        display: block;
        position: fixed;
        right: 0;
        z-index: 10;
    }

}
</style>