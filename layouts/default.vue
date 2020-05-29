<template>
  <div class="container">
  <app-filter></app-filter>
    <nuxt />
  </div>
</template>

<script>
import Filter from "./../components/Filter";


export default {
  components: {
    appFilter: Filter
  }
}
</script>

<style>
  
</style>
