<template>
    <div id="search-food-component">
        <b-container>
            <centered-layout>
                <h2>Search some food</h2>
            </centered-layout>
            <centered-layout>
                <food-select @selected="updateBaseSelect"/>
            </centered-layout>
            <food-info v-if="baseSelect!=null" :food="baseSelect.value"/>
            <br/>
            <centered-layout>
                <b-btn :pressed.sync="comparisonToggle" variant="warning" class="float-right">Compare</b-btn>
            </centered-layout>
            <div v-if="comparisonToggle">
                <centered-layout>
                    <food-select @selected="updateComparisonSelect"/>
                </centered-layout>
                <food-info v-if="comparisonSelect!=null" :food="comparisonSelect.value"/>
            </div>
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
