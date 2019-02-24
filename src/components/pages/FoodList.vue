<template>
    <div id="search-food-component">
        <b-container>
            <centered-layout>
                <h2>List some food</h2>
                <b-form inline>
                    <b-row class="full-width">
                        <b-col md="3" class="mb-2">
                            <div>
                                <p>Filter by name</p>
                                <b-input class="full-width" @input="refreshList" v-model="searchQuery"
                                         placeholder="Filter"/>
                            </div>
                        </b-col>
                        <b-col md="3" class="mb-2">
                            <div>
                                <p>Order by</p>
                                <b-form-select class="full-width" @select="refreshList" v-model="sortingCriteria">
                                    <option value="score">Score</option>
                                    <option value="price">Price</option>
                                </b-form-select>
                            </div>
                        </b-col>
                        <b-col md="3" class="mb-2">
                            <div>
                                <p>Region</p>
                                <b-form-select class="full-width" @select="refreshList" v-model="region"
                                               :options="regions">
                                </b-form-select>
                            </div>
                        </b-col>
                        <b-col md="3" class="mb-2">
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
                <div v-if="foodList">
                    <FoodItems :food-list="foodList"/>
                </div>
                <div class="text-center" v-else>
                    <font-awesome-icon icon="spinner" size="5x" spin/>
                </div>
                <br/>
                <b-pagination-nav base-url="#/foodlist/" :number-of-pages="nbPages" v-model="currentPage"/>
            </centered-layout>
        </b-container>
    </div>
</template>

<script>
    import CenteredLayout from "../layouts/CenteredLayout";
    import FoodItems from "../sub/FoodItems";
    import _ from "lodash";

    export default {
        name: 'SearchFood',
        components: {FoodItems, CenteredLayout},
        data() {
            return {
                foodList: null,
                currentPage: 1,
                sorting: "desc",
                searchQuery: "",
                sortingCriteria: "score",
                region: "",
                nbPages: 1
            }
        },
        computed: {
            buttonIcon() {
                return {
                    rotate: this.sorting === "desc" ? 0 : 180
                };
            }
        },
        watch: {
            currentPage: function () {
                this.refreshList();
            },
            sorting: function () {
                this.refreshList();
            },
            searchQuery: function () {
                this.refreshList();
            },
            sortingCriteria: function () {
                this.refreshList();
            },
            region: function () {
                this.refreshList();
            }
        },
        methods: {
            reverseSorting() {
                this.sorting === "desc" ? this.sorting = "asc" : this.sorting = "desc";
            },
            refreshList: _.debounce(function () {
                let url = new URL(this.JAFA_SERVER + "foods");
                let params = {
                    name: this.searchQuery,
                    order: this.sorting,
                    criteria: this.sortingCriteria,
                    page: this.currentPage,
                    region: this.region
                };
                url.search = new URLSearchParams(params);
                fetch(url)
                    .catch((error) => console.error(error))
                    .then((response) => response.json())
                    .then((data) => {
                        this.nbPages = Math.ceil(data.count / 20);
                        if (this.sortingCriteria === "score") {
                            this.foodList = data.data.map((elem) => {
                                return {id: elem.id, name: elem.name, value: elem.score}
                            });
                        }
                        else {
                            this.foodList = data.data.map((elem) => {
                                return {id: elem.id, name: elem.name, value: elem.price}
                            });
                        }
                    });
            }, 200)
        },
        mounted() {
            fetch(this.JAFA_SERVER + 'regions')
                .catch((error) => console.error(error))
                .then((response) => response.json())
                .then((data) => {
                    this.regions = data.map((region) => {
                        return {
                            value: region,
                            text: region,
                        }
                    });
                    this.regions.push({value: "", text: "Any"})
                });
            this.refreshList();
        }
    }
</script>


<style scoped>
    .full-width {
        width: 100%;
    }

    .center {
        margin: auto;
    }

    .button-form {
        width: 50px;
        height: 48px;
    }
</style>