<template>
    <div class="home">
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"
                    ><img
                        src="//d26lpennugtm8s.cloudfront.net/stores/124/230/themes/common/logo-434866508-1564857057-d68db556b4869b61eda9867d6aa5e7051564857058.png?0"
                        alt="pokemon"
                        height="60px"
                /></a>

                <form class="form-inline">
                    <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button
                        class="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
                <div class="dropleft">
                    <b-avatar
                        class="btn btn-lg btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        rounded="lg"
                        size="3rem"
                    ></b-avatar>
                    <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <form class="px-4 py-3">
                            <div class="form-group">
                                <label for="exampleDropdownFormEmail1"
                                    >Email address</label
                                >
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleDropdownFormEmail1"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="exampleDropdownFormPassword1"
                                    placeholder="Password"
                                />
                            </div>
                            <div class="form-check">
                                <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="dropdownCheck"
                                />
                                <label
                                    class="form-check-label"
                                    for="dropdownCheck"
                                >
                                    Remember me
                                </label>
                            </div>
                            <button type="submit" class="btn btn-primary">
                                Sign in
                            </button>
                        </form>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#"
                            >New around here? Sign up</a
                        >
                        <a class="dropdown-item" href="#">Forgot password?</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            find: ""
        };
    },
    computed: {
        findCard: function() {
            return this.jCards.filter(jCard => {
                return jCard.match(this.search);
            });
        }
    },
    props: ["name"],
    name: "navBar",

    methods: {
        scroll: (window.onscroll = function() {
            window.pageYOffset >= 12
                ? (document.querySelector(".fixed-top").style.boxShadow =
                      "0px 0px 20px 0px red")
                : (document.querySelector(".fixed-top").style.boxShadow =
                      "none");
        })
    }
};
</script>

<style lang="scss" scoped>
.fixed-top {
    top: 0;
    background-color: white;
}
img {
    margin-right: 5px;
}
.form-control:focus {
    box-shadow: none;
}
.navbar .container-fluid {
    background-color: white;
}
.form-inline .form-control {
    height: 60px;
    border: solid 2px #003049;
}
.form-inline {
    width: 90%;
}
.btn-outline-success {
    height: 60px;
    border: solid 2px #003049;
    color: #d62828;
    font-weight: bold;
    &:hover {
        background-color: #fcbf49;
        border: solid 2px #d62828;
        color: #d62828;
        font-weight: bold;
    }
    &:focus {
        box-shadow: none;
    }
}
.btn-outline-success:not(:disabled):not(.disabled):active:focus {
    box-shadow: none;
}
.btn-outline-success:not(:disabled):not(.disabled):active {
    background-color: #fcbf49;
    border: solid 2px #d62828;
    color: #d62828;
    font-weight: bold;
}
.btn-secondary {
    background-color: #f77f00;
    &:hover {
        background-color: #003049;
        color: #d62828;
    }
}

.btn-secondary:not(:disabled):not(.disabled):active,
.show > .btn-secondary.dropdown-toggle {
    background-color: #003049;
    color: #d62828;
}
.dropdown-menu.show {
    background-color: #003049;
    color: #f77f00;
}

.btn-primary {
    background-color: #fcbf49;
    color: #d62828;
    border: none;
    &:hover {
        background-color: #fcbf49;
        color: #d62828;
        border: none;
    }
}
.dropdown-divider {
    border-top: 1px solid #d62828;
}
.dropdown-item {
    color: #f77f00;
    &:hover {
        background-color: unset;
        color: unset;
    }
}

.navbar .container-fluid {
    justify-content: start;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .dropleft {
        margin-left: -20px;
    }
    .form-inline .form-control {
        width: 52%;
        margin-left: 8px;
        margin-right: 10px;
    }
    .navbar-brand {
        display: inline-block;
        padding-bottom: 15px;
        text-align: center;
        margin: auto;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .form-inline .form-control {
        width: 70%;
        margin-left: 8px;
    }
    .navbar-brand {
        display: inline-block;
        padding-bottom: 15px;
        text-align: center;
        margin: auto;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .dropleft {
        margin-left: 20px;
    }
    .form-inline .form-control {
        width: 84%;
        margin-left: 8px;
    }
    .navbar-brand {
        display: inline-block;
        padding-bottom: 15px;
        text-align: center;
        margin: auto;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .dropleft {
        margin-left: 10px;
    }
    .form-inline .form-control {
        width: 86%;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .dropleft {
        margin-left: 20px;
    }
    .form-inline .form-control {
        width: 89%;
        height: 60px;
        border: solid 2px #003049;
    }
}
</style>
