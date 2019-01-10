<template>
    <div id="search-food-component">
        <b-container>
            <b-row>
                <b-col cols="8" offset="2">
                    <b-form-input v-model="searchValue" type="text" placeholder="Search Food"></b-form-input>                
                </b-col>
            </b-row>
            <div v-if="searchValue != ''">    
                <b-row v-for="s in searchResult" :key="s.name">
                    <b-col cols="8" offset="2">
                        <div class="search-result">
                            <div class="search-result-content">
                                {{s.name}}
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>    
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'SearchFood',
        data() {
            return {
                database: [{name: 'david', salt: 0},
                    {name: 'david1', salt: 10}, 
                    {name: 'david2', salt: 20},
                    {name: 'david3', salt: 30},
                    {name: 'david4', salt: 30},
                    {name: 'david5', salt: 30},
                    {name: 'david6', salt: 30},
                    {name: 'david7', salt: 30},
                    {name: "JA", salt: 100}, 
                    {name: "Guillaume", salt: 150}, 
                    {name: "Zaki", salt: 100}],
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
