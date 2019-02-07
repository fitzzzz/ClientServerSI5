<template>
    <b-container>
        <centered-layout>
            <h2>Access The Shops</h2>
            <v-select placeholder="Search Shop"
                      :options=shops v-model=selectedRecipe class="form-control"></v-select>
            <ShopInfo v-if="selectedRecipe" :shop="selectedRecipe.value"/>
        </centered-layout>
    </b-container>
</template>

<script>
    import CenteredLayout from "../layouts/CenteredLayout";
    import ShopInfo from "../sub/ShopInfo";

    export default {
        name: 'ShopList',
        components: {ShopInfo, CenteredLayout},
        data() {
            return {
                shops: [],
                selectedRecipe: null
            }
        },
        mounted() {
            fetch(this.JAFA_SERVER + "stores")
                .catch((error) => console.log(error))
                .then((response) => response.json())
                .then((data) => {
                    this.shops = data.data.map((elem) => {
                        return {label: elem.name, value: elem}
                    });
                });
        }
    }
</script>

