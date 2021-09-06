<template>
    <input
        class="d-input"
        type="text"
        name="text"
        id="text"
        placeholder="Hi, DragonLi!"
        @keypress="inputChange"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "DInput",

    setup() {

        return {
        };
    },

    methods: {
        inputChange() {
            console.log("input change")
        }
    }
});
</script>

<style>
.d-input {
    height: 100%;
}
</style>