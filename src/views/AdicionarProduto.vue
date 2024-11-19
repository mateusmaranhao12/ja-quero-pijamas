<template>
    <div class="text-right mr-5 mt-5">
        <button @click="logout" type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            <i class="fa-solid fa-right-from-bracket"></i> Logout</button>
    </div>

    <div class="flex justify-center">
        <div v-if="mensagem"
            :class="['mt-5 mb-5 border-l-4 p-4', tipoMensagem === 'success' ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700']"
            role="alert">
            <p class="font-bold" v-if="tipoMensagem === 'error'">Erro</p>
            <p class="font-bold" v-if="tipoMensagem === 'success'">Sucesso</p>
            <p>{{ mensagem }}</p>
        </div>
    </div>

    <div class="grid grid-cols-1 gap-10 mt-10 mb-10 px-5">
        <!--<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 mb-10 px-5">-->
        <!--Card de adicionar Produto-->
        <form class="formulario max-w-sm mx-auto" @submit.prevent="adicionarProduto">
            <h1 class="text-2xl my-3.5 text-center uppercase font-bold">Adicionar produto</h1>
            <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900" for="default_size">Escolha a imagem do
                    produto</label>
                <input
                    class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    id="default_size" ref="fileInput" type="file" @change="processarImagem">
            </div>
            <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Adicionar Produto</button>
        </form>

        <!-- Card de Adicionar Vídeo -->
        <!--<form class="formulario max-w-sm mx-auto" @submit.prevent="adicionarVideo">
            <div v-if="mensagemVideo"
                :class="['mt-5 mb-5 border-l-4 p-4', tipoMensagemVideo === 'success' ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700']"
                role="alert">
                <p class="font-bold" v-if="tipoMensagemVideo === 'error'">Erro</p>
                <p class="font-bold" v-if="tipoMensagemVideo === 'success'">Sucesso</p>
                <p>{{ mensagemVideo }}</p>
            </div>
            <h1 class="text-2xl my-3.5 text-center uppercase font-bold">Adicionar Vídeo</h1>
            <div class="mb-5">
                <label class="block mb-2 text-sm font-medium text-gray-900" for="videoProduto">Escolha o vídeo do
                    produto</label>
                <input
                    class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    id="videoProduto" ref="fileInputVideo" type="file" @change="processarVideo">
            </div>
            <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Adicionar Vídeo</button>
        </form>-->
    </div>

    <!--<div class="bg-gray-100 mt-20">
        <remover-videos ref="videos" />
    </div>-->

    <div class="bg-gray-200">
        <remover-produtos ref="produtos" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import RemoverProdutos from '../components/RemoverProdutos.vue'

@Options({
    components: {
        RemoverProdutos
    }
})

export default class AdicionarProduto extends Vue {
    imagem: File | null = null
    mensagem: string | null = null  // Variável para armazenar a mensagem de erro
    tipoMensagem: 'success' | 'error' | null = null

    mensagemVideo: string | null = null
    tipoMensagemVideo: string | null = null

    declare $refs: {
        fileInput: HTMLInputElement
        fileInputVideo: HTMLInputElement
    }

    //logout
    public logout() {
        localStorage.removeItem('user-authenticated')
        this.$router.push('/login-admin')
    }

    //processar imagem
    processarImagem(event: Event) {
        const target = event.target as HTMLInputElement
        if (target.files && target.files[0]) {

            const arquivo = target.files[0]

            // Tipos MIME aceitos
            const tiposValidos = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/webp']

            if (tiposValidos.includes(arquivo.type)) {
                this.imagem = arquivo
            } else {
                this.definirMensagem('Por favor, escolha um formato de imagem válido (PNG, JPEG, SVG, WebP).', 'error')
            }

        }
    }

    // Após adicionar o produto no backend, adicione a imagem ao array de produtos diretamente no frontend:
    async adicionarProduto() {

        if (!this.imagem) {
            this.definirMensagem('Por favor, escolha uma imagem.', 'error')
            return
        }

        const formData = new FormData()
        formData.append('imagem', this.imagem)

        try {
            const response = await axios.post(
                'https://ja-quero-pijamas-backend.onrender.com/adicionar-produto',
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            if (response.data.success) {
                this.definirMensagem('Produto adicionado com sucesso!', 'success')

                // Receber o ID do produto retornado pela API
                const idProduto = response.data.id

                // Emitir o evento com o produto, incluindo o id
                this.$emit('produto-adicionado', { id: idProduto, imagem: this.imagem })

                // Limpar o campo de input
                const inputFile = this.$refs.fileInput as HTMLInputElement
                if (inputFile) {
                    inputFile.value = '' // Limpar o campo de input
                    const label = inputFile.nextElementSibling as HTMLElement
                    if (label) {
                        label.innerText = 'Nenhum arquivo escolhido'
                    }
                }
            } else {
                this.definirMensagem(response.data.message || 'Erro ao adicionar o produto.', 'error')
            }
        } catch (error) {
            console.error(error);
            this.definirMensagem('Erro ao enviar o produto.', 'error')
        }
    }

    //adicionar video
    /*async adicionarVideo() {
        const formData = new FormData()
        const fileInput = this.$refs.fileInputVideo as HTMLInputElement

        if (fileInput && fileInput.files && fileInput.files[0]) {
            const videoFile = fileInput.files[0]
            formData.append("video", videoFile)

            // Log do FormData
            console.log("FormData sendo enviado:", formData)

            try {
                const response = await axios.post(
                    'http://localhost/Projetos/ja-quero-pijamas/backend/api/adicionar_video.php',
                    formData,
                    { headers: { 'Content-Type': 'multipart/form-data' } }
                )

                console.log("Resposta do servidor:", response.data)

                if (response.data.success) {
                    this.definirMensagem('Vídeo adicionado com sucesso!', 'success')
                } else {
                    this.definirMensagem('Erro ao adicionar vídeo.', 'error')
                }

                // Limpar o campo de input
                const inputFile = this.$refs.fileInputVideo as HTMLInputElement
                if (inputFile) {
                    inputFile.value = '' // Limpar o campo de input
                    const label = inputFile.nextElementSibling as HTMLElement
                    if (label) {
                        label.innerText = 'Nenhum arquivo escolhido'
                    }
                }

            } catch (error) {
                console.error('Erro de requisição:', error)
                this.definirMensagem('Erro ao adicionar vídeo.', 'error')
            }
        } else {
            this.definirMensagem('Por favor, selecione um vídeo primeiro.', 'error')
        }
    }

    //processar video
    processarVideo(event: Event) {
        const input = event.target as HTMLInputElement
        const file = input.files ? input.files[0] : null

        if (file) {
            const allowedExtensions = ['mp4', 'avi', 'mkv', 'mov', 'webm']
            const fileExtension = file.name.split('.').pop()?.toLowerCase()

            if (fileExtension && allowedExtensions.includes(fileExtension)) {
                return
            } else {
                console.error('Arquivo inválido. Apenas vídeos são permitidos.')
                this.definirMensagem('Arquivo inválido. Apenas vídeos nos formatos mp4, avi, mkv, mov e webm são permitidos.', 'error')
                this.$refs.fileInputVideo.value = ''
            }
        }
    }*/

    definirMensagem(mensagem: string, tipo: 'success' | 'error') {
        this.mensagem = mensagem;
        this.tipoMensagem = tipo;

        setTimeout(() => {
            this.mensagem = null
            this.tipoMensagem = null
        }, 5000)
    }
}
</script>