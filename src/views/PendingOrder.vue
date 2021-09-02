<template>
  <main-list-vue :titleData="titleData" :itemsData="itemsData" />
</template>

<script>
  import MainListVue from "../components/MainList/MainListVue.vue";
  export default {
    components: { MainListVue },
    setup() {
      const itemsData = [
        { productName: "hola", imgUrl: "https://placeimg.com/200/200/nature" },
        { productName: "hola", imgUrl: "https://placeimg.com/200/200/nature" },
        { productName: "hola", imgUrl: "https://placeimg.com/200/200/nature" },
      ];
      const titleData = {
        mainTitle: "Pedido Pendiente",
        buttonText: "Confirmar Pedido",
        titles: ["Nombre", "Disponible", "A Solicitar", "Borrar"],
        buttonType: "delete",
      };
      return { itemsData, titleData };
    },
  };
</script>
