<template>
    <div class="cards-components">
        <b-container fluid class="bv-example-row conta">
            <div class="cards-div">
                <b-row>
                    <!-- card -->
                    <div class="mb-sm-4">
                        <b-card
                            no-body
                            style="max-width: 20rem;"
                            img-src="https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/45ab01c6-b582-4f25-85a8-3e4938ad8da2/8970e706-6f22-4192-a207-d1b2e4e36d36_560_420.jpg"
                            img-alt="Image"
                            img-top
                        >
                            <b-card-body>
                                <b-card-title
                                    ><span class="name">{{
                                        name
                                    }}</span></b-card-title
                                >
                            </b-card-body>

                            <b-list-group flush>
                                <b-list-group-item id="price"
                                    >Preço :
                                    <span class="num"
                                        >12R$</span
                                    ></b-list-group-item
                                >
                            </b-list-group>

                            <b-card-body v-on:click="addingThecard(name)">
                                <span class="buy"
                                    >ADD
                                    <svg
                                        class="bi bi-plus-square-fill"
                                        width="15px"
                                        height="15px"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm6.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z"
                                            clip-rule="evenodd"
                                        /></svg
                                ></span>
                            </b-card-body>
                        </b-card>
                    </div>
                </b-row>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    methods: {
        //  buying a card
        addingThecard: function(name) {
            // media div for big screen
            let mediaDiv = document.createElement("div");

            mediaDiv.className = "media";
            mediaDiv.style.marginTop = "10px";

            // media div for small screen
            let mediaDivSm = document.createElement("div");

            mediaDivSm.className = "media";
            mediaDivSm.style.marginTop = "10px";

            // img for big screen
            let mainImg = document.createElement("img");

            mainImg.style.marginRight = "5px";
            mainImg.setAttribute(
                "src",
                "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/45ab01c6-b582-4f25-85a8-3e4938ad8da2/8970e706-6f22-4192-a207-d1b2e4e36d36_560_420.jpg"
            );
            mainImg.setAttribute("alt", "card-pic");
            mainImg.setAttribute("height", "50px");
            mainImg.setAttribute("width", "50px");

            // img for small screen
            let mainImgSm = document.createElement("img");

            mainImgSm.style.marginRight = "5px";
            mainImgSm.setAttribute(
                "src",
                "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit/cdn/45ab01c6-b582-4f25-85a8-3e4938ad8da2/8970e706-6f22-4192-a207-d1b2e4e36d36_560_420.jpg"
            );
            mainImgSm.setAttribute("alt", "card-pic");
            mainImgSm.setAttribute("height", "50px");
            mainImgSm.setAttribute("width", "50px");

            // cardName for big screen
            let nameSpan = document.createElement("span");
            nameSpan.className = "media-body";
            nameSpan.style.flex = "none";
            nameSpan.style.width = "90px";
            nameSpan.style.marginLeft = "-10px";
            nameSpan.textContent = name;

            // cardName for small screen
            let nameSpanSm = document.createElement("span");
            nameSpanSm.className = "media-body";
            nameSpanSm.style.flex = "none";
            nameSpanSm.style.width = "90px";
            nameSpan.style.marginLeft = "-10px";
            nameSpanSm.textContent = name;

            // price for big screen
            let priceSpan = document.createElement("span");
            priceSpan.className = "media-body";
            priceSpan.innerHTML = document.getElementById("price").innerHTML;

            // price for small screen
            let priceSpanSm = document.createElement("span");
            priceSpanSm.className = "media-body-sm";
            priceSpanSm.innerHTML = document.getElementById("price").innerHTML;

            // appendingChild for big screen
            mediaDiv.appendChild(mainImg);
            mediaDiv.appendChild(nameSpan);
            mediaDiv.appendChild(priceSpan);
            document.querySelector(".product-body").appendChild(mediaDiv);

            // appendingChild for small screen
            mediaDivSm.appendChild(mainImgSm);
            mediaDivSm.appendChild(nameSpanSm);
            mediaDivSm.appendChild(priceSpanSm);
            document.querySelector(".product-body-sm").appendChild(mediaDivSm);

            // final price for big screen
            document.querySelector(".final-price-num").innerHTML =
                parseInt(document.querySelector(".num").innerHTML) *
                parseInt(document.querySelectorAll(".product-body img").length);

            // final price for small screen
            document.querySelector(".final-price-num-sm").innerHTML =
                parseInt(document.querySelector(".num").innerHTML) *
                parseInt(
                    document.querySelectorAll(".product-body-sm img").length
                );

            // buy btn for big and small screen
            if (document.querySelectorAll(".product-body img").length > 0) {
                document.querySelector(".btn-fnc").style.cursor = "pointer";
                document.querySelector(".btn-fnc").style.opacity = "1";
                document.querySelector(".btn-fnc-sm").style.cursor = "pointer";
                document.querySelector(".btn-fnc-sm").style.opacity = "1";
            }
        }
    },
    props: ["name"],
    name: "cards"
};
</script>

<style scoped lang="scss">
.buy {
    cursor: pointer;
    color: #d62828;
}

.card-link {
    font-weight: bold;
    color: #d62828;
}
svg {
    overflow: hidden;
    vertical-align: text-top;
}

.card {
    border-color: #003049;
    width: 475%;
}
.card > .list-group {
    text-align: left;
}
.card-title {
    margin-bottom: 0;
}
.row {
    margin-left: 5px;
    float: left;
    display: flex;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .row {
        margin-top: 60px;
        margin-left: 10px;
        margin-bottom: -50px;
    }
    .card {
        margin-bottom: 20px;
        width: 85%;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .row {
        margin-top: 35px;
        margin-right: 40px;
        margin-left: 9px;
        margin-bottom: -30px;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .row {
        margin-right: 200px;
        margin-left: 9px;
        margin-bottom: -30px;
    }

    .card {
        width: 85%;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .row {
        margin: 0 100px 0px -150px;
    }
    .card {
        width: 75%;
    }

    .conta {
        width: 65%;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .text-white {
        position: fixed;
        top: 137px;
        right: 28px;
    }
    .row {
        margin: 0 100px 0px -150px;
    }
    .card {
        width: 75%;
    }

    .text-center {
        width: 25%;
    }

    .conta {
        width: 75%;
    }
}
</style>
