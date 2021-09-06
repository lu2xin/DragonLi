<template>
  <d-search-bar :change="textChange"></d-search-bar>
  <d-search-list :searchText="searchText"></d-search-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DSearchBar from "./components/DSearchBar.vue";
import DSearchList from "./components/DSearchList.vue";
export default defineComponent({
  name: "App",
  components: {
    DSearchBar,
    DSearchList,
  },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    textChange(text: string) {
      this.searchText = text
    }
  }
});
</script>

<style>
</style>
