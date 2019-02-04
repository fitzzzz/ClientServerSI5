<template>
    <div class="food-info-container">
        <h4>{{selection.value.name}}</h4>
    </div>
</template>
<script>
    export default {
        name: 'MinimalFoodInfo',
        props: {
            selection: {}
        }
    }
</script>

<style>
    .food-info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h4 {
        margin-bottom: 30px;
        margin-top: 30px;
    }
</style>
