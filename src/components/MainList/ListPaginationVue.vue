<template>
  <nav>
    <ul>
      <li>
        <a href="#">
          <span>&laquo;</span>
        </a>
      </li>
      <pagination-numbers
        @click="handleClick"
        v-for="(num, idx) in [1, 2, 3]"
        :key="idx"
        :number="num"
        class="numbers"
      />
      <li @click="handleClick">
        <a href="#">
          <span>&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import PaginationNumbers from "./PaginationNumbers.vue";
  export default {
    components: { PaginationNumbers },
    methods: {
      handleClick(e) {
        alert(e.target.innerHTML);
      },
    },
  };
</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 20px;
  }
  li {
    width: 20px;
    height: 20px;
  }
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
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
