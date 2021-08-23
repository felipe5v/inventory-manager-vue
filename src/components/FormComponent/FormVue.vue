<template>
  <center-wrapper>
    <form-container>
      <form-title :text="formData.title" />
      <form @submit.prevent="formNames($event)">
        <form-input
          v-for="(input, idx) in formData.inputs"
          :key="idx"
          :input="input"
        />
      </form>
      <form-footer
        v-for="(line, idx) in formData.footer"
        :key="idx"
        :footer="line"
      />
    </form-container>
  </center-wrapper>
</template>

<script>
  import { inject } from "@vue/runtime-core";
  import CenterWrapper from "../LayoutHelpers/CenterWrapper.vue";
  import FormContainer from "./FormContainer.vue";
  import FormFooter from "./FormFooter.vue";
  import FormInput from "./FormInput.vue";
  import FormTitle from "./FormTitle.vue";
  export default {
    props: {
      formData: Object,
      submit: Function,
    },
    components: {
      CenterWrapper,
      FormContainer,
      FormTitle,
      FormInput,
      FormFooter,
    },
    setup(props) {
      const formValue = inject("form-value");
      const formNames = (e) => {
        for (let property in formValue) {
          formValue[property] = e.target.elements[property].value;
        }

        props.submit();
      };
      return { formValue, formNames };
    },
  };
</script>
