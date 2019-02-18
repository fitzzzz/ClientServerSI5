<template>
    <div class="recipe-container">
        <div class="col-xs-12">
            <div class="col-xs-12 col-md-l2 row recipe-header">
                <h2>{{recipe.value.title}}</h2>
            </div>
            <b-row>
                <b-col lg="6" xs="12">
                    <div class="ingredient-header">
                        <h4>Ingredients</h4>
                    </div>
                    <div class="ingredient-list">
                        <div v-for="ingredient of recipe.value.ingredients" class="ingredient-item">
                            {{ingredient.name}}, {{ingredient.quantity}}{{ingredient.unit}}
                        </div>
                    </div>
                </b-col>
                <b-col xs="12" lg="6" class="recipe-text">
                    <div class="ingredient-header">
                        <h4>Instructions</h4>
                    </div>
                    <p>{{recipe.value.text}}</p>
                </b-col>
            </b-row>
            <br/><br/>
            <div class="ingredient-header">
                <h4>Shop basket</h4>
            </div>
            <div class="ingredient-list">
                <div v-if="ingredient.foodId != null" v-for="ingredient of recipe.value.ingredients">
                    <FoodInfoCard :id="ingredient.foodId"></FoodInfoCard>
                </div>
            </div>

        </div>


    </div>
</template>
<script>
    import FoodInfoCard from '../composite/FoodInfoCard';

    export default {
        name: 'RecipeInfo',
        components: {FoodInfoCard},
        props: {
            recipe: {}
        },
    }

    // Requête pour le prix, l'username,
</script>
<style>

    .recipe-container {
        margin-bottom: 50px;
    }

    .ingredient-header > h4 {
        margin-top: 0;
        margin-bottom: 30px;
    }

    .recipe-header {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }

    .ingredient-list {
        list-style: none;
    }

    .ingredient-list .ingredient-item::before {
        content: "-";
        color: black;
        font-weight: 600;
    }

</style>