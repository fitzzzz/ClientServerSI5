<template>
    <div id="home-component">
        <b-container>
            <centered-layout>
                <b-jumbotron header="JAFA"
                             lead="aka Just Another Food Application">
                    <p>This application was done as a project for the programmable web course
                        It deals with creating and accessing food items and recipes as well as get specific elements
                        for a recipe</p>
                    <p>It uses Vue.JS with Bootstrap as a front-end framework and Express for back-end with a Mongo
                        Database.</p>
                    <br/>
                    <b-row>
                        <b-col md="4" class="text-center mb-1">
                            <b-btn variant="outline-warning" href="https://expressjs.com/">Express</b-btn>
                        </b-col>
                        <b-col md="4" class="text-center mb-1">
                            <b-btn variant="outline-warning" href="https://vuejs.org/">Vue JS</b-btn>
                        </b-col>
                        <b-col md="4" class="text-center mb-1">
                            <b-btn variant="outline-warning" href="https://bootstrap-vue.js.org/">Bootstrap Vue</b-btn>
                        </b-col>
                    </b-row>
                </b-jumbotron>
            </centered-layout>
        </b-container>
    </div>
</template>

<script>
    import CenteredLayout from "../layouts/CenteredLayout";

    export default {
        name: 'Home',
        components: {CenteredLayout},
    }
</script>

<style scoped>
    .text-center {
        text-align: center
    }
</style>
