<template>
    <div id="search-food-component">
        <b-container>
            <centered-layout>
                <h2>Rate and Comment some food</h2>
                <food-select @selected="updateSelection"/>
                <div v-if="selection!=null">
                    <br/>
                    <p>Global score : {{totalScore}}</p>
                    <br/>
                    <b-form @submit="onSubmitScore">
                        <b-form-group
                                label="Enter your own score with:"
                                label-for="scoreInput">
                            <b-form-input id="scoreInput"
                                          type="number"
                                          v-model="score"
                                          :state="!$v.score.$invalid"
                                          placeholder="Enter Score">
                            </b-form-input>
                            <b-form-invalid-feedback>
                                Score must be a floating number between 0 and 10
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-btn type="submit" variant="outline-warning" class="float-right"
                               :disabled="$v.score.$invalid">Rate
                        </b-btn>
                    </b-form>
                    <div class="separator"></div>
                    <CommentForm :id="this.selection.value.id" location="foods/"/>
                </div>
            </centered-layout>
        </b-container>
    </div>
</template>

<script>
    import FoodSelect from "../sub/FoodSelect";
    import CenteredLayout from "../layouts/CenteredLayout";
    import {validationMixin} from "vuelidate"
    import {between, required} from "vuelidate/lib/validators"
    import CommentForm from "../sub/CommentForm";

    export default {
        name: 'SearchFood',
        components: {CommentForm, CenteredLayout, FoodSelect},
        data() {
            return {
                selection: null,
                totalScore: 0,
                score: null,
                comment: ""
            }
        },
        methods: {
            updateSelection(val) {
                this.selection = val;
                fetch(this.JAFA_SERVER + 'foods/' + val.value.id + '/score')
                    .catch((error) => console.error(error))
                    .then((response) => response.json())
                    .then((data) => {
                        this.totalScore = parseFloat(data.score).toFixed(2);
                    });
            },
            onSubmitScore(evt) {
                evt.preventDefault();
                fetch(this.JAFA_SERVER + 'foods/' + this.selection.value.id + '/score',
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            score: this.score
                        }), headers: {
                            "Content-Type": "application/json",
                            "Authorization": this.AUTHORIZATION
                        }
                    })
                    .catch((error) => console.error(error))
                    .then(() => {
                        this.updateSelection(this.selection);
                        this.score = null;
                    });
            },
        },
        mixins: [
            validationMixin
        ],
        validations: {
            score: {
                required,
                between: between(0, 10)
            },
        }
    }
</script>

<style scoped>
    .separator {
        margin-bottom: 80px;
    }
</style>
