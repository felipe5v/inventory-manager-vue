<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  div {
    width: 500px;
    height: 515px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    border-radius: 15px;
  }
  @media only screen and (max-width: 600px) {
    div {
      width: 90%;
      height: 60%;
    }
  }
</style>
