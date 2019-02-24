<template>
    <div>
        <h2>See recipes</h2>
        <v-select placeholder="Search Recipe"
                  :options=recipes v-model=selectedRecipe class="form-control"></v-select>
        <div v-if="selectedRecipe">
            <RecipeInfo :recipe="selectedRecipe"></RecipeInfo>
            <CommentBundle location="recipes/" :id="selectedRecipe.value._id"/>
        </div>
        <br/>
    </div>
</template>
<script>
    import CommentBundle from "./CommentBundle"
    import RecipeInfo from "./RecipeInfo"

    export default {
        name: 'SeeRecipe',
        components: {CommentBundle, RecipeInfo},
        data() {
            return {
                recipes: [],
                selectedRecipe: null,
            }
        },
        mounted() {
            fetch(this.JAFA_SERVER + "recipes")
                .catch((error) => console.error(error))
                .then((response) => response.json())
                .then((data) => {
                    this.recipes = data.data.map((elem) => {
                        return {label: elem.title, value: elem}
                    });
                });
        },
    }
</script>