<template>
  <d-search-bar></d-search-bar>
  <d-search-bar></d-search-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DSearchBar from "./components/DSearchBar.vue";
import DSearchList from "./components/DSearchList.vue";
export default defineComponent({
  name: 'App',
  components: {
    DSearchBar,
    DSearchList,
  }
});
</script>

<style>
html,
body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0 8px 0 8px;
  overflow: hidden;
  -webkit-app-region: drag;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.d-input-container {
  display: flex;
  align-items: center;
  height: 100%;
}

.d-tag {
  background-color: green;
  width: 32px;
  height: 32px;
}

.d-input-box {
  width: px;
  height: 90%;
}

.d-input {
  width: 100%;
  height: 100%;

  -webkit-app-region: no-drag;
}
</style>
