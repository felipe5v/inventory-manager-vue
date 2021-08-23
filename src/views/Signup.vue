<template>
  <background>
    <form-vue :formData="formData" />
  </background>
</template>

<script>
  import Background from "./Background.vue";
  import FormVue from "../components/FormComponent/FormVue.vue";
  export default {
    components: { FormVue, Background },
    setup() {
      const formData = {
        title: "CREE SU CUENTA DE INVENTORY MANAGER",
        inputs: [
          {
            text: "Ingrese su correo electronico",
            type: "text",
            name: "email",
          },
          { text: "Ingrese su contraseña", type: "password", name: "password" },
          {
            text: "Confirme su contraseña",
            type: "password",
            name: "confpassword",
          },
          { text: "Registrarse", type: "submit" },
        ],
        footer: [
          {
            question: "¿Ya tiene una cuenta?",
            aText: "Acceda a ella",
            url: "login",
          },
        ],
      };

      return { formData };
    },
  };
</script>

<style></style>
