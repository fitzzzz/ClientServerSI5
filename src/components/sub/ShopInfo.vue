<template>
    <div>
        <h4>{{shop.name}}</h4>
        <p>{{shop.address}}</p>
        <p>{{shop.region}}</p>
        <img :src="getShopSrc(shop)"/>
    </div>
</template>
<script>
    export default {
        name: 'ShopInfo',
        props: {
            shop: {}
        },
        methods: {
            getShopSrc(shop) {
                let loc = shop.lat + "," + shop.long;
                let k = "AIzaSyA6mPkdTdLBmfqVlq" + "PcI_3GjJIKpTJgKf8";
                return "https://maps.googleapis.com/maps/api/staticmap?center=" + loc + "&zoom=17&size=400x400&key=" + k;
            }
        }
    }
</script>