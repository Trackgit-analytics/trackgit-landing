<template>
  <section id="setting-up">
    <div class="main-text-container">
      <h3>
        Understand your audience better
      </h3>
      <div class="step step-1">
        <span class="step-picture">
          <img src="@/assets/seed.svg" alt="step 1" />
        </span>
        <h4 class="step-header">Generate a token</h4>
        <p class="step-text">
          <a :href="linkCreateToken">Create</a> a new token from the dashboard.
        </p>
      </div>
      <img src="@/assets/arrow-right.svg" alt="arrow" class="down-arrow" />

      <div class="step step-2">
        <span class="step-picture">
          <img src="@/assets/shovel.svg" alt="step 2" />
        </span>
        <h4 class="step-header">Integrate into repository</h4>
        <p class="step-text">
          Copy and paste your token inside the Readme.md of your github
          repository.
        </p>
      </div>
      <img src="@/assets/arrow-right.svg" alt="arrow" class="down-arrow" />

      <div class="step step-3">
        <span class="step-picture">
          <img src="@/assets/plant.svg" alt="step 3" />
        </span>
        <h4 class="step-header">That's it!</h4>
        <p class="step-text">
          We’ll keep an eye out for visitors on your repository and update your
          <a :href="linkDashboard">dashboard</a>.
        </p>
      </div>
    </div>
    <SettingUpClipart />
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Hyperlinks } from "@/models/data/LinkDirectory";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component
export default class SettingUp extends Vue {
  /** Hyperlink which points to create token page */
  get linkCreateToken(): string {
    return Hyperlinks.createToken;
  }

  /** Hyperlink which points to dashboard page */
  get linkDashboard(): string {
    return Hyperlinks.dashboard;
  }

  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    // scroll trigger animations for text elements
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#setting-up>.main-text-container",
        start: "top+=100px bottom",
        toggleActions: "play none none none",
        scrub: false
      }
    });
    const textAnimConfig = {
      opacity: 0,
      x: 50,
      duration: 0.5,
      delay: 0.1
    };
    timeline
      .from(".main-text-container>.step-1", textAnimConfig)
      .from(".main-text-container>.step-2", textAnimConfig, "-=0.5")
      .from(".main-text-container>.step-3", textAnimConfig, "-=0.25")
      .from(".main-text-container>.down-arrow", { opacity: 0 }, "-=0.5");
  }
}
</script>
<style lang="scss" scoped>
#setting-up {
  .main-text-container {
    display: block;

    h3 {
      margin-bottom: 3.5rem;
    }
  }

  .down-arrow {
    transform: rotate(90deg);
    width: 0.8rem;
    opacity: 0.4;
    margin: 2.5rem;
    display: block;
  }

  .step {
    display: inline-grid;
    grid-column-gap: 10px;
    grid-template-areas:
      "picture header header header header header"
      "picture text text text text text"
      "picture text text text text text"
      "picture text text text text text";

    .step-picture {
      grid-area: picture;
      padding: 10px 20px 10px 10px;

      img {
        max-width: 3.5rem;
        opacity: 0.9;
      }
    }
    .step-header {
      grid-area: header;
    }
    .step-text {
      margin: 0px;
      grid-area: text;
    }
  }
}

@media only screen and (max-width: 600px) {
  #setting-up {
    padding-top: 0vh;

    .main-text-container {
      margin-top: 80px;
    }
  }
}
</style>
