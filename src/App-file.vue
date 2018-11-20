<template>
  <div id="app-contents">
    <img width="25%" src="./assets/logo.png" /> <HelloWorld />
    <div>some text</div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "myApp",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app-contents {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
