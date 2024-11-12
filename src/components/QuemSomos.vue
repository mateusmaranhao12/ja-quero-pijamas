<template>
    <div class="container mx-auto p-4">
        <div class="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">
            <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-2/4">
                <h1 class="text-5xl font-bold">Quem somos?</h1>
                <p class="w-3/4">
                    A nossa loja teve um começo interessante, ela veio por meio de gosto pessoal, por gostar muito de
                    pijamas
                    comprava ou amava ganhar também, dias de folga pra mim é poder ficar o dia de folga em casa com ele,
                    por
                    ser muito confortável e visualmente bonito.
                    E um dia mexendo nas gavetas cheias de pijamas, pensei por que não me jogar nesse universo.
                    Ao pensar em qual nome dar para minha pequena loja, me veio um algo que sempre falei quando me
                    perguntavam o que eu queria ganhar de presente.
                    Já Quero Pijama...
                    Por me identificar foi criado o nome da loja.
                    Onde já estamos a quase 3 anos no mercado atendo clientes assim como eu apaixonados por pijamas.
                    E o que vendemos além de qualidade é conforto tentando atender a todos com o mesmo carinho e atenção
                    de
                    quando eu ia comprar os meus queridinhos que me fazem companhia no meu momento em casa com a
                    família.
                </p>
            </div>
            <img src="../assets/imgs/img1.png" alt="Imagem Quem Somos"
                class="w-3/4 md:w-1/3 h-auto rounded-lg shadow-lg">
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
})
export default class QuemSomos extends Vue { }
</script>