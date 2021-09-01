<template>
  <div class="test">
    <button @click="showModal">Mostrar resumen</button>
  </div>
  <notification />
  <modal-vue />
</template>

<script>
import ModalVue from "../components/Modal/ModalVue.vue";
import Notification from '../components/Modal/Notification.vue';
export default {
  components: { ModalVue, Notification },
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
.active {
  display: flex;
}
</style>