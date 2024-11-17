<template>
    <quem-somos />
    <div class="bg-sky-50">
        <precos />
    </div>
    <div class="bg-sky-100">
        <videos />
    </div>
    <div class="bg-gray-100">
        <produtos />
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Produtos from '../components/Produtos.vue'
import QuemSomos from '../components/QuemSomos.vue'
import Videos from '../components/Videos.vue'
import Precos from '@/components/Precos.vue'

@Options({
    components: {
        Precos,
        Produtos,
        QuemSomos,
        Videos
    }
})
export default class Index extends Vue {}
</script>