<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold text-center mb-6">Videos de alguns de nossos produtos</h1>
        <div class="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 justify-center items-center">
            <video controls class="w-full md:w-1/4 h-auto rounded-lg">
                <source src="../assets/imgs/video1.mp4" type="video/mp4">
                Seu navegador não suporta o elemento de vídeo.
            </video>
            <video controls class="w-full md:w-1/4 h-auto rounded-lg">
                <source src="../assets/imgs/video2.mp4" type="video/mp4">
                Seu navegador não suporta o elemento de vídeo.
            </video>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Videos extends Vue { }
</script>
