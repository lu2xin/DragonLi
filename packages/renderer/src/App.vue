<template>
  <d-search-bar v-model="searchText" @input="textChange"></d-search-bar>
  <d-search-list></d-search-list>
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
    textChange() {
      console.log(window.dragon.search(this.searchText))
      const h = this.searchText.length * 32
      window.dragon.setWinExtendHeight(h)
    }
  }
});
</script>

<style>
</style>
