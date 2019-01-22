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
                    <v-select @search=search v-model="selected" placeholder="Search food"
                              :options=database></v-select>
                </b-col>
            </b-row>
            <div v-if="selected!=null">
                <p>{{selected.value.name}}</p>
                <p>{{selected.value.ingredients}}</p>
            </div>
        </b-container>
    </div>
</template>

<script>
    import axios from 'axios';
    import _ from 'lodash';

    export default {
        name: 'SearchFood',
        data() {
            return {
                database: [],
                selected: null,
            }
        },
        methods: {
            search(search, loading) {
                console.log(search);
                loading(true);
                this.getRepositories(search, loading, this);
            },
            getRepositories: _.debounce((search, loading, vm) => {
                console.log(search);
                axios.get('https://jafa-server.herokuapp.com/jafa/api/foods?name=' + search)
                    .then(function (response) {
                        vm.database = response.data.map((elem) => {
                            return {label: elem.name, value: elem}
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                loading(false)
            }, 250)
        }
    }
</script>
