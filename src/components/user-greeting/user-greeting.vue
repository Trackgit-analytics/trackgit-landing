<template>
  <section id="user-greeting">
    <Background />
    <div class="content-greeting">
      <h1 class="headline">GitHub traffic analytics</h1>
      <h4 class="tagline">
        Supercharge your github repos with traffic insights
      </h4>
      <RectangleButton
        class="get-started-button"
        text="Get started"
        color="translucent-white"
        :action="linkGetStarted"
      />
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RectangleButton from "@/components/base-inputs/button/button-rectangle.vue";
import Background from "@/components/user-greeting/background.vue";
import { Hyperlinks } from "@/models/data/LinkDirectory.ts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  components: { RectangleButton, Background }
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
  animation-direction: alternate;
}

@keyframes background-animation {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

#user-greeting {
  justify-content: center;
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
  color: #f3f3f3;
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

@media only screen and (min-width: 2000px) {
  .headline {
    max-width: 900px;
  }
}
</style>
