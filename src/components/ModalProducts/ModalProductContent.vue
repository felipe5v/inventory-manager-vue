<template>
  <div class="row">
    <p>Nombre:</p>
    <p id="Ref">
      Ref:
      <span>#351168351 </span>
    </p>
  </div>
  <form action="">
    <div class="column">
      <input type="text" value="Martillo" id="title" />
    </div>
    <div class="row">
      <img
        src="https://m.media-amazon.com/images/I/51fr+X46fYL._AC_SL1453_.jpg"
        alt="Logo"
      />
      <div class="column">
        <label for="disponible">Disponible</label>
        <input type="number" name="disponible" value="8" />
        <label for="solicitar">Solicitar</label>
        <input type="number" name="solicitar" value="7" />
        <label for="modificar">Modificar</label>
        <input type="number" name="modificar" value="6" />
      </div>
    </div>
    <div class="row">
      <div class="column">
        <label for="costo">Costo</label>
        <input type="number" name="costo" value="18000" />
      </div>
      <div class="column">
        <label for="precio">Precio venta</label>
        <input type="number" name="precio" value="36000" />
      </div>
    </div>
    <div class="column">
      <label for="proveedor">Proveedor:</label>
      <select name="proveedor">
        <option value="Pepito">Pepito</option>
        <option value="Perez">Perez</option>
      </select>
    </div>
    <div class="row buttons">
      <main-style-button class="btn">Editar Producto</main-style-button>
      <main-style-button class="btn" id="delete"
        >Eliminar Producto</main-style-button
      >
    </div>
  </form>
</template>

<script>
  import MainStyleButton from "../ElementHelpers/MainStyleButton.vue";
  export default {
    components: { MainStyleButton },
  };
</script>

<style lang="scss" scoped>
  %inputStyle {
    border: 2px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 17px;
    text-align: center;
    padding: 10px;
  }
  input {
    @extend %inputStyle;
    width: 100%;
  }
  select {
    @extend %inputStyle;
  }
  .row {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    p {
      margin: 10px;
    }
    margin-bottom: 10px;
  }
  .column {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 10px;
  }
  .buttons {
    margin-top: 10px;
  }
  img {
    width: 239px;
    height: 268px;
    object-fit: contain;
  }

  .btn {
    width: 50%;
    margin: 0;
    font-size: 20px;
    padding: 5px 16px;
    cursor: pointer;
    transform: scale(0.9);
    transition: 0.3s;
    box-shadow: none;
    &:hover {
      transform: scale(1);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  #delete {
    background: #9f2b2b;
    border-color: #9f2b2b;
  }
  #title {
    color: #000b73;
    font-weight: bold;
    font-size: 30px;
  }
  #Ref {
    color: #000b73;
  }
</style>
