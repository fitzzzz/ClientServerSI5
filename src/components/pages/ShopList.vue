<template>
    <b-container>
        <centered-layout>
            <h2>Access The Shops</h2>
            <v-select placeholder="Search Shop"
                      :options=shops v-model=selectedShop class="form-control"></v-select>

            <img v-if="selectedShop"
                 :src="getShopSrc()"
            alt="Si ca s'affiche pas c'est parce qu'il y a pas la variable d'environnement de 7"/>
        </centered-layout>
    </b-container>
</template>

<script>
    import CenteredLayout from "../layouts/CenteredLayout";

    export default {
        name: 'ShopList',
        components: {CenteredLayout},
        data() {
            return {
                shops: [],
                selectedShop: null
            }
        },
        methods: {
            getShopSrc() {
                console.log(process.env);
                return "https://maps.googleapis.com/maps/api/staticmap?center=" + this.selectedShop.value.address + "&zoom=17&size=400x400&key=" + process.env.GOOGLE_APIKEY
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

