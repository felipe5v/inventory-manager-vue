<template>
  <div class="test">
    <button @click="showModal">Producto</button>
  </div>
  <modal-product-vue />
</template>
<script>
  import ModalProductVue from "../components/ModalProducts/ModalProductVue.vue";

  export default {
    components: { ModalProductVue },
    setup() {},
    methods: {
      showModal: function() {
        let containerModal = document.querySelector(".container-modal");
        containerModal.classList.add("active");
      },
    },
  };
</script>
<style lang="scss" scoped>
  .test {
    width: 100%;
    height: 100%;
    margin-top: 10%;
    display: flex;
    justify-content: center;
  }
</style>
