<template>
  <main-list-vue :titleData="titleData" :itemsData="itemsData.itemsData" />
</template>

<script>
  import MainListVue from "../components/MainList/MainListVue.vue";
  import gql from "graphql-tag";
  import { reactive } from "@vue/reactivity";
  export default {
    components: { MainListVue },
    setup() {
      const itemsData = reactive({ itemsData: [] });
      const titleData = {
        mainTitle: "Productos",
        buttonText: "Agregar Producto",
        titles: ["Nombre", "Disponible", "Solicitar", "Editar"],
        buttonType: "edit",
        onClick() {
          let containerModal = document.querySelector(".container-modal");
          containerModal.classList.add("active");
        },
      };
      return { itemsData, titleData };
    },
    created: function() {
      this.pagination();
    },
    methods: {
      async pagination() {
        await this.$apollo
          .mutate({
            mutation: gql`
              mutation PaginationMutation(
                $paginationPaginationSettings: PaginationInput!
                $paginationUserId: String!
              ) {
                pagination(
                  paginationSettings: $paginationPaginationSettings
                  userId: $paginationUserId
                ) {
                  currentPage
                  pageSize
                  totalCount
                  totalPages
                  data {
                    productId
                    productName
                    category
                    imgUrl
                    minimumAmount
                    suppliersId
                  }
                }
              }
            `,
            variables: {
              paginationPaginationSettings: {
                pageNumber: 1,
                pageSize: 6,
                searchParam: this.$route.path.replace(/\/search=|\//, ""),
                userId: localStorage.getItem("user_id"),
              },
              paginationUserId: localStorage.getItem("user_id"),
            },
          })
          .then((result) => {
            console.log(result.data.pagination.data);
            this.itemsData.itemsData = result.data.pagination.data;
          });
      },
    },

    watch: {
      $route() {
        console.log(this.$route.path);
        if (this.$route.path === "/search=") {
          this.$router.push({ name: "Home" });
        } else {
          this.pagination();
        }
      },
    },
  };
</script>
