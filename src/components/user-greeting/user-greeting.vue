<template>
  <section id="user-greeting">
    <Background />
    <div class="content-greeting">
      <h1 class="headline">GitHub traffic analytics</h1>
      <h4 class="tagline">
        Supercharge your github repos with traffic insights
      </h4>
      <TranslucentWhiteButton
        class="get-started-button"
        text="Get started"
        :action="linkGetStarted"
      />
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
  background: linear-gradient(-45deg, #137af0, #a134ff, #3448ff, #a134ff);
  background-size: 400% 400%;
  padding: 0px;
  animation: background-animation 10s ease infinite;
  animation-direction: alternate-reverse;
}

@keyframes background-animation {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
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
  max-width: 700px;
  margin-bottom: 10px;
  color: #fff;
}

.tagline {
  font-weight: normal;
  font-family: inherit;
  opacity: 0.9;
  color: #eeeeee;
  margin-bottom: 60px;
}

@media only screen and (max-width: 600px) {
  .content-greeting {
    text-align: left;
    align-items: flex-start;
    width: 100vw;
  }
  .headline {
    max-width: 80%;
  }
  .tagline {
    max-width: 70%;
    margin-bottom: 15vh;
  }
  .headline,
  .tagline {
    margin-left: 10vw;
  }
  .get-started-button {
    align-self: center;
  }
}
</style>
