<template>
    <div>
        <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none 
            focus:ring-4 focus:ring-red-300 font-medium
            text-sm px-3.5 py-2.5 text-center me-2 mb-2">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
})
export default class BotaoRemover extends Vue { }
</script>

<style lang="scss">
    button {
        border-radius: 100%;
    }
</style>