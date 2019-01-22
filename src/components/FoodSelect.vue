<template>
    <v-select @search=search placeholder="Search food"
              :options=database v-model=selected></v-select>
</template>

<script>
    import _ from 'lodash';
    import axios from 'axios';

    export default {
        name: "FoodSelect",
        data() {
            return {
                database: [],
                selected: null,
            }
        },
        watch: {
            selected: function (val) {
                this.$emit('selected', val);
            }
        },
        methods: {
            search(search, loading) {
                loading(true);
                this.getRepositories(search, loading, this);
            },
            getRepositories: _.debounce((search, loading, vm) => {
                console.log(search);
                axios.get('https://jafa-server.herokuapp.com/jafa/api/foods?name=' + search)
                    .catch(function (error) {
                        console.log(error);
                    })
                    .then(function (response) {
                        vm.database = response.data.map((elem) => {
                            return {label: elem.name, value: elem}
                        });
                    });
                loading(false)
            }, 250)
        }
    }
</script>

<style scoped>

</style>