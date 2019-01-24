<template>
    <div>
        <p>{{food.name}}</p>
        <div v-if="food.ingredients.length > 0"><p>{{food.ingredients}}</p></div>
        <div v-else><img :src="getRandomIcon()" width="50%" height="50%" alt="No Ingredient Found"/>
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
            }
        }
    }
</script>
