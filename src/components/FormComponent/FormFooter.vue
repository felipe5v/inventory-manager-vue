<template>
  <p>
    {{ footer.question }}
    <router-link :to="`/${footer.url}`">{{ footer.aText }}</router-link>
  </p>
</template>

<script>
  export default {
    props: {
      footer: Object,
    },
  };
</script>

<style lang="scss" scoped>
  p {
    font-weight: bold;
    color: #7a7777;
    margin: 0;
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: #2c71b0;
  }
</style>
