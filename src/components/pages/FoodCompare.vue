<template>
    <div id="search-food-component">
        <b-container>
            <b-row>
                <b-col cols="12" offset="0" :lg="totalWidth" :offset-lg="totalOffset">
                    <h2>Search some food</h2>
                    <comparison v-if="needsComparison" :id1="baseSelect.value.id"
                                :id2="comparisonSelect.value.id"></comparison>
                    <b-row>
                        <b-col @sm=comparisonWidth class="mb-4">
                            <food-select @selected="updateBaseSelect"/>
                            <food-info v-if="baseSelect!=null" :food="baseSelect.value"/>
                        </b-col>
                        <b-col sm="6" v-if="comparisonToggle">
                            <food-select @selected="updateComparisonSelect"/>
                            <food-info v-if="comparisonSelect!=null" :food="comparisonSelect.value"/>
                        </b-col>
                    </b-row>
                    <div class="separator"></div>
                    <b-btn :pressed.sync="comparisonToggle" variant="outline-warning" class="btn-block">Compare</b-btn>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import FoodSelect from "../sub/FoodSelect";
    import FoodInfo from "../sub/FoodInfo";
    import CenteredLayout from "../layouts/CenteredLayout";
    import Comparison from "../sub/Comparison";

    export default {
        name: 'CompareFood',
        components: {Comparison, CenteredLayout, FoodInfo, FoodSelect},
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
        },
        computed: {
            comparisonWidth: function () {
                return this.comparisonToggle ? '6' : '12';
            },
            totalWidth: function () {
                return this.comparisonToggle ? '10' : '8';
            },
            totalOffset: function () {
                return this.comparisonToggle ? '1' : '2';
            },
            needsComparison() {
                return this.comparisonToggle && this.baseSelect != null && this.comparisonSelect != null;
            }
        }
    }
</script>

<style scoped>
    .separator {
        display: block;
        height: 20px;
    }
</style>