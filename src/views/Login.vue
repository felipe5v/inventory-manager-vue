<template>
  <background>
    <form-vue :formData="formData" :fsubmit="processAuthUser" />
  </background>
</template>

<script>
  import Background from "./Background.vue";
  import FormVue from "../components/FormComponent/FormVue.vue";
  import gql from "graphql-tag";
  import jwt_decode from "jwt-decode";
  import { reactive } from "@vue/reactivity";
  import { provide } from "@vue/runtime-core";
  export default {
    components: { FormVue, Background },
    emits: ["log-in"],
    setup() {
      const formData = {
        title: "INGRESE A SU INVENTORY MANAGER",
        inputs: [
          {
            text: "Ingrese su correo electronico",
            type: "text",
            name: "email",
          },
          { text: "Ingrese su contraseña", type: "password", name: "password" },
          { text: "Ingresar", type: "submit" },
        ],
        footer: [
          {
            question: "¿Olvidó su contraseña?",
            aText: "Recuperela",
            url: "",
          },
          {
            question: "¿No tiene una cuenta?",
            aText: "Cree una",
            url: "signup",
          },
        ],
      };
      const formValues = reactive({
        email: "",
        password: "",
      });
      provide("form-value", formValues);
      return { formData, formValues };
    },

    methods: {
      processAuthUser: async function() {
        await this.$apollo
          .mutate({
            mutation: gql`
              mutation($authenticateCredentials: CredentialsInput!) {
                authenticate(credentials: $authenticateCredentials) {
                  refresh
                  access
                }
              }
            `,
            variables: {
              authenticateCredentials: this.formValues,
            },
          })
          .then((result) => {
            console.log("hola");
            let data = result.data.authenticate;
            data.user_id = jwt_decode(data.access)
              .user_id.toString()
              .padStart(3, "0");
            this.$emit("log-in", data, this.formValues.username);
          })
          .catch(() => {
            alert("El usuario y/o contraseña son incorrectos");
          });
      },
    },
  };
</script>

<style></style>
