<template>
    <ul>
        <li><router-link to="/Proveedores">Mis proveedores</router-link></li>
        <li><router-link to="/Pedidos-pendientes">Pedidos Pendientes</router-link></li>
        <li><router-link to="/Estadisticas">Estadísticas</router-link></li>
        <li><a>Cerrar sesión</a></li>
    </ul>
</template>

<script>
    export default {

    };
</script>

<style lang="scss" scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 360px;
        background-color: #D8DDE6;
        border-radius: 10px;
    }

    li a {
        display: block;
        color: #000B73;
        text-decoration: none;
        height: 80px;
        font-size: 24px;
        padding-top: 28px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
    }


    li {
        text-align: center;
    }    

    li a:hover:not(.active) {
        background-color: #010C74;
        color: #FFFFFF;
        border-radius: 10px;
    }
</style>