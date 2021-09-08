<template>
  <div id="d-search-bar">
    <d-tag-input></d-tag-input>
  </div>
</template>

<script lang="ts">
import DTagInput from "./DTagInput.vue";

export default {
  components: { DTagInput },

  methods: {

  }
};
</script>

<style>
#d-search-bar {
  -webkit-app-region: drag;
  padding: 0 8px 0 8px;
  height: 52px;
}
</style>
