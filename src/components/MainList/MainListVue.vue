<template>
  <div id="layout">
    <list-title-vue :titleData="titleData" />
    <ul>
      <list-item-vue
        v-for="(item, idx) in itemsData"
        :key="idx"
        :itemData="item"
      />
    </ul>
    <list-pagination-vue />
  </div>
</template>

<script>
  import ListItemVue from "./ListItemVue.vue";
  import ListPaginationVue from "./ListPaginationVue.vue";
  import ListTitleVue from "./ListTitleVue.vue";
  export default {
    components: { ListPaginationVue, ListItemVue, ListTitleVue },
    props: {
      titleData: Object,
      itemsData: Array,
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
    padding-top: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
