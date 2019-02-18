<template>
    <div>
        <h2>Add recipe</h2>
        <login-wrapper>
            <b-form @submit="onSubmitRecipe">
                <b-form-group>
                    <b-form-textarea id="recipe-input"
                                     v-model="createdRecipe"
                                     placeholder="Enter a recipe"
                                     :rows="8"
                                     :state="!$v.createdRecipe.$invalid"
                                     :max-rows="12">
                    </b-form-textarea>
                    <b-form-invalid-feedback>
                        {{errorMessage}}
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-btn id="create-recipe" type="submit" variant="outline-warning" class="float-right"
                       :disabled="$v.createdRecipe.$invalid">
                    Add
                </b-btn>
                <b-popover target="recipe-input" placement="bottomright" triggers="hover"
                           title="Formatting recipe" content=
                                   "A Recipe must have a name, a list of ingredients with quantities and a description, example :

Pizza recipe

- pizza dough / 1
- tomato sauce / 100g
- cheese / 100g

Start by putting down the dough, add the tomato sauce and cheese on top and put on the oven for 15 min at 200°">
                </b-popover>
            </b-form>
            <template slot="notconnected">
                <h6>You need to be connected to access this feature</h6>
            </template>
            <div v-if="recipeInfo">
                <br/><br/><br/>
                <h3>Choisissez les composants les plus adaptés</h3>
                <ingredient-chooser v-for="(ingredients,index) in recipeInfo.suggestions"
                                    :key="index" :ingredients="ingredients" :id="index"
                                    @selection="updateIngredients">
                </ingredient-chooser>
                {{selectedIngredients}}
                <b-btn @click="submitIngredients">Valider ingrédients</b-btn>
            </div>
        </login-wrapper>
    </div>
</template>
<script>
    import IngredientChooser from "./IngredientChooser"
    import LoginWrapper from "../layouts/LoginWrapper"
    import {validationMixin} from "vuelidate"
    import {required} from "vuelidate/lib/validators"

    export default {
        name: 'AddRecipe',
        components: {IngredientChooser, LoginWrapper},
        data() {
            return {
                createdRecipe: "",
                errorMessage: "",
                recipeInfo: null,
                selectedIngredients: []
            }
        },
        methods: {
            onSubmitRecipe(e) {
                e.preventDefault();
                fetch(this.JAFA_SERVER + 'recipes/',
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            recipeText: this.createdRecipe,
                        }), headers: {
                            "Content-Type": "application/json",
                            "Authorization": this.AUTHORIZATION
                        }
                    })
                    .catch((error) => console.log(error))
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        this.createdRecipe = null;
                        this.recipeInfo = data;
                    });
            },
            updateIngredients(id, ingredient) {
                this.selectedIngredients[id] = ingredient;
                this.selectedIngredients = Object.assign({}, this.selectedIngredients);
            },
            submitIngredients() {
                console.log(this.recipeInfo);
                for (let key in this.selectedIngredients) {
                    console.log(key);
                    console.log(this.selectedIngredients[key]);
                    fetch(this.JAFA_SERVER + 'recipes/' + this.recipeInfo.recipe._id + '/ingredients',
                        {
                            method: 'POST',
                            body: JSON.stringify({
                                foodId: this.selectedIngredients[key].id,
                                position: key
                            }), headers: {
                                "Content-Type": "application/json",
                                "Authorization": this.AUTHORIZATION
                            }
                        })
                        .catch((error) => console.log(error))
                        .then(() => {
                            this.recipeInfo = null;
                        });
                }
            }
        },
        mixins: [
            validationMixin
        ],
        validations: {
            createdRecipe: {
                required,
                recipeValidator:

                    function (recipeText) {
                        recipeText = recipeText.trim();
                        const lines = recipeText.split("\n");
                        if (lines === null || lines.length < 3) {
                            this.errorMessage = "No Recipe Title or ingredients description";
                            return false;
                        }
                        let ingredientLines = lines.filter(line => line.startsWith("-"));
                        if (ingredientLines.length === 0) {
                            this.errorMessage = "There must be ingredients lines which start with -";
                            return false;
                        }
                        for (let line of ingredientLines) {
                            const sp = line.split("/");
                            if (sp.length <= 1) {
                                this.errorMessage = "Ingredients must have a quantity specified after a /";
                                return false;
                            }
                            let quantityMatches = sp[1].match("[0-9]+");
                            if (quantityMatches === null) {
                                this.errorMessage = "Ingredient quantity must be a numeral";
                                return false;
                            }
                        }
                        let realLines = lines.filter(line => line.length > 0);
                        if (realLines.pop().startsWith("-")) {
                            this.errorMessage = "There must be a step list/description at the end of the recipe";
                            return false;
                        }
                        return true;
                    }
            }
        }
    }
</script>