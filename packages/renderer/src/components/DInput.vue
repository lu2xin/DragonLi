 <template>
  <div id="input-container" @click="focusInput">
    <input
      ref="input"
      type="text"
      id="input"
      spellcheck="false"
      placeholder="Hi, DragonLi!"
      v-model="value"
    />
    <div id="shadow-region">
      <div id="no-drag-region">{{ value }}</div>
      <div id="drag-region"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: ['modelValue'],
  emits: ['update:modelValue'],
  mounted() {
    this.focusInput()
  },
  methods: {
    focusInput() {
      (this.$refs.input as HTMLInputElement).focus()
    }
  },
  computed: {
    value: {
      get() { return this.modelValue; },
      set(value: string) {
        this.$emit('update:modelValue', value)
      }
    }
  },
});
</script>


<style scoped>
#input-container {
  height: 100%;
  position: relative;
  font-size: 24px;
  display: flex;
  align-items: center;
  flex-grow: 1;
}

#input {
  width: 100%;
  outline: none;
  border: none;
  font-size: 24px;
  z-index: 1;
}

#shadow-region {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

#no-drag-region {
  -webkit-app-region: no-drag;
  opacity: 0;
  height: fit-content;
  margin-right: 4px;
  z-index: 0;
  align-self: center;
  cursor: text;
}

#drag-region {
  flex-grow: 1;
  z-index: 2;
}
</style>