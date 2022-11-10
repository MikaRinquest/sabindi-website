<template>
  <router-view></router-view>

  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue"
import AOS from 'aos'

export default {
  components: {
    Footer,
  },
  created() {
    AOS.init()
  }
}
</script>


<style >

</style>
