<template>
    <div>
        <header>
            <b-navbar toggleable="md" type="dark" variant="dark">

                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand to="/"><h2>J A F A</h2></b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                        <b-nav-item to="/recipes">Recipes</b-nav-item>
                        <b-nav-item href="#" disabled>Josué PD</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>

            </b-navbar>
        </header>
        <br/>
        <router-view/>
        <br/>
        <b-navbar fixed="bottom" type="dark" variant="dark">
            <span class="text-muted">&copy; 2019 Programmable Web, Team : Guillaume André, Zaki Berouk, David Lang, Jean-Adam Puskaric</span>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "AppLayout",
    }
</script>

<style scoped>
    h2 {
        font-style: inherit;
        color: inherit;
    }
</style>