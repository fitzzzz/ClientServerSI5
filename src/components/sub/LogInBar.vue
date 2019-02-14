<template>
    <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown v-if="loggedin" :text="loggedinUsername" right>
            <b-dropdown-item @click="logout" href="#">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item v-else v-b-modal.loginModal href="#">Log In</b-nav-item>
        <b-modal @keydown.native.enter="pressEnter" @ok="handleSubmit" centered id="loginModal" title="Log in" ok-only
                 ok-title="Log In"
                 ok-variant="outline-warning">
            <b-form @submit.stop.prevent="handleSubmit">
                <b-form-group
                        label="Username :"
                        label-for="usernameInput">
                    <b-form-input id="usernameInput"
                                  type="text"
                                  v-model="username"
                                  placeholder="Enter your username">
                    </b-form-input>
                </b-form-group>
                <b-form-group
                        label="Password :"
                        label-for="passwordInput">
                    <b-form-input id="passwordInput"
                                  type="password"
                                  v-model="password"
                                  placeholder="Enter your password">
                    </b-form-input>
                </b-form-group>
                <b-alert variant="danger" :show="loginHasError" dismissible @dismissed="loginHasError=false">
                    {{errorMessage}}
                </b-alert>
            </b-form>
        </b-modal>
    </b-navbar-nav>
</template>
<script>
    import router from "../../router";

    export default {
        name: 'LogInModal',
        data() {
            return {
                username: "",
                password: "",
                errorMessage: "",
                loginHasError: false,
                loggedin: false,
                loggedinUsername: "",
            }
        },
        methods: {
            pressEnter() {
                this.handleSubmit();
                this.$root.$emit('bv::hide::modal', 'loginModal')
            },
            handleSubmit(evt) {
                if (evt) {
                    evt.preventDefault();
                }
                fetch(this.JAFA_SERVER + 'users/authenticate',
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            username: this.username,
                            password: this.password
                        }), headers: {"Content-Type": "application/json"}
                    })
                    .catch((error) => console.log(error))
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.message != null) {
                            this.loginHasError = true;
                            this.errorMessage = data.message;
                        }
                        else {
                            this.loginHasError = false;
                            localStorage.username = data.username;
                            localStorage.token = data.token;
                            this.loggedin = true;
                            this.loggedinUsername = data.username;
                            this.$root.$emit('bv::hide::modal', 'loginModal');
                            this.$emit('login', true);
                            router.replace({ path: '/' })
                        }
                    });
            },
            logout() {
                localStorage.removeItem("token");
                localStorage.removeItem("username");
                this.loggedin = false;
                this.loggedinUsername = "";
                this.$emit('login', false);
                router.replace({ path: '/' })
            }
        },
        mounted() {
            if (localStorage.username) {
                this.loggedin = true;
                this.loggedinUsername = localStorage.username;
            }
        },
    }
</script>
<style scoped>
    h2 {
        font-style: inherit;
        color: inherit;
    }

</style>