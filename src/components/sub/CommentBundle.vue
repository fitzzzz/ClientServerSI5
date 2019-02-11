<template>
    <div>
        <CommentList :location="this.$props.location" :id="this.$props.id" :key="commentKey"></CommentList>
        <h4>Add your own comment</h4>
        <CommentForm :location="this.$props.location" :id="this.$props.id" @newComment="updateCommentList"></CommentForm>
    </div>
</template>
<script>
    import CommentForm from "./CommentForm"
    import CommentList from "./CommentList"

    export default {
        name: 'CommentBundle',
        components: {CommentForm, CommentList},
        props: ["id", "location"],
        data() {
            return {
                commentKey: 0
            }
        },
        methods: {
            updateCommentList() {
                this.commentKey += 1;
            }
        }
    }
</script>