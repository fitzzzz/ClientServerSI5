<template>
    <b-container>
        <centered-layout>
            <h2>See recipes</h2>
            <v-select placeholder="Search Recipe"
                      :options=recipes v-model=selectedRecipe class="form-control"></v-select>
            <br/>
            <h2>Add recipe</h2>
            <b-form @submit="onSubmitRecipe">
                <b-form-group>
                    <b-form-textarea id="recipe-input"
                                     v-model="createdRecipe"
                                     placeholder="Enter a recipe"
                                     :rows="5"
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
                <b-popover target="recipe-input" placement="bottomright" triggers="hover" title="Formatting recipe" content=
                        "A Recipe must have a name, a list of ingredients with quantities and a description, example :

Pizza recipe

- pizza dough / 1
- tomato sauce / 100g
- cheese / 100g

Start by putting down the dough, add the tomato sauce and cheese on top and put on the oven for 15 min at 200°">
                </b-popover>
            </b-form>
        </centered-layout>
    </b-container>
</template>

<script>
    import CenteredLayout from "../layouts/CenteredLayout";
    import {validationMixin} from "vuelidate"
    import {required} from "vuelidate/lib/validators"

    export default {
        name: 'ShopList',
        components: {CenteredLayout},
        data() {
            return {
                recipes: [],
                selectedRecipe: null,
                createdRecipe: "",
                errorMessage: "",
            }
        },
        mounted() {
            fetch(this.JAFA_SERVER + "recipes")
                .catch((error) => console.log(error))
                .then((response) => response.json())
                .then((data) => {
                    this.recipes = data.data.map((elem) => {
                        return {label: elem.title, value: elem}
                    });
                });
        },
        methods: {
            onSubmitRecipe(e) {
                e.preventDefault();
                console.log(this.createdRecipe);
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
                    });
            },
        },
        mixins: [
            validationMixin
        ],
        validations: {
            createdRecipe: {
                required,
                recipeValidator: function (recipeText) {
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

