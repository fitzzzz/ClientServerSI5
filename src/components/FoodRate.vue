<template>
    <div id="search-food-component">
        <b-container>
            <b-row>
                <b-col cols="8" offset="2">
                    <h2>Rate some food</h2>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="8" offset="2">
                    <food-select @selected="updateBaseSelect"/>
                </b-col>
            </b-row>
            <food-info v-if="baseSelect!=null" :food="baseSelect.value"/>
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
                baseSelect: null,
            }
        },
        methods: {
            updateBaseSelect(val) {
                this.baseSelect = val;
            },
        }
    }
</script>
