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
  <main-list-vue :titleData="titleData" :itemsData="itemsData" />
</template>

<script>
  import MainListVue from "../components/MainList/MainListVue.vue";
  import gql from "graphql-tag";
  export default {
    components: { MainListVue },
    setup() {
      let itemsData;
      const titleData = {
        mainTitle: "Productos",
        buttonText: "Agregar Producto",
        titles: ["Nombre", "Disponible", "Solicitar", "Editar"],
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
                    urlImg
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
                searchParam: "",
                userId: localStorage.getItem("user_id"),
              },
              paginationUserId: localStorage.getItem("user_id"),
            },
          })
          .then((result) => {
            console.log(result);
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
