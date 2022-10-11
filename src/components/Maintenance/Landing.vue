<template>
<div>
<h1 id="services">Services</h1>
<div id="container">
    <div></div>
    <div></div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#container{
    display: flex;
    height:20vh;
    width:100%;
    background-color:orange;
}
#container>div~div{
    border: 5px solid;
    width:50%;
}
#services{
    text-decoration: underline;
    margin-bottom: 2%;
}

</style>