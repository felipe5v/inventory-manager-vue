<template>
  <nav-bar-vue v-if="is_auth" modelWith="search-param" />
  <router-view @log-in="logIn" />
</template>

<script>
  import gql from "graphql-tag";
  import NavBarVue from "./components/NavBarComponent/NavBarVue.vue";
  import { ref } from "@vue/reactivity";
  import { provide } from "@vue/runtime-core";
  export default {
    components: { NavBarVue },
    setup() {
      const searchParam = ref("");
      provide("search-param", searchParam);
    },
    data: function() {
      return {
        is_auth: false,
      };
    },
    created: function() {
      this.updateAccessToken();
    },
    methods: {
      updateAccessToken: async function() {
        if (localStorage.getItem("refresh_token") == null) {
          this.$router.push({ name: "Login" });
          this.is_auth = false;
          return;
        }
        await this.$apollo
          .mutate({
            mutation: gql`
              mutation RefreshTokenMutation($refreshTokenRefresh: String!) {
                refreshToken(refresh: $refreshTokenRefresh) {
                  access
                }
              }
            `,
            variables: {
              refreshTokenRefresh: localStorage.getItem("refresh_token"),
            },
          })
          .then((result) => {
            localStorage.setItem(
              "access_token",
              result.data.refreshToken.access
            );
            this.is_auth = true;
            if (
              this.$router.currentRoute.value.fullPath === "/login" ||
              this.$router.currentRoute.value.fullPath === "/signup"
            ) {
              this.$router.push({ name: "Home" });
            }
          })
          .catch((error) => {
            console.log(error);
            alert("Su sesión expiró, vuelva a iniciar sesión.");
            this.$router.push({ name: "Login" });
            this.is_auth = false;
            localStorage.clear();
          });
      },
      logIn: async function(data, username) {
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("current_username", username);
        await this.updateAccessToken();
        if (this.is_auth) this.init();
      },
      init: function() {
        this.$router.push({
          name: "Home",
        });
      },
      logOut: async function() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("current_username");
        await this.updateAccessToken();
      },
    },
  };
</script>
<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");
  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
</style>
