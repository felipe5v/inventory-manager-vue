<template>
  <li>
    <div id="section-1">
      <div id="img-container">
        <img :src="itemData.imgUrl" :alt="itemData.productName" />
      </div>
    </div>
    <div id="img-caption">
      <p id="name">{{ itemData.productName }}</p>
      <p id="price">$25000</p>
    </div>
    <p>{{ itemData.minimumAmount }} unidades</p>
    <main-style-button id="button">
      8 unidades
    </main-style-button>
    <i
      @click="showModal"
      class="fas fa-edit"
      v-if="buttonType === 'edit' ? true : false"
    ></i>
    <delete-button v-if="buttonType === 'delete' ? true : false" />
    <modal-product-vue />
  </li>
</template>

<script>
  import MainStyleButton from "../ElementHelpers/MainStyleButton.vue";
  import DeleteButton from "../ElementHelpers/DeleteButton.vue";
  import ModalProductVue from "../ModalProducts/ModalProductVue.vue";
  export default {
    components: { MainStyleButton, DeleteButton, ModalProductVue },
    props: {
      itemData: Object,
      buttonType: String,
    },
    methods: {
      showModal: function() {
        let containerModal = document.querySelector(".container-modal");
        containerModal.classList.add("active");
      },
    },
  };
</script>

<style lang="scss" scoped>
  li {
    display: grid;
    grid-template-columns: 150px 1fr repeat(3, 1fr);
    width: 80%;
    max-width: 1440px;
    height: auto;
    flex: 1;
    gap: 20px;
    border: 2px solid #ededed;
    border-radius: 17px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    max-width: 1440px;
    * {
      flex: 1;
      text-align: center;
    }
    i {
      max-width: 20%;
      font-size: 1.5rem;
      margin: 0 auto;
    }
    p {
      margin: 0;
    }
    #section-1 {
      #img-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
      }

      img {
        width: 100%;
        min-width: 100px;
        height: auto;
        grid-area: img;
        justify-self: center;
        align-self: center;
        max-width: 120px;
      }
      #name {
        grid-area: name;
      }
      #price {
        grid-area: price;
      }
    }
    #img-caption {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      p {
        display: flex;
        align-items: center;
      }
    }
    #button {
      margin: 0 auto;
      font-weight: normal;
      font-size: 16px;
      max-width: 250px;
    }
  }
</style>
