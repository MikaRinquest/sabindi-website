<template>
    <base-layout sectionTitle="Vacancies">
        <div>
            <div v-if="vacancies.length == 0">
                <h3 class="na">There are currently no vacancies available.</h3>
            </div>
            <div v-else v-for="vacancy in vacancies" :key="vacancy.id">
                <ul>
                    <li>{{ vacancy.job }}</li>
                </ul>
            </div>
        </div>
    </base-layout>

</template>

<script>
export default {
    data() {
        return {
            vacancies: [
                // {
                //     id: "1",
                //     job: "Plumber",
                // },
                // {
                //     id: "2",
                //     job: "Tiler",
                // },
                // {
                //     id: "3",
                //     job: "Plaster",
                // },
            ]
        }
    }
}
</script>

<style scoped>
.section {
    margin-right: 20px;
}

.na {
    text-align: center;
}
</style>