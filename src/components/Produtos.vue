<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold text-center mb-6">Nossos produtos</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(pijama, index) in pijamas" :key="index"
                class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <img :src="require(`@/assets/imgs/${pijama.image}`)" :alt="`Produto ${index + 1}`" class="w-full h-48 object-cover rounded-lg mb-4">
                <h2 class="text-lg font-semibold mb-2">{{ pijama.nome }}</h2>
                <p class="text-gray-700 mb-4">{{ pijama.descricao }}</p>
                <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Entrar em contato</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Produtos extends Vue {

    pijamas = [
        {
            nome: 'Pijama 1',
            descricao: 'Descrição breve do produto 1.',
            image: 'img2.jpeg'
        },
        {
            nome: 'Pijama 2',
            descricao: 'Descrição breve do produto 2.',
            image: 'img3.jpeg'
        },
        {
            nome: 'Pijama 3',
            descricao: 'Descrição breve do produto 3.',
            image: 'img4.jpeg'
        },
        {
            nome: 'Pijama 4',
            descricao: 'Descrição breve do produto 4.',
            image: 'img5.jpeg'
        },
        {
            nome: 'Pijama 5',
            descricao: 'Descrição breve do produto 5.',
            image: 'img6.jpeg'
        },
        {
            nome: 'Pijama 6',
            descricao: 'Descrição breve do produto 6.',
            image: 'img7.jpeg'
        },
        {
            nome: 'Pijama 7',
            descricao: 'Descrição breve do produto 7.',
            image: 'img8.jpeg'
        },
        {
            nome: 'Pijama 8',
            descricao: 'Descrição breve do produto 8.',
            image: 'img9.jpeg'
        },
        {
            nome: 'Pijama 9',
            descricao: 'Descrição breve do produto 9.',
            image: 'img10.jpeg'
        },
        {
            nome: 'Pijama 10',
            descricao: 'Descrição breve do produto 10.',
            image: 'img11.jpeg'
        },
        {
            nome: 'Pijama 11',
            descricao: 'Descrição breve do produto 11.',
            image: 'img12.jpeg'
        },
        {
            nome: 'Pijama 12',
            descricao: 'Descrição breve do produto 12.',
            image: 'img13.jpeg'
        },
        {
            nome: 'Pijama 13',
            descricao: 'Descrição breve do produto 13.',
            image: 'img14.jpeg'
        },
        {
            nome: 'Pijama 14',
            descricao: 'Descrição breve do produto 14.',
            image: 'img15.jpeg'
        },
        {
            nome: 'Pijama 15',
            descricao: 'Descrição breve do produto 15.',
            image: 'img16.jpeg'
        },
        {
            nome: 'Pijama 16',
            descricao: 'Descrição breve do produto 16.',
            image: 'img17.jpeg'
        },
        {
            nome: 'Pijama 17',
            descricao: 'Descrição breve do produto 17.',
            image: 'img18.jpeg'
        },
        {
            nome: 'Pijama 18',
            descricao: 'Descrição breve do produto 18.',
            image: 'img19.jpeg'
        }
    ]

}
</script>
