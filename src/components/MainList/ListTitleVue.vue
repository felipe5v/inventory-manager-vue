<template>
  <div>
    <h1>{{ titleData.mainTitle }}</h1>
    <main-style-button id="button" :onClickFunction="titleData.onClick">{{
      titleData.buttonText
    }}</main-style-button>
    <span
      v-for="(title, idx) in titleData.titles"
      :id="'span-' + idx"
      :key="idx"
      class="titles"
      >{{ title }}</span
    >
  </div>
</template>

<script>
  import MainStyleButton from "../ElementHelpers/MainStyleButton.vue";
  export default {
    components: { MainStyleButton },
    props: {
      titleData: Object,
    },
  };
</script>

<style lang="scss" scoped>
  div {
    display: grid;
    grid-template-columns: 150px 1fr 1fr 1fr 1fr;
    width: 80%;
    max-width: 1440px;
    column-gap: 20px;
    margin-bottom: 1rem;
  }
  h1 {
    grid-column: 2 / span 2;
    margin: 0;
    font-size: 36px;
  }
  #button {
    grid-column: 5;
    font-weight: normal;
    font-size: 16px;
    width: 190px;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  .titles {
    margin: 0 auto;
  }
  #span-0 {
    grid-column: 2;
    margin: 0;
  }
</style>
