<template>
    <div id="search-food-component">
        <b-container>
            <centered-layout>
                <h2>Rate some food</h2>
            </centered-layout>
            <centered-layout>
                <food-select @selected="updateSelection"/>
            </centered-layout>
            <centered-layout v-if="selection!=null">
                <br/>
                <p>Global score : {{totalScore}}</p>
                <b-form @submit="onSubmit">
                    <b-form-group
                            label="Enter your own score:"
                            label-for="scoreInput"
                            description="Enter a score between 0 and 10">
                        <b-form-input id="scoreInput"
                                      type="number"
                                      v-model="myScore"
                                      required
                                      placeholder="Enter Score">
                        </b-form-input>
                    </b-form-group>
                    <b-btn type="submit" variant="warning" class="float-right">Submit</b-btn>
                </b-form>
            </centered-layout>
        </b-container>
    </div>
</template>

<script>
    import FoodSelect from "./FoodSelect";
    import FoodInfo from "./FoodInfo";
    import CenteredLayout from "./CenteredLayout";

    export default {
        name: 'SearchFood',
        components: {CenteredLayout, FoodInfo, FoodSelect},
        data() {
            return {
                selection: null,
                totalScore: 0,
                myScore: 0
            }
        },
        methods: {
            updateSelection(val) {
                this.selection = val;
                fetch('https://jafa-server.herokuapp.com/jafa/api/foods/' + val.value.id + '/score')
                    .catch((error) => console.log(error))
                    .then((response) => response.json())
                    .then((data) => {
                        this.totalScore = data.score;
                    });
            },
            onSubmit(evt) {
                evt.preventDefault();
                console.log(JSON.stringify(this.myScore));
            },
        }
    }
</script>
