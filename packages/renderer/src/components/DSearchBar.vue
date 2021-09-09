<template>
  <div id="d-search-bar">
    <d-tag-input v-model="value"></d-tag-input>
    <div id="d-tools">
      <img id="logo" src="../../assets/logo.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DTagInput from "./DTagInput.vue";

export default defineComponent({
  components: {
    DTagInput,
  },
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() { return this.modelValue },
      set(value: string) {
        this.$emit('update:modelValue', value)
      }
    }
  }
});

</script>

<style scoped>
#d-search-bar {
  -webkit-app-region: drag;
  padding: 0 8px 0 8px;
  height: 52px;
  display: flex;
}

#d-tools {
  display: flex;
  align-items: center;
}

#logo {
  width: 42px;
  height: 42px;
}
</style>
