<template>
  <li>
    <div id="section-1">
      <img :src="itemData.imgUrl" :alt="itemData.name" />
      <div>
        <p>{{ itemData.name }}</p>
        <p>${{ itemData.price }}</p>
      </div>
    </div>
    <p>{{ itemData.unidadesMinimas }} unidades</p>
    <main-style-button>
      {{ itemData.pedidoEstipulado }}
    </main-style-button>
    <i class="fas fa-edit"></i>
  </li>
</template>

<script>
  import MainStyleButton from "../ElementHelpers/MainStyleButton.vue";
  export default {
    components: { MainStyleButton },
    props: {
      itemData: Object,
    },
  };
</script>

<style lang="scss" scoped>
  li {
    display: flex;
  }
  img {
    width: 320px;
    height: auto;
  }
  section-1 {
    display: flex;
  }
</style>
