<template>
    <form class="formulario max-w-sm mx-auto mb-5" @submit.prevent="fazerLogin">
        <h1 class="text-2xl my-3.5 text-center uppercase font-bold">Login de administrador</h1>

        <!-- Alerta de erro -->
        <div v-if="erroMensagem" class="mt-5 mb-5 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
            <p class="font-bold">Erro</p>
            <p>{{ erroMensagem }}</p>
        </div>

        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-cyan-950 dark:text-cyan-950">E-mail</label>
            <input v-model="email" type="email" id="email" required
                class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Digite seu e-mail" />
        </div>
        <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Senha</label>
            <input v-model="senha" type="password" id="password" required placeholder="Digite sua senha"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
        <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Fazer login
        </button>
    </form>
</template>

<script lang="ts">
import axios from 'axios';
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {}
})
export default class LoginAdmin extends Vue {
    email = ''
    senha = ''
    erroMensagem: string | null = null  // Variável para armazenar a mensagem de erro

    async fazerLogin() {
        try {
            const response = await axios.post('https://linknest.com.br/ja-quero-pijamas/api/login.php', {
                email: this.email,
                senha: this.senha
            })

            console.log('Resposta do servidor:', response.data)

            if (response.data.success) {
                // Salvar a autenticação no localStorage
                localStorage.setItem('user-authenticated', 'true')
                this.$router.push('/adicionar-produto')
            } else {
                this.erroMensagem = response.data.message || 'Erro no login!'
                this.limparErroDepoisDeTempo()
            }
        } catch (error) {
            console.error('Erro na requisição:', error)
            this.erroMensagem = 'Erro ao tentar fazer login. Verifique suas credenciais.'
            this.limparErroDepoisDeTempo()
        }
    }

    limparErroDepoisDeTempo() {
        setTimeout(() => {
            this.erroMensagem = null
        }, 5000)
    }
}
</script>

<style lang="scss">
@import "../scss/forms.scss";
</style>
