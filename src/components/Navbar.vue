<template>
    <nav class="bg-white border-gray-200 dark:bg-cyan-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a class="text-3xl text-sky-950 font-bold uppercase flex items-center space-x-3 rtl:space-x-reverse">
                <h1>Já Quero Pijamas</h1>
            </a>
            <!-- Menu Hamburguer -->
            <button @click="toggleMenu" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
                aria-controls="navbar-default" :aria-expanded="isMenuOpen.toString()">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>

            <!-- Links do Menu -->
            <div :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }" class="w-full md:block md:w-auto"
                id="navbar-default">
                <ul>
                    <li>
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                            font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 
                            dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            <i class="fa-brands fa-whatsapp"></i> Entre em contato agora mesmo!
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Navbar extends Vue {
    isMenuOpen = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
</script>

<style scoped>
button[data-collapse-toggle="navbar-default"] {
    background-color: transparent !important;
}
</style>
