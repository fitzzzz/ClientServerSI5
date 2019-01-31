<template>
    <div>
        <header>
            <b-navbar toggleable="md" type="dark" variant="dark">

                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand to="/"><h2>J A F A</h2></b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                        <b-nav-item to="/foodList">List</b-nav-item>
                        <b-nav-item to="/foodcompare">Compare</b-nav-item>
                        <b-nav-item to="/foodrate">Rate</b-nav-item>
                        <b-nav-item href="#" disabled>Josué PD</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item v-b-modal.myModal href="#">Log In</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>

            </b-navbar>
        </header>
        <br/>
        <b-modal @keydown.native.enter="pressEnter" @ok="handleSubmit" centered id="myModal" title="Log in" ok-only
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
            </b-form>
        </b-modal>
        <router-view/>
        <div id="footer-space"></div>
        <b-navbar fixed="bottom" type="dark" variant="dark">
            <span class="text-muted">&copy; 2019 Programmable Web, Team : Guillaume André, Zaki Berouk, David Lang, Jean-Adam Puskaric</span>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "AppLayout",
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            pressEnter() {

            },
            handleSubmit() {
                fetch('https://jafa-server.herokuapp.com/jafa/users/authenticate',
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
                        console.log(data.token);
                        localStorage.token = data.token;
                        localStorage.username = data.username;
                    });
            }
        }
    }
</script>

<style scoped>
    h2 {
        font-style: inherit;
        color: inherit;
    }

    #footer-space {
        height: 135px;
    }
</style>