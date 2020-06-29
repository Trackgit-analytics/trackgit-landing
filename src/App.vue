<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("./assets/icons.css");
body,
html {
  margin: 0px;
  padding: 0px;
  font-size: 100%;
}

* {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  position: relative;
}

h1,
h2 {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
}

a {
  color: unset;
}

section {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 100px 12vw;
  background-color: #f9f8f7;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 600px) {
  body,
  html {
    font-size: 70%;
  }

  section {
    padding: 50px 8vw;
  }
}
</style>
