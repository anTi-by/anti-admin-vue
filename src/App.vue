<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
$height: 100%;
$width: 100%;
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: $height;
  width: $width;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: $height;
  width: $width;
}
</style>
