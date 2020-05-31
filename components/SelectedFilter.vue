<template>
    <section class="row" v-if="selectedFilterOptions.length">
        <div class="heading-icon"><i class="fal fa-ballot-check"></i><h3>Selected Filter</h3></div>
        <button v-for="(filter, index) in selectedFilterOptions"
          v-bind:class="classes[filter.type - 1]"
          v-bind:key="index"
          @click="removeFilter(filter)">{{ filter.value }}<span class="close-thik"></span></button>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data () {
    return {
      classes: ['species', 'gender', 'origin']
    }
  },
  computed: {
      ...mapGetters([
          'selectedFilterOptions'
      ])
  },
  methods: {
      removeFilter: function(filter){
        let removeIndex = this.selectedFilterOptions.map(function(item) { return item.value; }).indexOf(filter.value);
        // remove object
        const selectedFilter = this.selectedFilterOptions.splice(removeIndex, 1);
        const payload = {
            selectedFilter: this.selectedFilterOptions,
            characterList: this.$store.state.characters,
            name: this.$store.state.searchedName
        }
        this.$store.dispatch("updateSelectedFilter", payload);
      }
  }
}
</script>

<style scoped>
    button {
      height      : 25px;
      text-align  : center;
      width       : auto;
      border      : 1px solid;
      padding-left:10px;
      padding-right:10px;
      min-width:80px;
      margin-right: 10px;
      border-radius: 5px;
      background: #2196F3;
      color: white;
      font-size: 14px;
  }

  .close-thik:after {
    padding-left: 10px;
    content: '✖'; /* UTF-8 symbol */
  }

  .species {
    background-color: #2196F3;
  }

  .gender {
    background-color: #4CAF50;
  }

  .origin {
    background-color: #d1c130;
  }

</style>
