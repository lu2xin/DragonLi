<template>
  <d-search-bar></d-search-bar>
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
});
</script>

<style>
</style>
