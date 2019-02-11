<template>
    <div>
        <h4>Comments : </h4>
        <div v-for="comment in comments">
            {{comment}}
        </div>
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
                .catch((error) => console.log(error))
                .then((response) => response.json())
                .then((data) => {
                    console.log("GWE");
                    console.log(data);
                    this.comments = data;
                });
        }
    }
</script>
