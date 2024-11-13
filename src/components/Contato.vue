<template>
    <li>
        <button @click="linkWhatsapp" type="button" class="text-white bg-gradient-to-r 
            from-green-400 via-green-500 to-green-600
             hover:bg-gradient-to-br focus:ring-4 
             focus:outline-none focus:ring-green-300 
             dark:focus:ring-green-800 font-medium rounded-full 
             text-2xl px-5 py-2.5 text-center me-2 mb-2">
            <i class="fa-brands fa-whatsapp"></i></button>
    </li>
    <li>
        <button @click="linkInstagram" type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 
            hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 
            dark:focus:ring-pink-800 font-medium rounded-full text-2xl px-5 
            py-2.5 text-center me-2 mb-2"><i class="fa-brands fa-instagram"></i></button>
    </li>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Contato extends Vue {

    public linkWhatsapp() {
        window.open('https://wa.link/frr87u')
    }

    public linkInstagram() {
        window.open('https://www.instagram.com/jaquero_pijamas/')
    }

}
</script>