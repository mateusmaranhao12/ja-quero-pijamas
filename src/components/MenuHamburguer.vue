<template>
    <!-- Menu Hamburguer -->
    <button @click="toggleMenu" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
        aria-controls="navbar-default" :aria-expanded="isMenuOpen.toString()">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
        </svg>
    </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class MenuHamburguer extends Vue { 

    public toggleMenu() {
        this.$emit('toggle-menu')
    }

    public isMenuOpen() {
        this.$emit('is-menu-open')
    }
    
}
</script>