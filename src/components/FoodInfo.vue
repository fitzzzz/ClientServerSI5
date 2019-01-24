<template>
    <div>
        <p>{{food.name}}</p>
        <div v-if="food.ingredients.length > 0"><p>{{food.ingredients}}</p></div>
        <div v-else><img :src="vueProp" width="50%" height="50%" alt="No Ingredient Found"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FoodInfo",
        props: ['food'],
        data()
        {
            return {
                vueProp: path// visible to template
            }
        }
    }

    let gif_directory = ["sad_apple", "sad_ice_cream", "sad_peer"];
    let path = "~@/assets/" + gif_directory[getRandomInt(0, 2)] + ".gif";


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
</script>
