<template>
  <input
    :class="input.type !== 'submit' ? 'inp-text' : 'inp-submit'"
    :type="input.type"
    :name="input.type !== 'submit' ? input.name : ''"
    :placeholder="input.text"
    :value="input.type === 'submit' ? input.text : ''"
  />
</template>

<script>
  export default {
    props: {
      input: Object,
    },
    setup() {},
  };
</script>

<style lang="scss" scoped>
  .inp-text {
    border: 2px solid;
    border-color: #5d5a5a;
    border-radius: 50px;
    padding: 8px 15px;
    padding-bottom: px;
    font-size: 16px;
    width: 320px;
    margin-bottom: 20px;
    opacity: 1;
    outline: none;
    display: block;
    background-color: transparent;
    &::placeholder {
      color: #5e5a5a;
      opacity: 1;
    }
  }
  .inp-submit {
    border: 2px solid;
    border-color: #2c71b0;
    background-color: #2c71b0;
    border-radius: 50px;
    padding: 5px 0px;
    padding-bottom: 9px;
    width: calc(320px + 32px);
    opacity: 1;
    display: block;
    color: white;
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 320px;
    cursor: pointer;
  }
</style>
