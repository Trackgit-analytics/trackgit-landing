<template>
  <section id="donate-prompt">
    <div class="main-text-container">
      <div class="title">
        <h3>Love what we’re doing?</h3>
        <p>Donate and help us stay afloat</p>
      </div>
      <RectangleButton text="Donate" :action="this.donateLink" color="purple" />
    </div>

    <DonateClipart />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import RectangleButton from "@/components/base-inputs/button/button-rectangle.vue";
import { Hyperlinks } from "@/models/data/LinkDirectory.ts";
import DonateClipart from "@/components/donate/donate-clipart.vue";

@Component({ components: { RectangleButton, DonateClipart } })
export default class DonatePrompt extends Vue {
  /** Returns the link to donation page */
  get donateLink(): string {
    return Hyperlinks.donate;
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .donate-prompt {
    display: grid;
    padding-top: 10vh;

    .main-text-container {
      grid-row-start: 2;
    }
  }
}
</style>
