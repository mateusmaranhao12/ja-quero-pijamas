<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold text-center mb-6">Nossos produtos</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(pijama, index) in pijamas" :key="index"
                class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <img :src="pijama.imagem" :alt="`Produto ${index + 1}`" class="w-full h-48 object-cover rounded-lg mb-4">
                <Button />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Button from './Button.vue';
import axios from 'axios'

@Options({
    components: {
        Button
    }
})
export default class Produtos extends Vue {

    pijamas: Array<{ imagem: string }> = []

    async mounted() {
        await this.carregarProdutos()
    }

    //carregar produtos
    async carregarProdutos() {
        try {
            const response = await axios.get('http://mateusnmaranhao.wuaze.com/api/adicionar_produto.phplistar_produtos.php');
            this.pijamas = response.data.produtos
        } catch (error) {
            console.error('Erro ao carregar produtos:', error)
        }
    }

}
</script>
