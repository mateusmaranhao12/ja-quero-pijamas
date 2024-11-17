<template>
    <div class="container mx-auto p-6">
        <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">Preços dos Pijamas</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="(pijama, index) in pijamas" :key="index"
                class="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">
                <h2 class="text-xl font-semibold mb-4 text-gray-700">{{ pijama.nome }}</h2>
                <p class="text-4xl font-bold text-indigo-500 mb-4">R${{ pijama.preco }}</p>
                <p class="text-gray-600">{{ pijama.descricao }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Precos extends Vue {
    pijamas = [
        {
            nome: 'Mangas Compridas',
            preco: 140,
            descricao: 'Pijamas confortáveis e quentinhos para o inverno.',
        },
        {
            nome: 'Mangas Curtas',
            preco: 115,
            descricao: 'Ótima opção para o verão, com tecidos leves.',
        },
        {
            nome: 'Infantil',
            preco: 60,
            descricao: 'Pijamas fofos e confortáveis para crianças.',
        },
    ]
}
</script>
