<template>
    <div v-if=" food.ingredients && food.ingredients.length > 0" class="food-info-container">
        <h2>{{food.name}}</h2>

        <div class="food-header col-xs-12 col-lg-12">

            <div class="food-ingredient col-xs-12 col-lg-7">
                <h4>Ingrédients</h4>
                <p class="ingredients-list">{{getIngredientList(food.ingredients)}}</p>
                <FoodNutritionTab :food="food"></FoodNutritionTab>
            </div>

            <div class="img-container col-xs-12 col-lg-5">
                <img :src="getImgURL(food.id, food.images)" alt="No Image Found"/>
            </div>

        </div>

    </div>

    <div v-else>
        <div v-if="food.images && food.images.length > 0" class="no-information">
            <h2>{{food.name}}</h2>
            <img :src="getImgURL(food.id, food.images)" alt="No Image Found"/>
            <div class="row no-info-message">
                <p class="lead">Whoopsie ! <br/>We have no data for this product...</p>
            </div>
        </div>
        <div v-else class="no-information">
            <img :src="getRandomIcon()" alt="No Ingredient Found"/>
            <div class="row no-info-message">
                <p class="lead">Whoopsie ! <br/>We have no data for this product...</p>
            </div>
        </div>
    </div>
</template>

<script>
    import FoodNutritionTab from "../composite/FoodNutritionTab";

    let gif_list = ["sad_apple", "sad_ice_cream", "sad_peer"];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
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

    function getFormattedIngredientText(ingredients) {
        let ingredientList = '';
        if (ingredients.length > 1) {
            for (let i = 1; i < ingredients.length; i++) {
                ingredientList += ' ' + ingredients[i].text;
                if (ingredients[i].percent != null) {
                    ingredientList += ' (' + ingredients[i].percent + '%)';
                }
                if (i + 1 < ingredients.length - 1) {
                    ingredientList += ',';
                }
            }
        } else {
            ingredientList = 'Désolé, la composition de ce produit est indisponible...'
        }
        return ingredientList;
    }


    export default {
        name: "FoodInfo",
        components: {FoodNutritionTab},
        props: ['food'],
        methods: {
            getRandomIcon() {
                return require('../../assets/' + gif_list[getRandomInt(0, 2)] + '.gif');
            },
            getImgURL(id, images) {
                return 'https://static.openfoodfacts.org/images/products/' + getFormattedId(id, images);
            },
            getIngredientList(ingredients) {
                return getFormattedIngredientText(ingredients);
            },
        },
    }
</script>

<style>

    .food-info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .food-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap-reverse;
        justify-content: space-between;
    }

    h2 {
        margin-top: 30px;
    }

    h4 {
        margin-bottom: 0;
        margin-top: 30px;
    }

    .food-ingredient {
        display: flex;
        flex-direction: column;
        text-align: justify;
    }

    .no-information {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        margin-top: 30px;
    }

    .no-information > img {
        width: 50%;
        height: 50%;
    }

    .no-info-message {
        margin-top: 20px;
    }

    .img-container {
        display: flex;
        justify-content: center;
    }

    .img-container > img {
        height: 300px;
        width: auto;
    }

</style>