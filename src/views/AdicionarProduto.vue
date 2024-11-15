<template>
    <div class="text-right mr-5 mt-5">
        <button @click="logout" type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            <i class="fa-solid fa-right-from-bracket"></i> Logout</button>
    </div>
    <form class="formulario max-w-sm mx-auto">
        <h1 class="text-2xl my-3.5 text-center uppercase font-bold">Adicionar produto</h1>
        <div class="mb-5">

            <label class="block mb-2 text-sm font-medium text-gray-900" for="default_size">Escolha a imagem do
                produto</label>
            <input
                class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                id="default_size" type="file">

        </div>
        <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Adicionar Produto</button>
    </form>

    <div class="bg-gray-200 mt-20">
        <remover-produtos />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import RemoverProdutos from '../components/RemoverProdutos.vue'

@Options({
    components: {
        RemoverProdutos
    }
})
export default class AdicionarProduto extends Vue {

    public logout() {
        localStorage.removeItem('user-authenticated');
        this.$router.push('/login-admin');
    }

}
</script>

<style lang="scss">
@import '../scss/forms.scss';
</style>