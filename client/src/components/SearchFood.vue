<template>
    <div id="search-food-component">
        <b-container>
            <!--<b-row>-->
                <!--<b-col cols="8" offset="2">-->
                    <!--<b-form-input v-model="searchValue" type="text" placeholder="Search Food"></b-form-input>                -->
                <!--</b-col>-->
            <!--</b-row>-->
            <!--<div v-if="searchValue != ''">    -->
                <!--<b-row v-for="s in searchResult" :key="s.name">-->
                    <!--<b-col cols="8" offset="2">-->
                        <!--<div class="search-result">-->
                            <!--<div class="search-result-content">-->
                                <!--{{s.name}}-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</b-col>-->
                <!--</b-row>-->
            <!--</div>-->
            <b-row>
                <b-col cols="8" offset="2">
                    <v-select taggable placeholder="Search food" :options=database></v-select>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'SearchFood',
        data() {
            return {
                database: [{label: 'david', value: 0},
                    {label: 'david1', value: 10},
                    {label: 'david2', value: 20},
                    {label: 'david3', value: 30},
                    {label: 'david4', value: 30},
                    {label: 'david5', value: 30},
                    {label: 'david6', value: 30},
                    {label: 'david7', value: 30},
                    {label: "JA", value: 100},
                    {label: "Guillaume", value: 150},
                    {label: "Zaki", value: 100}],
                searchValue: ''
            }
        },
        computed: {
            searchResult: function() {
                if (this.searchValue == '') {
                    return null
                }
                return this.database.filter(data => data.name.toUpperCase().includes(this.searchValue.toUpperCase())).slice(0, 5)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#search-food-component {
    margin-top: 5em
}

.search-result {
    padding-top: 1em;
    padding-bottom: 1em; 
    background-color: lightskyblue;
    border-bottom: 1px solid black;
}

.search-result-content {
    padding-left: 1em;
}

.search-result:hover {
    background-color: gray
}

</style>
