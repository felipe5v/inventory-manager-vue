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
    <nav-bar-menu />
  </div>
</template>
<script>
  import NavBarMenu from "../components/ElementHelpers/NavBarMenu.vue";
  export default {
    components: { NavBarMenu },
    setup() {},
  };
</script>

<style>
  #layout {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
