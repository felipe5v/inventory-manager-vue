<template>
  <li>
    <a :href="'#page' + number">{{ number }}</a>
  </li>
</template>

<script>
  export default {
    props: {
      number: Number,
    },
    setup() {},
  };
</script>

<style lang="scss" scoped>
  a {
    background-color: #2c71b0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 5px;
    color: white;
    padding: 5px 15px;
    font-weight: 600;
  }
</style>
