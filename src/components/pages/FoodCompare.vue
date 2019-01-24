<template>
    <div id="search-food-component">
        <b-container>
            <centered-layout>
                <h2>Search some food</h2>
                <food-select @selected="updateBaseSelect"/>
                <food-info v-if="baseSelect!=null" :food="baseSelect.value"/>
                <br/>
                <b-btn :pressed.sync="comparisonToggle" variant="outline-warning" class="float-right">Compare</b-btn>
                <div v-if="comparisonToggle">
                    <food-select @selected="updateComparisonSelect"/>
                    <food-info v-if="comparisonSelect!=null" :food="comparisonSelect.value"/>
                </div>
            </centered-layout>
        </b-container>
    </div>
</template>

<script>
    import FoodSelect from "../sub/FoodSelect";
    import FoodInfo from "../sub/FoodInfo";
    import CenteredLayout from "../layouts/CenteredLayout";

    export default {
        name: 'SearchFood',
        components: {CenteredLayout, FoodInfo, FoodSelect},
        data() {
            return {
                comparisonToggle: false,
                selection: null,
                comparisonSelect: null,
                baseSelect: null
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
