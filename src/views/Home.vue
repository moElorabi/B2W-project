<template>
    <div class="home">
        <div><navBar /></div>

        <cards
            v-for="jCard of jCards"
            :key="jCard.id"
            :name="jCard.version.name"
        />
        <cart />
    </div>
</template>

<script>
import navBar from "@/components/navBar";
import cards from "@/components/cards";
import cart from "@/components/cart";
import card from "../cardsAPI";

export default {
    data() {
        return {
            jCards: []
        };
    },
    mounted() {
        card.listar().then(response => {
            this.jCards = response.data.game_indices;
        });
    },
    name: "Home",
    components: {
        navBar,
        cards,
        cart
    }
};
</script>

<style lang="scss" scoped>
.home {
    height: 135px;
}
</style>
