<template>
    <quem-somos />
    <div class="bg-sky-50">
        <videos />
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import QuemSomos from '../components/QuemSomos.vue'
import Videos from '../components/Videos.vue'

@Options({
    components: {
        QuemSomos,
        Videos
    }
})
export default class Index extends Vue {}
</script>