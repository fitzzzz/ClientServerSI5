<template>
    <div class="nutrition-tab">
        <h4>Nutrition</h4>
        <table class="table table-hover table-wrapper-scroll-y">
            <thead>
            <tr>
                <th scope="col" class="py-2">Informations Nutritionnelles</th>
                <th scope="col" class="py-2">Pour 100g/100mL</th>
                <th scope="col" class="py-2">Par portion</th>
            </tr>
            </thead>
            <tbody>
            <tr :class="getEnergySanityClass(food.nutriments)">
                <th scope="row" class="py-2">Energie</th>
                <td v-if="food.nutriments.energy_100g !== '' && food.nutriments.energy_100g != null"
                    class="py-2">{{food.nutriments.energy_100g}} {{food.nutriments.energy_unit}}
                </td>
                <td v-else class="py-2">-</td>
                <td v-if="food.nutriments.energy_serving !== '' && food.nutriments.energy_serving != null"
                    class="py-2">{{food.nutriments.energy_serving}} {{food.nutriments.energy_unit}}
                </td>
                <td v-else class="py-2">-</td>
            </tr>
            <tr :class="getSaturatedFatSanityClass(food.nutriments)">
                <th scope="row" class="py-2">Acides gras saturés</th>
                <td v-if="food.nutriments.fat_100g !== '' && food.nutriments.fat_100g != null" class="py-2">
                    {{food.nutriments["saturated-fat_100g"]}} {{food.nutriments.fat_unit}}
                </td>
                <td v-else class="py-2">-</td>
                <td v-if="food.nutriments.fat_serving !== '' && food.nutriments.fat_serving != null"
                    class="py-2"> {{food.nutriments["saturated-fat_serving"]}} {{food.nutriments.fat_unit}}
                </td>
                <td v-else class="py-2">-</td>
            </tr>
            <tr :class="getSaltSanityClass(food.nutriments)">
                <th scope="row" class="py-2">Sel</th>
                <td v-if="food.nutriments.salt_100g !== '' && food.nutriments.salt_100g != null" class="py-2">
                    {{food.nutriments.salt_100g}} {{food.nutriments.salt_unit}}
                </td>
                <td v-else class="py-2">-</td>
                <td v-if="food.nutriments.salt_serving !== '' && food.nutriments.salt_serving != null"
                    class="py-2">{{food.nutriments.salt_serving}} {{food.nutriments.salt_unit}}
                </td>
                <td v-else class="py-2">-</td>
            </tr>
            <tr :class="getSugarsSanityClass(food.nutriments)">
                <th scope="row" class="py-2">Sucre</th>
                <td v-if="food.nutriments.sugars_100g !== '' && food.nutriments.sugars_100g != null"
                    class="py-2">{{food.nutriments.sugars_100g}} {{food.nutriments.sugars_unit}}
                </td>
                <td v-else class="py-2">-</td>
                <td v-if="food.nutriments.sugars_serving !== '' && food.nutriments.sugars_serving != null"
                    class="py-2">{{food.nutriments.sugars_serving}} {{food.nutriments.sugars_unit}}
                </td>
                <td v-else class="py-2">-</td>
            </tr>
            <tr :class="getFiberSanityClass(food.nutriments)">
                <th scope="row" class="py-2">Fibres</th>
                <td v-if="food.nutriments.fiber_100g !== '' && food.nutriments.fiber_100g != null" class="py-2">
                    {{food.nutriments.fiber_100g}} {{food.nutriments.fiber_unit}}
                </td>
                <td v-else class="py-2">-</td>
                <td v-if="food.nutriments.fiber_serving !== '' && food.nutriments.fiber_serving != null"
                    class="py-2">{{food.nutriments.fiber_serving}} {{food.nutriments.fiber_unit}}
                </td>
                <td v-else class="py-2">-</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "FoodNutritionTab",
        props: ['food'],
        methods: {
            getEnergySanityClass(nutriments) {
                return nutriments.energy_100g !== '' && nutriments.energy_100g != null ? getEnergyClass(nutriments.energy_100g) : '';
            },
            getSaltSanityClass(nutriments) {
                return nutriments.salt_100g !== '' && nutriments.salt_100g != null ? getSaltClass(nutriments.salt_100g) : '';
            },
            getSaturatedFatSanityClass(nutriments) {
                return nutriments["saturated-fat_100g"] !== '' && nutriments["saturated-fat_100g"] != null ? getSaturatedFatClass(nutriments["saturated-fat_100g"]) : '';
            },
            getSugarsSanityClass(nutriments) {
                return nutriments.sugars_100g !== '' && nutriments.sugars_100g != null ? getSugarsClass(nutriments.sugars_100g) : '';
            },
            getFiberSanityClass(nutriments) {
                return nutriments.fiber_100g !== '' && nutriments.fiber_100g != null ? getFiberClass(nutriments.fiber_100g) : '';
            }
        }
    }

    function getEnergyClass(energy100g) {
        if (energy100g < 160) {
            return "table-very-sane";
        } else if (energy100g < 360) {
            return "table-sane";
        } else if (energy100g < 560) {
            return "table-warning";
        } else {
            return "table-danger";
        }
    }

    function getSaturatedFatClass(fat100g) {
        if (fat100g < 2) {
            return "table-very-sane";
        } else if (fat100g < 4) {
            return "table-sane";
        } else if (fat100g < 7) {
            return "table-warning";
        } else {
            return "table-danger";
        }
    }

    function getSugarsClass(sugar100g) {
        if (sugar100g < 9) {
            return "table-very-sane";
        } else if (sugar100g < 18) {
            return "table-sane";
        } else if (sugar100g < 31) {
            return "table-warning";
        } else {
            return "table-danger";
        }
    }

    function getSaltClass(salt100g) {
        if (salt100g < 0.46) {
            return "table-very-sane";
        } else if (salt100g < 0.92) {
            return "table-sane";
        } else if (salt100g < 1.62) {
            return "table-warning";
        } else {
            return "table-danger";
        }
    }

    function getFiberClass(fiber100g) {
        if (fiber100g > 3.5) {
            return "table-very-sane";
        } else {
            return "table-sane";
        }
    }

</script>

<style scoped>
    .tab-title {
        font-size: 20px;
    }

    .table-wrapper-scroll-y {
        display: block;
        max-height: 400px;
        overflow-y: auto;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        width: 100%;
    }

    .table-sane{
        background-color: #cdedd8;
    }

    .table-very-sane{
        background-color: #94e2af;
    }

</style>