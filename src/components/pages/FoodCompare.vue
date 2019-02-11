<template>
    <div id="search-food-component">
        <b-container>
            <b-row>
                <b-col cols="12" offset="0" lg="10" offset-lg="1">
                    <h2>Search or compare some food</h2>
                    <b-btn :pressed.sync="comparisonToggle" variant="outline-warning" class="btn-block">Compare</b-btn>
                    <br/>
                    <comparison v-if="needsComparison" :id1="baseSelect.value.id"
                                :id2="comparisonSelect.value.id"></comparison>
                    <b-row>
                        <b-col @sm=comparisonWidth class="mb-4">
                            <food-select @selected="updateBaseSelect"/>
                            <food-info v-if="baseSelect!=null&&!comparisonToggle" :food="baseSelect.value"/>
                            <comment-list :id="baseSelect.value.id" v-if="baseSelect!=null" location="foods/"></comment-list>
                            <MinimalFoodInfo v-else-if="baseSelect!=null" :selection="baseSelect"/>
                        </b-col>
                        <b-col sm="6" v-if="comparisonToggle">
                            <food-select @selected="updateComparisonSelect"/>
                            <MinimalFoodInfo v-if="comparisonSelect!=null" :selection="comparisonSelect"/>
                        </b-col>
                    </b-row>
                    <div class="separator"></div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import FoodSelect from "../sub/FoodSelect";
    import FoodInfo from "../sub/FoodInfo";
    import Comparison from "../sub/Comparison";
    import MinimalFoodInfo from "../sub/MinimalFoodInfo";
    import CommentList from "../sub/CommentList";

    export default {
        name: 'CompareFood',
        components: {CommentList, MinimalFoodInfo, Comparison, FoodInfo, FoodSelect},
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