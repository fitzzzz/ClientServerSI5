<template>
    <div id="search-food-component">
        <b-container>
            <centered-layout>
                <h2>List some food</h2>
                <b-form inline>
                    <b-row class="full-width">
                        <b-col cols="4">
                            <div>
                                <p>Filter by name</p>
                                <b-input class="full-width" v-model="searchQuery" placeholder="Filter"/>
                            </div>
                        </b-col>
                        <b-col cols="4">
                            <div>
                                <p>Order by</p>
                                <b-form-select class="full-width" v-model="sortingCriteria">
                                    <option value="score">Score</option>
                                    <option value="price">Price</option>
                                </b-form-select>
                            </div>
                        </b-col>
                        <b-col cols="4">
                            <div>
                                <p>In order</p>
                                <b-btn class="button-form" variant="outline-secondary" size="sm"
                                       @click="reverseSorting">
                                    <font-awesome-icon icon="angle-down" size="2x" :transform="buttonIcon"/>
                                </b-btn>
                            </div>

                        </b-col>
                    </b-row>
                </b-form>
                <br/>
                <b-list-group>
                    <b-list-group-item v-for="food in foodList" href="#" :key="food.id">{{food.name}}
                    </b-list-group-item>
                </b-list-group>
                <br/>
                <b-pagination-nav base-url="#" :number-of-pages="10" v-model="currentPage"/>
            </centered-layout>
        </b-container>
    </div>
</template>

<script>
    import CenteredLayout from "../layouts/CenteredLayout";

    export default {
        name: 'SearchFood',
        components: {CenteredLayout},
        data() {
            return {
                foodList: [
                    {id: 0, name: "gwegwe"},
                    {id: 1, name: "suqlala"},
                    {id: 2, name: "louca"},
                    {id: 3, name: "josuer"}
                ],
                currentPage: 1,
                sorting: "desc",
                searchQuery: null,
                sortingCriteria: "score"
            }
        },
        computed: {
            buttonIcon() {
                return {
                    rotate: this.sorting === "desc" ? 180 : 0
                };
            }
        },
        methods: {
            reverseSorting() {
                this.sorting === "desc" ? this.sorting = "asc" : this.sorting = "desc";
            }
        }
    }
</script>


<style scoped>
    .full-width {
        width: 100%;
    }

    .button-form {
        width: 50px;
        height: 48px;
    }
</style>