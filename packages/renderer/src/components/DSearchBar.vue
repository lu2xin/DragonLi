<template>
  <d-input :change="textChange" />
</template>

<script lang="ts">
import DInput from "./DInput.vue";

export default {
  components: { DInput },
  props: {
    change: Function,
  },
  methods: {
    textChange(text: string) {
      this.change(text)
    }
  }
};
</script>

<style>

</style>