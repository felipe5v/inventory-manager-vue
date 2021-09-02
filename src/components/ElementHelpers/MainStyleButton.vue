<template>
  <button @click="onClickFunction">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      onClickFunction: Function,
    },
  };
</script>

<style lang="scss" scoped>
  button {
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
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
</style>
