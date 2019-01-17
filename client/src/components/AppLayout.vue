<template>
    <div>
        <header>
            <b-navbar toggleable="md" type="dark" variant="dark">

                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand tag="h2" href="#">J A F A</b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                        <b-nav-item href="#">Ingredients</b-nav-item>
                        <b-nav-item href="#">Recipes</b-nav-item>
                        <b-nav-item href="#" disabled>Josué PD</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>

            </b-navbar>
        </header>
        <br/>
        <slot/>
        <br/>
        <b-navbar fixed="bottom" type="dark" variant="dark">
            <span class="text-muted">&copy; 2019 Programmable Web, Team : Guillaume André, Zaki Berouk, David Lang, Jean-Adam Puskaric</span>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "AppLayout"
    }
</script>

<style scoped>
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #343a40;
        white-space: nowrap;
        overflow: hidden;
    }
</style>
