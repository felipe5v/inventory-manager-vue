<template>
  <div class="test">
    <button @click="showModal">Mostrar resumen</button>
  </div>
  <modal-vue />
</template>

<script>
import ModalVue from "../components/Modal/ModalVue.vue";
export default {
  components: { ModalVue },
  setup() {},
  methods: {
    showModal: function () {
      let containerModal = document.querySelector('.container-modal');
      containerModal.classList.add('active');
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