<template>
  <div class="container-modal">
    <div class="modal">
      <a class="btn-circle" @click="closeModal"
        ><i class="fas fa-times fa-2x"></i
      ></a>
      <modal-product-content />
    </div>
  </div>
</template>

<script>
  import ModalProductContent from "./ModalProductContent.vue";

  export default {
    components: { ModalProductContent },
    setup() {},
    methods: {
      closeModal: function() {
        let containerModal = document.querySelector(".container-modal");
        containerModal.classList.remove("active");
      },
    },
  };
</script>

<style lang="scss" scoped>
  .container-modal {
    display: none;
    width: 100%;
    height: 100%;
    background: rgba(114, 118, 132, 0.42);
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    .modal {
      background: #fdfdfd;
      padding: 40px 40px 30px;
      border-radius: 10px;
      position: relative;
      color: #5d5a5a;
      display: grid;
      .btn-circle {
        width: 50px;
        height: 50px;
        background: #9f2b2b;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -16px;
        right: -16px;
        color: #f6f6f6;
        transform: scale(0.93);
        transition: 0.3s;
        &:hover {
          transform: scale(1);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
  .active {
    display: flex;
  }
</style>
