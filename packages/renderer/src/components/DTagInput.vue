<template>
  <div id="d-tag-input">
    <span id="d-tag">小程序</span>
    <d-input v-model="value"></d-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DInput from "./DInput.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    DInput,
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
#d-tag-input {
  display: flex;
  height: 100%;
  align-items: center;
  flex-grow: 1;
}
#d-tag {
  /* border: 1px red solid; */
  padding: 0 8px;
  border-radius: 16px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  margin-right: 4px;
  background-color: rgb(222, 222, 222);
}
</style>