<template>
  <div id="d-search-list">
    <div class="d-app-box">
      <img class="d-app-icon" src="../../assets/logo.svg" alt="icon" />
      <span>Hello Apps</span>
      <div class="d-app-tags">
        <span>Tag1</span>
        <span>Tag2</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DSearchList",
  setup() {
    return {};
  },
  data() {
    return {
      apps: []
    }
  },
  methods: {

  }
});
</script>

<style scoped>
#d-search-list {
  border: rgb(222, 222, 222) 1px solid;
}

.d-app-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
}

.d-app-tags {
  display: inline-block;
}

.d-app-icon {
  width: 32px;
  height: 32px;
  border: red 1px solid;
  border-radius: 50%;
}
</style>>