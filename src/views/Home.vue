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
  <div>title header</div>
  <ul>
    <list-item-vue
      v-for="(item, idx) in itemsData"
      :key="idx"
      :itemData="item"
    />
  </ul>
  <div>pagination</div>
</template>

<script>
  import ListItemVue from "../components/ListItem/ListItemVue.vue";
  export default {
    components: { ListItemVue },
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
      return { itemsData };
    },
  };
</script>

<style></style>
