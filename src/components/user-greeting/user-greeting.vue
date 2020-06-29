<template>
  <section id="user-greeting">
    <Background />
    <div class="content-greeting">
      <h1 class="headline">Supercharge your github with traffic analytics</h1>
      <TranslucentWhiteButton text="Get started" :action="linkGetStarted" />
      <h2 class="tagline">Simple . Powerful . Efficient</h2>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TranslucentWhiteButton from "@/components/buttons/button-translucent-white.vue";
import Background from "@/components/user-greeting/background.vue";
import { Hyperlinks } from "@/models/data/LinkDirectory.ts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  components: { TranslucentWhiteButton, Background }
})
export default class UserGreeting extends Vue {
  /** Hyperlink which points to "getting started" page */
  get linkGetStarted(): string {
    return Hyperlinks.getStarted;
  }
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".content-greeting", {
      scrollTrigger: {
        trigger: "#user-greeting",
        start: "start start",
        end: "bottom top",
        endTrigger: "#user-greeting",
        scrub: 0.2,
        pin: true,
        pinSpacing: false,
        toggleActions: "play none none reset"
      },
      scale: 0.95,
      opacity: 0.4,
      ease: "none"
    });
  }
}
</script>
<style scoped>
section {
  height: 95vh;
  background-image: linear-gradient(to bottom right, #2086fd, #a134ff);
  padding: 0px;
}

.content-greeting {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
}

.headline {
  line-height: 4rem;
  font-size: 3.5rem;
  max-width: 700px;
  margin-bottom: 45px;
}

.tagline {
  font-weight: normal;
  font-family: inherit;
  opacity: 0.9;
  font-size: 1.2rem;
  margin-top: 45px;
}

@media only screen and (max-width: 600px) {
  .headline {
    max-width: 80%;
  }
}
</style>
