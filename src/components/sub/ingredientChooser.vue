<template>
    <b-form-select v-model="selected" :options="options" class="mb-3"/>
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
                console.log("BAAAH");
                this.$emit("selection", this.$props.id, this.selected);
            }
        },
        mounted() {
            this.options = this.$props.ingredients.map((ingredient) => {
                return {
                    value: ingredient.id,
                    text: ingredient.name,
                    ingredient: ingredient
                }
            });
            console.log(this.options);
            console.log(this.$props.id);
        }
    }
</script>