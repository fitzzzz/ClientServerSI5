<template>
    <div id="search-food-component">
        <b-container>
            <centered-layout>
                <h2>Rate and Comment some food</h2>
                <food-select @selected="updateSelection"/>
                <div v-if="selection!=null">
                    <br/>
                    <p>Global score : {{totalScore}}</p>
                    <b-form @submit="onSubmitScore">
                        <b-form-group
                                label="Enter your own score:"
                                label-for="scoreInput">
                            <b-form-input id="scoreInput"
                                          type="number"
                                          v-model="score"
                                          :state="!$v.score.$invalid"
                                          placeholder="Enter Score">
                            </b-form-input>
                            <b-form-invalid-feedback id="liveFeedback">
                                Score must be a floating number between 0 and 10
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-btn type="submit" variant="outline-warning" class="float-right"
                               :disabled="$v.score.$invalid">Rate
                        </b-btn>
                    </b-form>
                    <div class="separator"></div>
                    <b-form @submit="onSubmitComment">
                        <b-form-group
                                label="Enter a nice comment:"
                                label-for="commentInput">
                            <b-form-input id="commentInput"
                                          type="text"
                                          v-model="comment"
                                          :state="!$v.comment.$invalid"
                                          placeholder="Enter a comment">
                            </b-form-input>
                            <b-form-invalid-feedback id="liveFeedback">
                                Comment must not be too short or too long! (max : 200 characters)
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-btn type="submit" variant="outline-warning" class="float-right"
                               :disabled="$v.comment.$invalid">Comment
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
    import maxLength from "vuelidate/src/validators/maxLength";
    import minLength from "vuelidate/src/validators/minLength";

    export default {
        name: 'SearchFood',
        components: {CenteredLayout, FoodInfo, FoodSelect},
        data() {
            return {
                selection: null,
                totalScore: 0,
                score: null,
                comment: ""
            }
        },
        methods: {
            getAuthorization() {
                return 'Bearer ' + localStorage.token;
            },
            updateSelection(val) {
                this.selection = val;
                fetch('https://jafa-server.herokuapp.com/jafa/api/foods/' + val.value.id + '/score')
                    .catch((error) => console.log(error))
                    .then((response) => response.json())
                    .then((data) => {
                        this.totalScore = parseFloat(data.score).toFixed(2);
                    });
            },
            onSubmitScore(evt) {
                evt.preventDefault();
                fetch('https://jafa-server.herokuapp.com/jafa/api/foods/' + this.selection.value.id + '/score',
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            score: this.score
                        }), headers: {
                            "Content-Type": "application/json",
                            "Authorization": this.getAuthorization()
                        }
                    })
                    .catch((error) => console.log(error))
                    .then(() => {
                        this.updateSelection(this.selection);
                    });
            },
            onSubmitComment(evt) {
                evt.preventDefault();
                fetch('https://jafa-server.herokuapp.com/jafa/api/foods/' + this.selection.value.id + '/comment',
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            message: this.comment,
                        }), headers: {
                            "Content-Type": "application/json",
                            "Authorization": this.getAuthorization()
                        }
                    })
                    .catch((error) => console.log(error))
                    .then(() => {
                        console.log(this.comment);
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
            comment: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(200),
            }
        }
    }
</script>

<style scoped>
    .separator {
        margin-bottom: 40px;
    }
</style>
