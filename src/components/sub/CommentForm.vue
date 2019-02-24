<template>
    <b-form @submit="onSubmitComment">
        <b-form-group
                label="Enter a nice comment:"
                label-for="commentInput">
            <b-form-input id="commentInput"
                          type="text"
                          v-model="comment"
                          :state="!$v.comment.$invalid"
                          placeholder="Enter a comment">
            </b-form-input>
            <b-form-invalid-feedback>
                Comment must not be too short or too long! (max : 200 characters)
            </b-form-invalid-feedback>
        </b-form-group>
        <b-btn type="submit" variant="outline-warning" class="float-right"
               :disabled="$v.comment.$invalid">Comment
        </b-btn>
    </b-form>
</template>
<script>
    import {validationMixin} from "vuelidate";
    import {required} from "vuelidate/lib/validators"
    import minLength from "vuelidate/src/validators/minLength";
    import maxLength from "vuelidate/src/validators/maxLength";

    export default {
        name: 'CommentForm',
        props : ["location", "id"],
        data() {
            return {
                comment: "",
            }
        },
        methods : {
            onSubmitComment(evt) {
                evt.preventDefault();
                fetch(this.JAFA_SERVER + this.$props.location + this.$props.id + '/comment',
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            message: this.comment,
                        }), headers: {
                            "Content-Type": "application/json",
                            "Authorization": this.AUTHORIZATION
                        }
                    })
                    .catch((error) => console.error(error))
                    .then(() => {
                        this.comment = "";
                        this.$emit("newComment");
                    });
            },
        },
        mixins: [
            validationMixin
        ],
        validations: {
            comment: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(200),
            }
        }
    }
</script>
