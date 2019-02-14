<template>
    <div v-if="comments && comments.length > 0">
        <h4>Commentaires</h4>
        <section class="comments">
            <div v-for="comment of comments">
                <article class="comment">
                    <div class="comment-body">
                        <div class="text">
                            <p>{{comment.message}}</p>
                        </div>
                        <p class="attribution">posté par <a href="#non">{{comment.author.username}}</a> le <span>{{comment.author.createdDate | moment}}</span>
                        </p>
                    </div>
                </article>
            </div>
        </section>
        ​
    </div>
    <div v-else>
        <h4>No comments</h4>
    </div>
</template>
<script>

    import moment from 'moment';


    export default {
        name: 'CommentList',
        props: ["id", "location"],
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
        },
        methods: {
            moment: function () {
                return moment();
            }
        },
        filters: {
            moment: function (date) {
                return moment(date).format('DD/MM/YYYY à h:mm:ss');
            }
        }
    }
</script>

<style>
    article, aside, figure, footer, header, hgroup, menu, nav, section { display: block }

    a {
        color: #6d84b4;
        text-decoration: none;
    }

    section {
        padding-right: 85px;
        padding-top: 20px;
        padding-bottom: 20px;
        height: 100%;
    }

    .comment {
        overflow: hidden;
        padding: 0 0 1em;
        border-bottom: 1px solid #ddd;
        margin: 0 0 1em 40px;
        width: 100%;
    }

    .comment-body { overflow: hidden }

    .comment .text {
        padding: 10px;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        background: #fff;
    }

    .comment .text p:last-child { margin: 0 }

    .comment .attribution {
        margin: 0.5em 0 0;
        font-size: 14px;
        color: #666;
    }
</style>