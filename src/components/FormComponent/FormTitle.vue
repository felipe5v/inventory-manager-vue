<template>
  <div>
    <h1>
      {{ text }}
    </h1>
  </div>
</template>

<script>
  export default {
    props: {
      text: String,
    },
  };
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 30px;
    color: #000b73;
    font-weight: 700;
  }
  div {
    max-width: 341px;
    text-align: center;
    margin-bottom: 15px;
  }
</style>
