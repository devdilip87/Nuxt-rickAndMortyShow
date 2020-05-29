<template>
    <div class="sort">
        <select v-model="defaultSortOption">
            <option v-for="(option, index) in sortOptions" :value="index" :disabled="index == defaultSortOption" v-bind:key="index">{{option}}</option>
            
        </select>
    </div>
</template>

<script>
export default {
  data () {
    return {
      defaultSortOption: 0,
      sortOptions: ['Sort by ID', 'Ascending', 'Decending']
    }
  },
  watch: {
    defaultSortOption: function(n, o) {
      if(n && n !== o) {
        const payload = {
            sortOption: this.defaultSortOption,
            list: this.$store.state.filteredList
        }
        this.$store.dispatch("sortList", payload);
      }
    }
  }
}
</script>

<style>
</style>
