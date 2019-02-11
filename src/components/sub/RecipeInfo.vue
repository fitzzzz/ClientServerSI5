<template>
    <div>
        <p>{{recipe}}</p>
    </div>
</template>
<script>
    export default {
        name: 'RecipeInfo',
        props: {
            recipe: {}
        },
    }
</script>