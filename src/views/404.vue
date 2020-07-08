<template>
  <div id="parent404">
    <Navbar />
    <div class="container404">
      <img src="@/assets/404-clipart.svg" />
      <h2>We couldn't find what you are looking for :(</h2>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/navbar/navbar.vue";

@Component({ components: { Navbar } })
export default class Error404 extends Vue {}
</script>
<style lang="scss" scoped>
#parent404 {
  .container404 {
    padding: 12vh 12vw;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;

    img {
      position: absolute;
      width: 50vw;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: 0;
      opacity: 0.2;
    }

    h2 {
      z-index: 2;
    }
  }
}

@media only screen and (max-width: 600px) {
  #parent404 {
    .container404 {
      img {
        width: 80vw;
      }
    }
  }
}
</style>
