<template>
    <div class="food-info-container">
        <h4>{{food.name}}</h4>
        <div v-if="food.ingredients.length > 0">
            <table class="table table-hover table-wrapper-scroll-y table-striped">
                <thead>
                <tr>
                    <th scope="col" class="py-2">Composant</th>
                    <th scope="col" class="py-2">Pourcentage</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in food.ingredients" :key="item.id">
                    <th scope="row" class="py-2">{{item.text}}</th>
                    <td v-if="item.percent != null" class="py-2">{{item.percent}}%</td>
                    <td v-if="item.percent == null" class="py-2"> -</td>
                </tr>

                </tbody>
            </table>
        </div>
        <div v-else class="no-information">
            <img :src="getRandomIcon()" width="70%" height="70%" alt="No Ingredient Found"/>
            <div class="row no-info-message">
                <p class="lead">Whoopsie ! <br/>Nous n'avons aucune information concernant ce produit...</p>
            </div>
        </div>

    </div>
</template>

<script>
    let gif_list = ["sad_apple", "sad_ice_cream", "sad_peer"];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    export default {
        name: "FoodInfo",
        props: ['food'],
        methods: {
            getRandomIcon() {
                return require('../../assets/' + gif_list[getRandomInt(0, 2)] + '.gif');
            },
        }
    }
</script>

<style>

    .food-info-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h4 {
        margin-bottom: 30px;
        margin-top: 30px;
    }

    .no-information {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

    .no-info-message {
        margin-top: 20px;
    }

    .table-wrapper-scroll-y {
        display: block;
        max-height: 400px;
        overflow-y: auto;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        width: 100%;
    }

</style>