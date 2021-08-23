<template>
  <div class="bg-theme">
    <div class="bg-img">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .bg-theme {
    width: 100%;
    height: 100%;
    background-color: #03045e;
  }
  .bg-img {
    background-image: url("../assets/wave-bg.svg");
    background-repeat: no-repeat;
    background-position: 60% 40%;
    background-size: 150% 150%;
  }
  @media only screen and (max-width: 600px) {
    .bg-img {
      background-image: url("../assets/wave-bg.svg");
      background-repeat: no-repeat;
      background-position: 60% -15%;
    }
  }
</style>
