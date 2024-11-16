<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold text-center mb-6">Vídeos de alguns de nossos produtos</h1>
        <div class="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 justify-center items-center">
            <div class="relative w-full md:w-1/4">
                <div class="absolute top-2 right-2 z-10">
                    <botao-remover-video />
                </div>
                <video controls class="w-full h-auto rounded-lg">
                    <source src="../assets/imgs/video1.mp4" type="video/mp4">
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Produtos from '../components/Produtos.vue'
import QuemSomos from '../components/QuemSomos.vue'
import Videos from '../components/Videos.vue'
import BotaoRemoverVideo from '../components/BotaoRemoverVideo.vue'

@Options({
    components: {
        Produtos,
        QuemSomos,
        Videos,
        BotaoRemoverVideo
    }
})
export default class RemoverVideo extends Vue { }
</script>