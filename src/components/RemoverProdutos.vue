<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold text-center mb-6">Nossos produtos</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(produto, index) in produtos" :key="index"
                class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <div class="w-full flex justify-end">
                    <botao-remover />
                </div>
                <img :src="produto.imagem" alt="Imagem do Produto" class="w-full h-48 object-cover rounded-lg mb-4">
                <Button />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import Button from './Button.vue';
import BotaoRemover from './BotaoRemover.vue';

@Options({
    components: {
        BotaoRemover,
        Button
    }
})
export default class Produtos extends Vue {
    produtos: Array<{ imagem: string }> = [];

    async mounted() {
        await this.carregarProdutos()
    }

    //carregar produtos
    async carregarProdutos() {
        try {
            const response = await axios.get(
                'http://localhost/Projetos/ja-quero-pijamas/backend/api/listar_produtos.php'
            )
            this.produtos = response.data.produtos

            this.$emit('produto-atualizado')
        } catch (error) {
            console.error('Erro ao carregar produtos:', error)
        }
    }

    produtoAdicionado(produto: { imagem: string }) {
        this.produtos.push(produto)
    }
}
</script>
