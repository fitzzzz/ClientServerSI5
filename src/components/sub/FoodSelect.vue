<template>
    <v-select @search=loadSearch @search:focus="maybeSearch" placeholder="Search food"
              :options=database v-model=selected class="form-control"></v-select>
</template>

<script>
    import _ from 'lodash';

    export default {
        name: "FoodSelect",
        props: ["styleClass"],
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
            maybeSearch() {
                if (this.database.length <= 0) {
                    this.updateDatabase("", this);
                }
            },
            loadSearch(search, loading) {
                loading(true);
                this.loadFoods(search, loading, this);
            },
            updateDatabase: function (search, vm) {
                fetch(vm.JAFA_SERVER + 'foods?name=' + search)
                    .catch((error) => console.log(error))
                    .then((response) => response.json())
                    .then((data) => {
                        vm.database = data.data.map((elem) => {
                            return {label: elem.name, value: elem}
                        });
                    });
            }, loadFoods: _.debounce((search, loading, vm) => {
                vm.updateDatabase(search, vm);
                loading(false)
            }, 250)
        }
    }
</script>

<style>
    .v-select {
        padding: 0.5rem 1.5rem !important;
    }
    .dropdown-toggle {
        border: none !important;
    }
    .dropdown-toggle::after {
        content: none !important;
    }
</style>