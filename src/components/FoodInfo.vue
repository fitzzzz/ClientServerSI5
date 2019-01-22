<template>
    <div>
        <p>{{food.name}}</p>
        <p>{{food.ingredients}}</p>
    </div>
</template>

<script>
    export default {
        name: "FoodInfo",
        props: ['food']
    }
</script>
