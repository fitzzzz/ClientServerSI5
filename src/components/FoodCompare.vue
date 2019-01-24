<template>
    <div id="search-food-component">
        <b-container>
            <b-row>
                <b-col cols="8" offset="2">
                    <h2>Search some food</h2>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="8" offset="2">
                    <food-select @selected="updateBaseSelect"/>
                </b-col>
            </b-row>
            <food-info v-if="baseSelect!=null" :food="baseSelect.value"/>
            <b-btn :pressed.sync="comparisonToggle" variant="warning">Compare</b-btn>
            <div v-if="comparisonToggle">
                <b-row>
                    <b-col cols="8" offset="2">
                        <food-select @selected="updateComparisonSelect"/>
                    </b-col>
                </b-row>
                <food-info v-if="comparisonSelect!=null" :food="comparisonSelect.value"/>
            </div>
        </b-container>
    </div>
</template>

<script>
    import FoodSelect from "./FoodSelect";
    import FoodInfo from "./FoodInfo";

    export default {
        name: 'SearchFood',
        components: {FoodInfo, FoodSelect},
        data() {
            return {
                comparisonToggle: false,
                baseSelect: null,
                comparisonSelect: null,
            }
        },
        methods: {
            updateBaseSelect(val) {
                this.baseSelect = val;
            },
            updateComparisonSelect(val) {
                this.comparisonSelect = val;
            },
        }
    }
</script>
