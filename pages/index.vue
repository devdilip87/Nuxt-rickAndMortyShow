<template>
    <div class="box content">
            <app-selected-filter></app-selected-filter>
            <section class="row searchSort">
                <app-search></app-search>
                <app-sort></app-sort>
            </section>
            <app-charactor-list></app-charactor-list>
    </div>
</template>

<script>
import SelectedFilter from "./../components/SelectedFilter";
import Search from "./../components/Search";
import Sort from "./../components/Sort";
import CharactorList from "./../components/CharacterList";
export default {
  components: {
    appSelectedFilter: SelectedFilter,
    appSearch: Search,
    appSort: Sort,
    appCharactorList: CharactorList
  }
}
</script>