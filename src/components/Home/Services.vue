<template>
    <section id="services">
        <!-- Add minor hover effects to the containers -->
        <div class="m-contain">
            <h2>Maintenance</h2>
        </div>
        <div class="r-contain">
            <h2>Real Estate</h2>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
#services {
    display: flex;
    margin-top: 15px;
    padding-bottom: 15px;
}

.m-contain {
    border: 2px solid black;
    width: 45vw;
    margin-right: 5vw;
    margin-left: 30px;
    text-align: center;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
}


.r-contain {
    border: 2px solid black;
    width: 45vw;
    text-align: center;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>