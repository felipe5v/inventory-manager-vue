<template>
    <div class="notification">
        <p><strong>El pedido ha sido envia de manera exitosa!</strong></p>
    </div>
</template>

<script>
export default {
    setup() {},
}
</script>

<style lang="scss" scoped>
    .notification {
        display: none;
        position: absolute; 
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        width: 70%;
        bottom: 20px;
        background: rgb(154, 201, 85);
        border: 1px solid rgb(154, 201, 85);
        border-radius: 10px;
        text-align: center;
        p {
            font-size: 18px;
            margin: 18px auto;
            color: #FFFFFF;
        }
    }
</style>