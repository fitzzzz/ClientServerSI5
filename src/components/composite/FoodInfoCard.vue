<template>
    <div class="food-info-card my-3">
        <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img :src="getImgURL(food.id, food.images)" alt="No Image Found" class="rounded-0 img-card"/>
                </b-col>
                <b-col md="6">
                    <b-card-body :title="food.name">
                        <b-card-text>
                            <p>{{getFormattedFloat(food.score)}}</p>
                            <p>{{getFormattedFloat(food.price)}}€</p>
                        </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
    </div>

</template>

<script>

    export default {
        name: "FoodInfoCard",
        props: ['id'],
        data() {
            return {
                food: null,
            }
        },
        mounted() {
            fetch(this.JAFA_SERVER + 'foods/' + this.$props.id)
                .catch((error) => console.log(error))
                .then((response) => response.json())
                .then((data) => {
                    this.food = data;
                });
        },
        methods: {
            getImgURL(id, images) {
                return 'https://static.openfoodfacts.org/images/products/' + getFormattedId(id, images);
            },
            getFormattedFloat(float){
                return parseFloat(float).toFixed(2);
            },
        }
    }

    function getFormattedId(id, images) {
        let rev = -1;
        for (let i = 0; i < images.length; ++i) {
            if (images[i].name === 'front_fr') {
                rev = images[i].rev
            }
        }
        let formattedId = id.split('');
        if (formattedId.length === 13 || formattedId.length === 9) {
            let output = [];

            for (let j = 0; j < formattedId.length; j++) {
                output.push(formattedId[j]);
                if ((j + 1) % 3 === 0 && j < 9) {
                    output.push('/');
                }
            }
            formattedId = output.join('');
        } else {
            formattedId = id.toString();
        }
        return formattedId + '/front_fr.' + rev + '.400.jpg'
    }


</script>

<style scoped>
    .food-info-card{
        font-size: 10px;
        height: 80px;
    }

    h4{
        font-size: 12px;
    }

</style>