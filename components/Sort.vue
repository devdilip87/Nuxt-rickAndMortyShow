<template>
    <div class="sort">
        <i class="fa fa-sort" aria-hidden="true"></i>
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
      sortOptions: ['Ascending by Id', 'Decending by Id']
    }
  },
  watch: {
    defaultSortOption: function(n, o) {
      const payload = {
          sortOption: this.defaultSortOption,
          list: this.$store.state.filteredList
      }
      this.$store.dispatch("sortList", payload);
    }
  }
}
</script>

<style>
</style>
