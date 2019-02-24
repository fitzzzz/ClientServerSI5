<template>
    <b-form-select v-if="options.length > 0" v-model="selected" :options="options" class="mb-3"/>
    <div v-else><p>Pas de propositions pour l'ingrédient n° {{this.$props.id + 1}} </p><br/></div>
</template>

<script>
    export default {
        name: "ingredientChooser",
        props: ["ingredients", "id"],
        data() {
            return {
                selected: null,
                options: []
            }
        },
        watch: {
            selected() {
                this.$emit("selection", this.$props.id, this.selected);
            }
        },
        mounted() {
            this.options = this.$props.ingredients.map((ingredient) => {
                return {
                    value: ingredient,
                    text: ingredient.name,
                }
            });
        }
    }
</script>