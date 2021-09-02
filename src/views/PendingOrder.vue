<template>
  <main-list-vue :titleData="titleData" :itemsData="itemsData" />
  <modal-vue />
</template>

<script>
  import MainListVue from "../components/MainList/MainListVue.vue";
  import ModalVue from "../components/Modal/ModalVue.vue";
  export default {
    components: { MainListVue, ModalVue },
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
        onClick() {
          let containerModal = document.querySelector(
            ".container-modal-summary"
          );
          containerModal.classList.add("active");
        },
      };
      return { itemsData, titleData };
    },
  };
</script>
