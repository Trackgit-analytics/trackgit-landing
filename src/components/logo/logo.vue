<template>
  <span class="logo"><a :href="homeLink">trackgit</a></span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Hyperlinks } from "@/models/data/LinkDirectory.ts";

@Component
export default class Logo extends Vue {
  /** Link to home */
  get homeLink(): string {
    return Hyperlinks.home;
  }
}
</script>

<style lang="scss" scoped>
.logo {
  font-size: 2.5rem;
  transition: all 120ms ease;

  a {
    text-decoration: none;
    font-weight: 500;
    font-family: "Josefin Sans", sans-serif;
  }
}
</style>
