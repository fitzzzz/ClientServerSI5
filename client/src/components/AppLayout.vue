<template>
    <div>
        <header>
            <b-navbar toggleable="md" type="dark" variant="dark">

                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand href="#" id="title-card">JAFA - Just Another Food Application</b-navbar-brand>

            </b-navbar>
        </header>
        <br/>
        <slot/>
        <br/>
        <footer class="footer">
            <b-container>
                <span class="text-muted">&copy; 2019 Copyright: J-A Puskaric</span>
            </b-container>
        </footer>
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
    }
</style>
