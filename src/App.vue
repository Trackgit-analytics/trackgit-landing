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
h2,
h3,
h4,
h5 {
  margin: 0px;
  color: #585858;
}

h1,
h2,
h3 {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
}

h1 {
  line-height: 4rem;
  font-size: 3.5rem;
}

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-weight: 500;
}

h4,
p {
  font-size: 1.3rem;
  line-height: 2rem;
  letter-spacing: 0.5px;
}

p {
  color: #4a4a4a;
  font-weight: 400;
}

a {
  color: unset;
}

section {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 175px 12vw 25px 12vw;
  background-color: #f9f8f7;
  display: inline-flex;
  align-items: center;
  margin-top: -5px;

  .main-text-container {
    max-width: 500px;
  }
}

@media only screen and (max-width: 600px) {
  body,
  html {
    font-size: 70%;
  }
  h2 {
    font-size: 2.3rem;
  }
  h3 {
    font-size: 2rem;
  }

  section {
    padding: 80px 8vw 80px 8vw;
    display: grid;

    .main-text-container {
      max-width: 90vw;
      min-width: unset;
    }
  }
}
</style>
