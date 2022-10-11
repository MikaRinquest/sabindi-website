<template>
<div>
<h1 id="services">Services</h1>
<div id="container">
    <div id="left"></div>
    <div id="right"></div>
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
    margin-bottom: 2%;
}
#left{
    border-right: 3px solid;
    width:50%;
}

#right{
    border-left: 3px solid;
    width:50%;
}
#services{
    text-decoration: underline;
    margin-bottom: 2%;
}

</style>