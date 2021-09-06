<template>
  <div class="apps">
    <div v-for="app in apps" class="one-app">
      <div class="app-icon">
        <img :src="app.icon" alt="">
      </div>
      <div class="app-desc">
        <div class="app-name">{{app.name}}</div>
        <div>{{app.description}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const { cube } = window.electron

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
  props: {
    searchText: String,
  },
  watch: {
    searchText(newText, oldText) {
      if (newText !== oldText) {
        this.search();
      }
    }
  },
  methods: {
    search() {
      console.log('%cDSearchList.vue line:26 this.searchText', 'color: #007acc;', this.searchText);
      cube.invoke('quickSearch', this.searchText).then(list => {
        console.log('%cDSearchList.vue line:28 list', 'color: #007acc;', list);
        this.apps = list
      })
    } 
  }
});
</script>

<style scoped>
.one-app {
  display: flex;
  padding: 3px;
  cursor: pointer;
  background: -webkit-linear-gradient(white, gray);
}
.app-icon {
  width: 60px;
}
.app-desc {
  width: 100%;
}


</style>>