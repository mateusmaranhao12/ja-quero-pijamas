<template>
    <form class="formulario max-w-sm mx-auto">
        <h1 class="text-2xl my-3.5 text-center uppercase font-bold">Login de administrador</h1>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-cyan-950 dark:text-cyan-950">E-mail</label>
            <input type="email" id="email"
                class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Digite seu e-mail" />
        </div>
        <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
        <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Fazer login</button>
    </form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class LoginAdmin extends Vue { }
</script>

<style lang="scss">
    @import '../scss/forms.scss';
</style>