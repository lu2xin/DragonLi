 <template>
  <div id="input-container" @click="focusInput">
    <input
      ref="input"
      type="text"
      id="input"
      spellcheck="false"
      placeholder="Hi, DragonLi!"
      v-model="text"
      @input="textChange"
    />
    <div id="shadowRect">
      <div id="noDragRect">{{ text }}</div>
      <div id="dragRect"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  data() {
    return {
      text: '',
    }
  },
  mounted() {
    this.focusInput()
  },
  methods: {
    textChange() {
      console.log(this.text)
    },
    focusInput() {
      (this.$refs.input as HTMLInputElement).focus()
    }
  }
});
</script>


<style scoped>
#input-container {
  width: 100%;
  height: 100%;
  position: relative;
  font-size: 24px;
  display: flex;
  align-items: center;
}

#input {
  width: 100%;
  outline: none;
  border: none;
  font-size: 24px;
  z-index: 1;
}

#shadowRect {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

#noDragRect {
  -webkit-app-region: no-drag;
  opacity: 0;
  height: fit-content;
}

#dragRect {
  flex-grow: 1;
}
</style>