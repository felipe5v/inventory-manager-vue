<template>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div id="layout">
    <list-title-vue :titleData="titleData" />
    <ul>
      <list-item-vue
        v-for="(item, idx) in itemsData"
        :key="idx"
        :itemData="item"
      />
    </ul>
    <div>pagination</div>
  </div>
</template>

<script>
  import ListItemVue from "../components/MainList/ListItemVue.vue";
  import ListTitleVue from "../components/MainList/ListTitleVue.vue";
  export default {
    components: { ListItemVue, ListTitleVue },
    setup() {
      const itemsData = [
        {
          imgUrl:
            "https://m.media-amazon.com/images/I/51fr+X46fYL._AC_SL1453_.jpg",
          name: "martillo",
          price: "25000",
          unidadesMinimas: "8",
          pedidoEstipulado: "7",
        },
        {
          imgUrl:
            "https://www.mundialdetornillos.com/images/Noticias/destornillador-herramienta-multifuncional-a360.jpg",
          name: "destornillador",
          price: "12000",
          unidadesMinimas: "10",
          pedidoEstipulado: "9",
        },
        {
          imgUrl:
            "https://www.mundialdetornillos.com/images/Noticias/destornillador-herramienta-multifuncional-a360.jpg",
          name: "destornillador",
          price: "12000",
          unidadesMinimas: "10",
          pedidoEstipulado: "9",
        },
      ];
      const titleData = {
        mainTitle: "Productos",
        buttonText: "Agregar Producto",
        titles: ["Nombre", "Disponible", "Solicitar", "Editar"],
      };
      return { itemsData, titleData };
    },
  };
</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    max-width: 1440px;
    min-width: 100%;
  }
  #layout {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
