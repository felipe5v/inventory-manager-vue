<template>
  <div id="header">
    <div id="container">
      <div id="title">Inventory Manager</div>
      <div id="search">
        <i class="fas fa-search"></i>
        <input type="search" placeholder="Ingrese el producto a buscar" />
      </div>
      <div id="navbar">
        <i class="fas fa-bell ">
          <div id="notification">99 <span>+</span></div>
        </i>
        <i class="fas fa-user "></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  #container {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
  }
  #header {
    background-color: #d8dde7;
    padding: 0 20px;
    height: 100px;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    width: 100%;
  }
  #title {
    font-weight: bold;
    color: #000b73;
    font-size: 2rem;
  }
  #search {
    display: flex;
    flex: 1;
    margin: 0 50px;
    position: relative;
    align-items: center;
    i {
      position: absolute;
      padding-left: 15px;
    }
    input[type="search"] {
      width: 100%;
      padding-left: 30px;
      border: 2px solid;
      border-color: #5d5a5a;
      border-radius: 50px;
      padding: 8px 0px;
      padding-left: 40px;
      font-size: 16px;
      opacity: 1;
      outline: none;
      background-color: #fdfdfd;
      &::placeholder {
        color: #5e5a5a;
        opacity: 1;
      }
    }
  }
  #navbar {
    display: flex;
    gap: 50px;
    i {
      position: relative;
      color: #010c74;
      font-size: 2rem;
    }
    #notification {
      position: absolute;
      top: -10px;
      right: -20px;
      z-index: 1;
      color: red;
      background-color: #b11818;
      border-radius: 50px;
      width: 30px;
      height: 20px;
      font-size: 20px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      letter-spacing: -1px;
      span {
        font-size: 10px;
        letter-spacing: 0px;
      }
    }
  }
</style>
