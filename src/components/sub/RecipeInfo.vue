<template>
    <div class="recipe-container">
        <p>{{recipe}}</p>
        <div class="col-xs-12">
            <div class="col-xs-12 col-md-l2 row recipe-header">
                <h2>{{recipe.value.title}}</h2>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="ingredient-header">
                        <h4>Ingredients</h4>
                    </div>
                    <div class="ingredient-list">
                        <div v-for="ingredient of recipe.value.ingredients">
                            <div v-if="ingredient.foodId != null" class="col-xs-12">
                                <FoodInfoCard :id="ingredient.foodId"></FoodInfoCard>
                            </div>
                            <div v-else class="ingredient-item">
                               - {{ingredient.name}}, {{ingredient.quantity}}{{ingredient.unit}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-10 col-lg-8 recipe-text">
                    <p>{{recipe.value.text}}</p>
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

    .recipe-text {
        margin-top: 53px;
    }
</style>