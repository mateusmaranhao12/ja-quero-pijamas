<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold text-center mb-6">Nossos produtos</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(pijama, index) in pijamas" :key="index"
                class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <div class="w-full flex justify-end">
                    <botao-remover />
                </div>
                <img :src="require(`@/assets/imgs/${pijama.image}`)" :alt="`Produto ${index + 1}`" class="w-full h-48 object-cover rounded-lg mb-4">
                <Button />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Button from './Button.vue';
import BotaoRemover from './BotaoRemover.vue'

@Options({
    components: {
        BotaoRemover,
        Button
    }
})
export default class Produtos extends Vue {

    pijamas = [
        {
            image: 'img2.jpeg'
        },
        {
            image: 'img3.jpeg'
        },
        {
            image: 'img4.jpeg'
        },
        {
            image: 'img5.jpeg'
        },
        {
            image: 'img6.jpeg'
        },
        {
            image: 'img7.jpeg'
        },
        {
            image: 'img8.jpeg'
        },
        {
            image: 'img9.jpeg'
        },
        {
            image: 'img10.jpeg'
        },
        {
            image: 'img11.jpeg'
        },
        {
            image: 'img12.jpeg'
        },
        {
            image: 'img13.jpeg'
        },
        {
            image: 'img14.jpeg'
        },
        {
            image: 'img15.jpeg'
        },
        {
            image: 'img16.jpeg'
        },
        {
            image: 'img17.jpeg'
        },
        {
            image: 'img18.jpeg'
        },
        {
            image: 'img19.jpeg'
        }
    ]

}
</script>
