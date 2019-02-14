<template>
    <div>
        <header>
            <b-navbar toggleable="md" type="dark" variant="dark">

                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand to="/"><h2>J A F A</h2></b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                        <b-nav-item to="/foodlist">List</b-nav-item>
                        <b-nav-item to="/foodcompare">Compare</b-nav-item>
                        <b-nav-item to="/shops">Shops</b-nav-item>
                        <b-nav-item to="/recipes">Recipes</b-nav-item>
                        <b-nav-item v-if="loggedin" to="/foodrate">Rate</b-nav-item>
                    </b-navbar-nav>

                    <LogInModal @login="handleLogin"></LogInModal>

                </b-collapse>

            </b-navbar>
        </header>
        <br/>
        <router-view/>
        <div id="footer-space"></div>
        <b-navbar fixed="bottom" type="dark" variant="dark">
            <span class="text-muted">&copy; 2019 Programmable Web, Team : Guillaume André, Zaki Berouk, David Lang, Jean-Adam Puskaric</span>
        </b-navbar>
    </div>
</template>

<script>
    import LogInModal from "../sub/LogInBar";

    export default {
        name: "AppLayout",
        components: {LogInModal},
        data() {
            return {
                loggedin: false,
                loggedinUsername: "",
            }
        },
        methods: {
            handleLogin(loggedState) {
                this.loggedin = loggedState;
            }
        },
        mounted() {
            if (localStorage.username) {
                this.loggedin = true;
            }
        }
    }
</script>

<style scoped>
    h2 {
        font-style: inherit;
        color: inherit;
    }

    .navbar-brand>h2 {
        margin-top: 10px !important;
    }

    #footer-space {
        height: 135px;
    }
</style>