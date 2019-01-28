<template>
    <div id="search-food-component">
        <b-container>
            <centered-layout>
                <h2>Rate some food</h2>
                <food-select @selected="updateSelection"/>
                <div v-if="selection!=null">
                    <br/>
                    <p>Global score : {{totalScore}}</p>
                    <b-form @submit="onSubmit">
                        <b-form-group
                                label="Enter your own score:"
                                label-for="scoreInput">
                            <b-form-input id="scoreInput"
                                          type="number"
                                          v-model="myScore"
                                          :state="!$v.myScore.$invalid"
                                          placeholder="Enter Score">
                            </b-form-input>
                            <b-form-invalid-feedback id="liveFeedback">
                                Score must be a floating number between 0 and 10
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-btn type="submit" variant="outline-warning" class="float-right"
                               :disabled="$v.myScore.$invalid">Rate
                        </b-btn>
                    </b-form>
                </div>
            </centered-layout>
        </b-container>
    </div>
</template>

<script>
    import FoodSelect from "../sub/FoodSelect";
    import CenteredLayout from "../layouts/CenteredLayout";
    import FoodInfo from "../sub/FoodInfo";
    import {validationMixin} from "vuelidate"
    import {required, between} from "vuelidate/lib/validators"

    export default {
        name: 'SearchFood',
        components: {CenteredLayout, FoodInfo, FoodSelect},
        data() {
            return {
                selection: null,
                totalScore: 0,
                myScore: null
            }
        },
        methods: {
            updateSelection(val) {
                this.selection = val;
                fetch('https://jafa-server.herokuapp.com/jafa/api/foods/' + val.value.id + '/score')
                    .catch((error) => console.log(error))
                    .then((response) => response.json())
                    .then((data) => {
                        this.totalScore = parseFloat(data.score).toFixed(2);
                    });
            },
            onSubmit(evt) {
                evt.preventDefault();
                fetch('https://jafa-server.herokuapp.com/jafa/api/foods/' + this.selection.value.id + '/score',
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            score: this.myScore
                        }), headers: {"Content-Type": "application/json"}
                    })
                    .catch((error) => console.log(error))
                    .then(() => {
                        this.updateSelection(this.selection);
                    });
            },
        },
        mixins: [
            validationMixin
        ],
        validations: {
            myScore: {
                required,
                between: between(0, 10)
            }
        }
    }
</script>
