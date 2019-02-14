<template>
    <div>
        <CommentList :location="this.$props.location" :id="this.$props.id" :key="commentKey"></CommentList>
        <h4>Add your own comment</h4>
        <login-wrapper>
            <CommentForm :location="this.$props.location" :id="this.$props.id" @newComment="updateCommentList"></CommentForm>
            <template slot="notconnected">
                <h6>You need to be connected to add a comment</h6>
            </template>
        </login-wrapper>
    </div>
</template>
<script>
    import CommentForm from "./CommentForm"
    import CommentList from "./CommentList"
    import LoginWrapper from "../layouts/LoginWrapper";

    export default {
        name: 'CommentBundle',
        components: {LoginWrapper, CommentForm, CommentList},
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