<template>
    <div class="holder d-flex flex-column align-items-center">
        <img src="https://i.postimg.cc/yNswLH1C/maintenance-g7dd055a4d-1280.png" alt="" class="construction">
        <div class="text">
            <h3>We're still <span class="badpun">building</span> something here.</h3>

            <h3>For the meantime, go back to the <router-link to="/"><span class="home">home page.</span></router-link>
            </h3>

        </div>
    </div>
</template>

<script>
// import swal from "sweetalert";
export default {
    // components: {
    //     swal,
    // },
    // mounted() {
    //     swal({
    //         title: "Good job!",
    //         text: "You clicked the button!",
    //         icon: "success",
    //     });
    // }
}
</script>

<style scoped>
.holder {
    height: 90%;
}

.construction {
    height: 50%;
}

.text {
    height: 30%;
}

.badpun {
    color: var(--sabindi);
}

.home {
    color: var(--sabindi);
    text-decoration: underline;
}
</style>