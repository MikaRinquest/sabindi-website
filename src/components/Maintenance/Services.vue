<template>
    <div class="margin">
        <div class="img-fit">
            <!-- <img src="https://i.postimg.cc/cLzfV7nm/IMG-20221108-140820.jpg" alt="Paris"> -->
        </div>
        <div class="bg-img"></div>
        <base-layout id="m-services">
            <h2 class="sectionTitle">Maintenance</h2>
            <div class="inspiration">
                <div>
                    <h2 class="sub-heading">The Challenges of maintenance</h2>
                    <p></p>
                    <ul>
                        <li class="list-item">Poor workmanship by previous builders.</li>
                        <li class="list-item"></li>
                        <li class="list-item"></li>
                        <li class="list-item"></li>
                        <li class="list-item">Emergency happening at night, but there is no one available to do
                            maintenance.</li>
                    </ul>
                </div>
                <div>
                    <h2 class="sub-heading">The Solution Sabindi is providing</h2>
                    <p></p>
                    <ul>
                        <li class="list-item">We do our work with military specialised precision, ensuring that you get
                            the quality work
                            you
                            deserve.
                        </li>
                        <li class="list-item"></li>
                        <li class="list-item"></li>
                        <li class="list-item"></li>
                        <li class="list-item">As soon as we get approval, Sabindi is on their way to fix the problem.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="sub-heading">Benefits of choosing us</h2>
                    <p></p>
                </div>
            </div>
        </base-layout>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sectionTitle {
    text-align: start;
    margin-left: 5%;
    font-size: 4rem;
    color: var(--highlight);
}

.img-fit[data-v-9bf65c48] {
    height: 500px;
    width: 90%;
    margin-left: 5%;
    background: url(https://i.postimg.cc/cLzfV7nm/IMG-20221108-140820.jpg);
    /* background-repeat: no-repeat; */
    background-size: cover;
    background-position: center;
}

.inspiration {
    margin-left: 5%;
    margin-right: 5%;
}

.list-item {
    font-size: 25px;
}

.sub-heading {
    color: var(--sabindi)
}
</style>