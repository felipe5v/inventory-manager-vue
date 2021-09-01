<template>
    <div class="row">
        <p>{{ itemData.name }}</p>
        <p>$ {{ valueToCOP(itemData.value) }}</p>
    </div>
</template>

<script>
export default {
    props: {
        itemData: Object,
    },
    setup() {},
    methods: {
        valueToCOP: function(str) {
            let value = new Intl.NumberFormat().format(parseInt(str));
            return value;
        }
    }
}
</script>

<style lang="scss" scoped>
    p {
        font-size: 16px;
        margin: 0px;
    }
</style>