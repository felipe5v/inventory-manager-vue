<template>
  <div class="summary">
    <h1>Resumen del pedido</h1>
    <div class="summary-content">
      <div class="row">
        <p><strong>Proveedor</strong></p>
        <p><strong>Costo</strong></p>
      </div>
      <modal-element
        v-for="(item, index) in itemsData"
        :key="index"
        :itemData="item"
      />
    </div>
    <div class="summary-total">
      <p><strong>Total</strong></p>
      <p class="total-value">$ {{ valueToCOP(totalValue(this.itemsData)) }}</p>
    </div>
  </div>
  <div class="control-btns">
    <main-style-button class="btn confirm" @click="sendOrder">Confirmar</main-style-button>
    <main-style-button class="btn cancel" @click="closeModal"
      >Cancelar</main-style-button
    >
  </div>
</template>

<script>
import MainStyleButton from "../ElementHelpers/MainStyleButton.vue";
import ModalElement from "./ModalElement.vue";
export default {
  components: { MainStyleButton, ModalElement },
  setup() {
    const itemsData = [
      {
        name: "ProTools S.A",
        value: 500000,
      },
      {
        name: "Metalurgica",
        value: 4500000,
      },
      {
        name: "El punto de la herramienta",
        value: 5000000,
      },
      {
        name: "Insumos y metales",
        value: 300000,
      },
    ];
    return { itemsData };
  },
  methods: {
    totalValue: function (array) {
      let total = 0;
      array.forEach((obj) => {
        total += obj.value;
      });
      return total;
    },
    valueToCOP: function (str) {
      let value = new Intl.NumberFormat().format(parseInt(str));
      return value;
    },
    closeModal: function () {
      let containerModal = document.querySelector(".container-modal");
      containerModal.classList.remove("active");
    },
    sendOrder: function () {
      console.log('hi');
      let notification = document.querySelector('.notification');
      let modal = document.querySelector('.container-modal')
      notification.classList.add('active')
      modal.classList.remove('active')
      setTimeout(() => {
        notification.classList.remove('active');
      }, 3000);
    }
  },
};
</script>

<style lang="scss" scoped>
.summary {
  margin-bottom: 20px;
  padding: 12px 30px;
  border: 1px solid #a0a0a0;
  border-radius: 10px;
  display: grid;
  &-content {
    .row {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      line-height: 26px;
      p {
        font-size: 20px;
        margin: 0;
      }
    }
  }
  &-total {
    align-self: end;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    p {
      margin: 16px 0px;
    }
  }
  h1 {
    font-size: 28px;
    color: #000b73;
    margin: 0px auto;
  }
}
.control-btns {
  display: flex;
  justify-content: space-between;
  .btn {
    width: 41%;
    margin: 0;
    font-size: 20px;
    cursor: pointer;
    transform: scale(0.9);
    transition: 0.3s;
    box-shadow: none;
    &:hover {
      transform: scale(1);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  .cancel {
    background: #9f2b2b;
    border: 2px solid #9f2b2b;
  }
}
</style>