<template>
  <navbar></navbar>
  <router-view></router-view>
  <bottom></bottom>
</template>

<script>
import AOS from 'aos'

export default {
  created() {
    AOS.init()
  }
}
</script>


<style >

</style>
