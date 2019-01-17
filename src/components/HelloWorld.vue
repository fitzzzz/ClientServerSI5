<template>
    <div>
        <label>
            Nom : <input type="text" v-model="nom">
        </label>
        <label>
            Cuisine : <input type="text" v-model="cuisine">
        </label>
        <button v-on:click="ajouterRestaurant">Ajouter</button>

        <h1>Liste des restaurants ({{restaurants.length}}):</h1>
        <table class="cinereousTable">
            <thead>
            <tr>
                <th>Nom du resto</th>
                <th>Type de bouffe</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="r in restaurants"
                :key="r.name"
                @click="supprimerRestaurant(index)">
                <td>{{r.nom}}</td>
                <td :class="getColor(r.cuisine)">cuisine {{r.cuisine}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                restaurants: [],
                nom: "",
                cuisine: ""
            }
        },
        methods: {
            supprimerRestaurant: function (index) {
                this.restaurants.splice(index, 1);
            }
            ,
            ajouterRestaurant: function () {
                let nouveauRestaurant = {
                    nom: this.nom,
                    cuisine: this.cuisine,
                };

                this.restaurants.push(nouveauRestaurant);
                this.nom = "";
                this.cuisine = "";
            },
            getColor: function (cuisine) {
                switch (cuisine.toUpperCase()) {
                    case "ITALIENNE" :
                        return "ita";
                    case "JAPONAISE" :
                        return "jap";
                    default :
                        return "base";
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    table.cinereousTable {
        border: 6px solid #948473;
        background-color: #FFE3C6;
        width: 100%;
        text-align: center;
    }

    table.cinereousTable td, table.cinereousTable th {
        border: 1px solid #948473;
        padding: 4px 4px;
    }

    td.base {
        color: black;
    }

    td.ita {
        color: rgb(66, 49, 31);
    }

    td.jap {
        color: rebeccapurple;
    }

    table.cinereousTable tbody td {
        font-size: 24px;
    }

    table.cinereousTable thead {
        background: #948473;
        background: -moz-linear-gradient(top, #afa396 0%, #9e9081 66%, #948473 100%);
        background: -webkit-linear-gradient(top, #afa396 0%, #9e9081 66%, #948473 100%);
        background: linear-gradient(to bottom, #afa396 0%, #9e9081 66%, #948473 100%);
    }

    table.cinereousTable thead th {
        font-size: 28px;
        font-weight: bold;
        color: #F0F0F0;
        text-align: center;
        border-left: 2px solid #948473;
    }

    table.cinereousTable thead th:first-child {
        border-left: none;
    }

</style>
