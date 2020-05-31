<template>
  <div>
    <app-header></app-header>
    <div class="container">
    <app-filter></app-filter>
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from "./../components/Header";
import Filter from "./../components/Filter";


export default {
  components: {
    appHeader: Header,
    appFilter: Filter
  }
}
</script>

<style>
  
</style>
