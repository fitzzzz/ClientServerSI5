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
                                     :max-rows="12">
                    </b-form-textarea>
                    <b-form-invalid-feedback id="liveFeedback">
                        CA MARCHE PA
                        Score must be a floating number between 0 and 10
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-btn type="submit" variant="outline-warning" class="float-right"
                       :disabled="$v.createdRecipe.$invalid">Add
                </b-btn>
            </b-form>
        </centered-layout>
    </b-container>
</template>

<script>
    import CenteredLayout from "../layouts/CenteredLayout";
    import {validationMixin} from "vuelidate"
    import {required} from "vuelidate/lib/validators"
    import minLength from "vuelidate/src/validators/minLength";

    export default {
        name: 'ShopList',
        components: {CenteredLayout},
        data() {
            return {
                recipes: [],
                selectedRecipe: null,
                createdRecipe: ""
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
            onSubmitRecipe() {
                e.preventDefault();
                // TODO Post with token
                console.log(this.createdRecipe);
            }
        },
        mixins: [
            validationMixin
        ],
        validations: {
            createdRecipe: {
                required,
                minLength: minLength(3),
            }
        }
    }
</script>

