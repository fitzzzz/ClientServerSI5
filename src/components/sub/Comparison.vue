<template>
    <b-row>
        <b-col cols="6">
            <p class="right">Score</p>
            <b-progress height="1.5rem" class="rtl bottom-15" :max="maxScore" :precision="2" :variant="score1color"
                        :value="score1" show-value/>
            <p class="right">Price</p>
            <b-progress height="1.5rem" class="rtl bottom-15" :max="maxPrice" :precision="2" :variant="price1color"
                        :value="price1" show-value/>
        </b-col>
        <b-col cols="6">
            <p>Score</p>
            <b-progress height="1.5rem" class="bottom-15" :max="maxScore" :value="score2" :variant="score2color"
                        :precision="2" show-value/>
            <p>Price</p>
            <b-progress height="1.5rem" class="bottom-15" :max="maxPrice" :value="price2" :variant="price2color"
                        :precision="2" show-value/>
        </b-col>
        <div id="spacer"></div>
    </b-row>
</template>

<script>

    const priceAvg = (arr) => arr.reduce((acc, elem) => elem.price + acc, 0) / arr.length;


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
                price1: 0,
                price2: 0,
                maxScore: 10,
                maxPrice: 50
            }
        },
        computed: {
            score1color: function () {
                return this.score1 >= this.score2 ? "success" : "danger";
            },
            score2color: function () {
                return this.score2 > this.score1 ? "success" : "danger";
            },
            price1color: function () {
                return this.price1 >= this.price2 ? "success" : "danger";
            },
            price2color: function () {
                return this.price2 > this.price1 ? "success" : "danger";
            }
        },
        watch: {
            id1: function () {
                this.getInfoFromFoodId(this.$props.id1, "score").then(data => this.score1 = data.score);
                this.getInfoFromFoodId(this.$props.id1, "price").then(data => this.price1 = priceAvg(data));
            },
            id2: function () {
                this.getInfoFromFoodId(this.$props.id2, "score").then(data => this.score2 = data.score);
                this.getInfoFromFoodId(this.$props.id2, "price").then(data => this.price2 = priceAvg(data));
            }
        },
        methods: {
            async getInfoFromFoodId(id, info) {
                return await fetch(this.JAFA_SERVER + 'foods/' + id + '/' + info)
                    .catch((error) => console.log(error))
                    .then((response) => response.json())
            }
        },
        created() {
            this.getInfoFromFoodId(this.$props.id1, "score").then(data => this.score1 = data.score);
            this.getInfoFromFoodId(this.$props.id2, "score").then(data => this.score2 = data.score);
            this.getInfoFromFoodId(this.$props.id1, "price").then(data => this.price1 = priceAvg(data));
            this.getInfoFromFoodId(this.$props.id2, "price").then(data => this.price2 = priceAvg(data));
        }
    }
</script>

<style scoped>
    .bottom-15 {
        margin-bottom: 15px;
    }

    .right {
        text-align: right;
    }

    .rtl {
        direction: rtl;
    }

    #spacer {
        height: 35px;
    }
</style>