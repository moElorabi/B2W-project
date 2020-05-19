<template>
    <div>
        <!-- cart for big screen -->
        <div class="cart">
            <b-card text-variant="white" header="Carrinho" class="text-center">
                <div class="product-body"></div>
                <div class="finalize">
                    <div class="divider-one"></div>
                    <p class="final-price">
                        Preço Final: <span class="final-price-num"></span> R$
                    </p>
                    <div class="divider-two"></div>

                    <button
                        style="cursor:no-drop"
                        v-b-modal.modal-center
                        type="button"
                        class="btn btn-secondary btn-fnc"
                        v-on:click="finalizar"
                    >
                        Finalizar a Compra
                    </button>
                    <b-modal id="modal-center" centered title="Obrigada">
                        <p class="my-4">você ganhou de volta 10R$!</p>
                    </b-modal>
                </div>
            </b-card>
        </div>

        <!-- cart for small screen -->
        <div class="mb-3 sm-btn d-md-none">
            <b-button v-b-toggle.my-sidebar>Carrinho</b-button>
        </div>

        <b-sidebar
            id="my-sidebar"
            bg-variant="transparent"
            class="d-sm-none"
            backdrop
        >
            <div class="px-3 py-2 ">
                <b-card
                    text-variant="white"
                    header="Carrinho"
                    class="text-center-xs "
                    ><div class="product-body-sm"></div>
                    <div class="finalize">
                        <div class="divider-one"></div>
                        <p class="final-price">
                            Preço Final:
                            <span class="final-price-num-sm"></span> R$
                        </p>
                        <div class="divider-two"></div>

                        <button
                            style="cursor:no-drop"
                            v-b-modal.modal-center
                            type="button"
                            class="btn btn-d-sm btn-fnc-sm"
                            v-on:click="finalizar"
                        >
                            Finalizar a Compra
                        </button>
                    </div>
                </b-card>
            </div>
        </b-sidebar>
    </div>
</template>

<script>
export default {
    methods: {
        finalizar: function() {
            setTimeout(() => {
                location.reload();
            }, 3000);
        }
    },
    name: "cart"
};
</script>

<style lang="scss" scoped>
.media-body {
    flex: auto;
    margin-left: 5px;
}
.cartt {
    z-index: 1000;
}
.product-body {
    max-height: 285px;
    overflow: auto;
}
.media {
    margin-bottom: 10px;
    margin-top: 10px;
}
.media-body {
    text-align: left;
}
.text-white {
    color: #fff;
    height: 500px;
    width: 297px;
    position: fixed;
    background-color: #f77f00;
    float: right;
}
.finalize {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
.divider-two {
    border: solid 1px #d62828;
}
.divider-one {
    border: solid 1px #d62828;
}
.btn-secondary {
    margin-top: 12px;
    background-color: #d62828;
    border: none;
    opacity: 0.5;
    &:hover {
        color: #fff;
        background-color: #d62828;
        border: none;
        box-shadow: none;
    }
    &:focus {
        color: #fff;
        background-color: #d62828;
        border: none;
        box-shadow: none;
    }
}
.btn-secondary:not(:disabled):not(.disabled):active:focus,
.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active:focus {
    box-shadow: none;
    color: #fff;
    background-color: #d62828;
}
.final-price {
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: left;
}
.card-header:first-child {
    border-color: #d62828;
}
.media-body {
    margin-left: 20px;
}
@media only screen and (max-width: 600px) {
    .btn-d-sm {
        margin-top: 12px;
        background-color: #d62828;
        color: #fff;
        border: none;
        &:hover {
            background-color: #d62828;
            color: #fff;
            border: none;
            box-shadow: none;
        }
        &:focus {
            color: #fff;
            background-color: #d62828;
            border: none;
            box-shadow: none;
        }
    }

    .final-price {
        margin-top: 15px;
        margin-bottom: 15px;
        text-align: left;
    }

    .finalize {
        margin-top: 20px;
    }
    .divider-two {
        border: solid 1px #d62828;
    }
    .divider-one {
        border: solid 1px #d62828;
    }
    .text-white {
        color: #fff;
        height: 500px;
        width: 297px;
        position: fixed;
        background-color: #f77f00;
        float: right;
        border-radius: 10px;
    }
    .mb-3 {
        position: fixed;
        bottom: 0;
        right: 20px;
    }
    .btn-secondary {
        background-color: #f77f00;
        border: solid 1px #003049;
        opacity: 1;
        &:hover {
            background-color: #003049;
            color: #d62828;
        }
        &:focus {
            box-shadow: none;
            border: solid 1px #003049;
            background-color: #003049;
            color: #d62828;
            border: none;
        }
    }
    .btn-secondary:not(:disabled):not(.disabled):active,
    .btn-secondary:not(:disabled):not(.disabled):active:focus {
        box-shadow: none;
        border: solid 1px #003049;
        background-color: #003049;
        color: #d62828;
    }
    .row {
        margin-top: 60px;
        margin-left: -5px;
    }
    .card {
        margin-bottom: 20px;
    }
    .text-center {
        display: none;
    }
    .product-body-sm {
        max-height: 285px;
        overflow: auto;
    }
    .media-body-sm {
        margin-left: 0;
    }
    .btn-fnc-sm {
        opacity: 0.5;
    }
}
@media only screen and (min-width: 600px) {
    .sm-btn {
        display: none;
    }
    .text-white {
        position: fixed;
        top: 170px;
        right: 18px;
        width: 225px;
        width: 35%;
    }
}
@media only screen and (min-width: 768px) {
    .text-white {
        position: fixed;
        top: 170px;
        right: 18px;
        width: 225px;
        width: 40%;
        margin-right: 25px;
    }
}

@media only screen and (min-width: 992px) {
    .text-white {
        position: fixed;
        top: 137px;
        right: 0px;
        width: 30%;
    }
}

@media only screen and (min-width: 1200px) {
    .text-white {
        position: fixed;
        top: 137px;
        right: 28px;
        width: 25%;
    }
}
</style>
