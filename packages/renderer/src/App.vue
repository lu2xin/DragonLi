<template>
  <d-search-bar v-model="searchText" @input="textChange"></d-search-bar>
  <!-- <d-search-list></d-search-list> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DSearchBar from "./components/DSearchBar.vue";
// import DSearchList from "./components/DSearchList.vue";

export default defineComponent({
  name: "App",
  components: {
    DSearchBar,
    // DSearchList,
  },
  mounted() {
    // console.log(window.myAPI)
  },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    textChange() {
      console.log('App: ', this.searchText);
    }
  }
});
</script>

<style>
</style>
