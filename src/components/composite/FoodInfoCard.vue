<template>
    <div>
        <b-card v-if="food!=null" :img-src="getImgURL(food.id, food.images)" img-alt="no img found" img-left class="mb-3" @click="goToFood(food.id)">
            <b-card-text>
                <h5>{{food.name}}</h5>
                <p>Global Score : {{getFormattedFloat(food.score)}}</p>
                <p>Global Price : {{getFormattedFloat(food.price)}}€</p>
            </b-card-text>
        </b-card>
    </div>

</template>

<script>
    import router from "../../router";
    import Food from "../pages/Food"


    export default {
        name: "FoodInfoCard",
        props: ['id'],
        data() {
            return {
                food: null,
            }
        },
        watch: {
            id : function() {
                this.getFoodInfo()
            }
        },
        mounted() {
            this.getFoodInfo();
        },
        methods: {
            getFoodInfo() {
                fetch(this.JAFA_SERVER + 'foods/' + this.$props.id)
                    .catch((error) => console.error(error))
                    .then((response) => response.json())
                    .then((data) => {
                        this.food = data;
                    });
            },
            getImgURL(id, images) {
                return 'https://static.openfoodfacts.org/images/products/' + getFormattedId(id, images);
            },
            getFormattedFloat(float) {
                return parseFloat(float).toFixed(2);
            },
            goToFood(id) {
                router.replace({path: '/foods/' + id, component: Food})
            }
        }
    }

    function getFormattedId(id, images) {
        let rev = -1;
        for (let i = 0; i < images.length; ++i) {
            if (images[i].name === 'front_fr') {
                rev = images[i].rev
            }
        }
        let formattedId = id.split('');
        if (formattedId.length === 13 || formattedId.length === 9) {
            let output = [];

            for (let j = 0; j < formattedId.length; j++) {
                output.push(formattedId[j]);
                if ((j + 1) % 3 === 0 && j < 9) {
                    output.push('/');
                }
            }
            formattedId = output.join('');
        } else {
            formattedId = id.toString();
        }
        return formattedId + '/front_fr.' + rev + '.400.jpg'
    }


</script>

<style scoped>

    .card-img-left {
        max-height: 150px;
        margin: 0;
    }

    h4 {
        font-size: 12px;
    }

</style>