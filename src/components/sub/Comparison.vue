<template>
    <b-row>
        <b-col cols="6">
            <b-progress height="1.5rem" class="rtl" :max="max" :precision="2" :variant="score1color" :value="score1" show-value/>
        </b-col>
        <b-col cols="6">
            <b-progress height="1.5rem" :max="max" :value="score2" :variant="score2color" :precision="2" show-value/>
        </b-col>
        <div id="spacer"></div>
    </b-row>
</template>

<script>
    export default {
        name: "Comparison",
        props: {
            id1: String,
            id2: String,
        },
        data() {
            return {
                score1: 0,
                score2: 0,
                max: 10
            }
        },
        computed: {
            score1color: function () {
                return this.score1 >= this.score2 ? "success" : "danger";
            },
            score2color: function () {
                return this.score2 > this.score1 ? "success" : "danger";
            }
        },
        watch: {
            id1: function(){
                this.getScoreFromFoodId(this.$props.id1).then(data => this.score1 = data.score);
            },
            id2: function(){
                this.getScoreFromFoodId(this.$props.id2).then(data => this.score2 = data.score);
            }
        },
        methods: {
            async getScoreFromFoodId(id) {
                return await fetch('https://jafa-server.herokuapp.com/jafa/api/foods/' + id + '/score')
                    .catch((error) => console.log(error))
                    .then((response) => response.json())
            }
        },
        created() {
            this.getScoreFromFoodId(this.$props.id2).then(data => this.score2 = data.score);
            this.getScoreFromFoodId(this.$props.id1).then(data => this.score1 = data.score);
        }
    }
</script>

<style scoped>
    .rtl {
        direction: rtl;
    }

    #spacer {
        height: 35px;
    }
</style>