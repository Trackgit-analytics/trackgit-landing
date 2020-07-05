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
h3 {
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

h4,
h5 {
  font-weight: 500;
  color: #464646;
  margin: 0px;
}

h4,
p {
  font-size: 1.3rem;
  line-height: 2rem;
  letter-spacing: 0.1px;
}

p {
  color: #464646;
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
  background-color: #fff;
  display: inline-flex;
  align-items: center;
  margin-top: -5px;

  .main-text-container {
    max-width: 500px;
    width: 50vw;

    .title {
      margin-bottom: 3.5rem;

      p {
        margin-top: 6px;
      }
    }
  }
}

.no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.spinner {
  width: 40px;
  height: 40px;
  background-color: rgb(0, 0, 0);

  border-radius: 100%;
  -webkit-animation: sk-scaleout 0.6s infinite ease-in-out;
  animation: sk-scaleout 0.6s infinite ease-in-out;
  animation-direction: alternate;
  animation-fill-mode: forwards;
}

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
  100% {
    -webkit-transform: scale(1.8);
    transform: scale(1.8);
    opacity: 0.6;
  }
}

.error {
  color: #ff5959;
}

.success {
  color: #3fa738;
}

@media only screen and (max-width: 600px) {
  body,
  html {
    font-size: 75%;
  }
  h2 {
    font-size: 2.3rem;
  }
  h3 {
    font-size: 2rem;
  }

  section {
    padding: 50px 8vw 80px 8vw;
    display: grid;

    .main-text-container {
      max-width: 84vw;
      width: 84vw;
    }
  }
}
</style>
