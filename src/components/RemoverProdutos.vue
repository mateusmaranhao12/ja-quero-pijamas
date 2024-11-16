<template>
    <div class="container mx-auto p-4">
        <div v-if="mensagem"
            :class="['mt-5 mb-5 border-l-4 p-4', tipoMensagem === 'success' ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700']"
            role="alert">
            <p class="font-bold" v-if="tipoMensagem === 'error'">Erro</p>
            <p class="font-bold" v-if="tipoMensagem === 'success'">Sucesso</p>
            <p>{{ mensagem }}</p>
        </div>
        <h1 class="text-2xl font-bold text-center mb-6">Nossos produtos</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(produto, index) in produtos" :key="index"
                class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <div class="w-full flex justify-end">
                    <botao-remover :produtoId="produto.id" @remover-produto="removerProduto(produto.id)" />
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
    produtos: Array<{ id: number, imagem: string }> = []
    mensagem: string | null = null
    tipoMensagem: 'success' | 'error' | null = null

    async mounted() {
        await this.carregarProdutos()
    }

    //carregar produtos
    async carregarProdutos() {
        try {
            const response = await axios.get('http://mateusnmaranhao.wuaze.com/api/listar_produtos.php');
            this.produtos = response.data.produtos
        } catch (error) {
            console.error('Erro ao carregar produtos:', error)
        }
    }

    async removerProduto(idProduto: number) {
        try {
            const response = await axios.post(
                'http://mateusnmaranhao.wuaze.com/api/remover_produto.php',
                { id: idProduto },  // Envia o ID como JSON
                { headers: { 'Content-Type': 'application/json' } } // Certifique-se de definir o tipo de conteúdo
            );

            if (response.data.success) {
                this.produtos = this.produtos.filter(produto => produto.id !== idProduto)
                this.definirMensagem('Produto removido com sucesso!', 'success')
            } else {
                this.definirMensagem(response.data.message || 'Erro ao remover o produto.', 'error')
            }
        } catch (error) {
            console.error('Erro ao remover produto:', error);
        }
    }

    definirMensagem(mensagem: string, tipo: 'success' | 'error') {
        this.mensagem = mensagem
        this.tipoMensagem = tipo

        // Limpar a mensagem após 5 segundos
        setTimeout(() => {
            this.mensagem = null
            this.tipoMensagem = null
        }, 5000)
    }
}
</script>
