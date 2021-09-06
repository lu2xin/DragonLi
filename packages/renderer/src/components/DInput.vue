 <template>
  <div class="layout">
    <div class="holder">
      <div class="lay2">
        <input
          type="text"
          ref="evil"
          class="evil"
          placeholder="Hi DragonLi"
          @change="textChange"
          v-model="text"
          @keyup="keyup"
        />
      </div>
      <div class="lay1">
        <div class="ghost" ref="ghost">{{ ghost }}</div>
      </div>

      <div class="lay3" @click="clickBlock" ref="lay3"></div>
    </div>
    <div class="setup">
      <img src="../../assets/logo.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { debounce } from "../utils/helper";
export default defineComponent({
  components: {},
  props: {
    change: Function,
  },
  data() {
    return {
      text: "",
      ghost: "",
    };
  },
  methods: {
    textChange(e) {
      this.changeFn(this.text);
    },
    keyup(e) {
      console.log(
        "%cDInput.vue line:44 this.text",
        "color: #007acc;",
        this.text
      );
      if (!this.changeFn) {
        this.changeFn = debounce(this.change, 100);
      }
      this.ghost = this.text;
      this.$nextTick(this.calcuteLayLeft);
      this.changeFn(this.text);
    },
    clickBlock() {
      this.$refs.evil.focus();
    },
    calcuteLayLeft() {
      // debugger;
      this.$refs.lay3.style.left = 10 + this.$refs.ghost.clientWidth + "px";
    },
  },
  mounted() {
    // debugger
  },
});
</script>
<style scoped>
.layout {
  display: flex;
  height: 56px;
}
.evil {
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 24px;
  padding-left: 10px;
}

.holder {
  position: relative;
  font-size: 24px;
  width: 100%;
  flex: 1;
}

.setup {
  margin-left: 10px;
}

.setup img {
  width: 60px;
}

.ghost {
  visibility: hidden;
}

.lay1 {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

.lay2 {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
  height: 100%;
}

.lay3 {
  position: absolute;
  left: 10px;
  z-index: 3;
  width: 100%;
  height: 100%;
}
</style>