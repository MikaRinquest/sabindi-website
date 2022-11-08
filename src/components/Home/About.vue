<template>
    <base-layout id="about" section-title="About Sabindi">
        <div class="content-holder">
            <div class="a-content">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, obcaecati a! Ipsa eum dolorum
                    laborum quasi, nulla, culpa veniam soluta repudiandae vitae ipsam illo, cumque velit? Quidem id
                    maxime itaque?
                    Libero facilis in repellendus laudantium illum modi ipsa ut omnis. Itaque voluptate exercitationem
                    in. Quasi saepe expedita praesentium aperiam odit ad fugiat necessitatibus! Suscipit deleniti
                    incidunt possimus, eos maiores labore?
                    Placeat voluptate labore itaque quaerat omnis alias maxime consequatur enim iusto perferendis, vitae
                    doloremque dignissimos harum voluptatem ea? Error impedit animi iusto maxime odio facilis vitae eius
                    adipisci quasi fugit!
                    Explicabo animi odit, facere ducimus sit molestiae a amet ipsam sint pariatur in, cumque quos minus
                    id? Alias exercitationem, quis animi, totam necessitatibus distinctio dolore perferendis reiciendis,
                    recusandae delectus nam.
                    Repellendus ducimus repellat vel consequuntur deserunt. Alias rem id, architecto sequi illum libero
                    possimus, nisi aspernatur, distinctio dolores tempore unde. Itaque neque placeat expedita quis
                    reprehenderit harum rerum alias ducimus!</p>
                <router-link to="About">
                    <h3>Learn more about Sabindi here!</h3>
                </router-link>
            </div>
            <div class="a-img"><img src="https://i.postimg.cc/rwXRpzyf/Polish-20221104-112247759.png" alt=""
                    class="abdul"></div>
        </div>
    </base-layout>
</template>

<script>
import BaseLayout from '../BaseLayout.vue'
export default {
    components: { BaseLayout },

}
</script>

<style scoped>
.content-holder {
    display: inline-flex;
    justify-content: center;
}

.a-content {
    width: 60%;
    align-self: center;

}

.a-img {
    width: 20%;
    margin-left: 5%;
}

.abdul {
    height: 500px;
}
</style>
