<template>
    <div v-if="comments && comments.length > 0">
        <h4>Comments : </h4>
        <div v-for="comment in comments">
            {{comment}}
        </div>
    </div>
    <div v-else>
        <h4>No comments</h4>
    </div>
</template>
<script>

    export default {
        name: 'CommentList',
        props : ["id", "location"],
        data() {
            return {
                comments: []
            }
        },
        mounted() {
            console.log(this.$props);
            fetch(this.JAFA_SERVER + this.$props.location + this.$props.id + '/comment')
                .catch((error) => console.error(error))
                .then((response) => response.json())
                .then((data) => {
                    this.comments = data;
                });
        }
    }
</script>
