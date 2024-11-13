<template>
    <nav class="bg-white border-gray-200 dark:bg-cyan-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a class="text-3xl text-sky-950 font-bold uppercase flex items-center space-x-3 rtl:space-x-reverse">
                <img class="size-40 rounded-full" alt="Logo Já quero pijamas" src="../assets/imgs/logo.jpg">
            </a>

            <MenuHamburguer @toggle-menu="toggleMenu" :is-menu-open="isMenuOpen" />

            <!-- Links de Contato -->
            <div :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }" class="w-full md:block md:w-auto"
                id="navbar-default">
                <ul class="flex space-x-4">
                    <Contato />
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MenuHamburguer from './MenuHamburguer.vue';
import Contato from './Contato.vue';

@Options({
    components: {
        Contato,
        MenuHamburguer
    }
})
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
