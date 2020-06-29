<template>
  <section>
    <span class="gg-push-chevron-up arrow-up" />
    <div class="content-product-summary">
      <div class="text-content">
        <h2>
          Instant analytics
          <br />for github repositories
        </h2>
        <p>
          Drop the trackgit token inside your Readme.md and get instant access
          to user traffic analytics from the
          <a :href="linkDashboard">dashboard</a>.
        </p>
        <TransparentButton text="Sign up for free" :action="linkSignup" />
      </div>
    </div>
    <ProductSummaryClipart />
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hyperlinks } from "@/models/data/LinkDirectory.ts";
import ProductSummaryClipart from "@/components/product-summary/product-summary-clipart.vue";
import TransparentButton from "@/components/buttons/button-transparent.vue";

@Component({ components: { ProductSummaryClipart, TransparentButton } })
export default class ProductSummary extends Vue {
  /** Hyperlink which points to dashboard page */
  get linkDashboard(): string {
    return Hyperlinks.dashboard;
  }

  /** Hyperlink which points to signup page */
  get linkSignup(): string {
    return Hyperlinks.signup;
  }

  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    // scroll trigger animations for border-radius and arrow
    const scrollTriggerConfig = {
      trigger: "section",
      start: "top middle",
      scrub: 0.5,
      toggleActions: "play none none none"
    };
    gsap.to("section", {
      scrollTrigger: scrollTriggerConfig,
      borderRadius: "0px"
    });
    gsap.to(".arrow-up", {
      scrollTrigger: scrollTriggerConfig,
      opacity: 0,
      scale: 0.7
    });

    // scroll trigger animations for text elements
    const timeline = gsap.timeline({
      scrollTrigger: {
        ...scrollTriggerConfig,
        trigger: "content-product-summary",
        scrub: false
      }
    });
    const textAnimConfig = {
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: 0.1
    };
    timeline
      .from(".content-product-summary>.text-content>h2", textAnimConfig)
      .from(".content-product-summary>.text-content>p", textAnimConfig, "-=0.5")
      .from(
        ".content-product-summary>.text-content>a",
        textAnimConfig,
        "-=0.5"
      );
  }
}
</script>
<style lang="scss" scoped>
section {
  margin-top: -20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  -webkit-box-shadow: 0px -4px 50px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -4px 50px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -4px 50px 0px rgba(0, 0, 0, 0.3);
}

.arrow-up {
  top: -30px;
  left: calc(50% - 13.2px);
  position: absolute;
  color: white;
  transform: scale(1.2);
  animation-name: arrow-pulse;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
}

.content-product-summary {
  max-width: 50vw;

  .text-content {
    h2 {
      font-size: 3rem;
      color: #585858;
      font-weight: bold;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.3rem;
      color: #4a4a4a;
      line-height: 2rem;
      letter-spacing: 0.5px;
      margin-top: 0px;
      margin-bottom: 45px;
    }
  }
}

@keyframes arrow-pulse {
  0% {
    margin-top: 0px;
  }
  50% {
    margin-top: -5px;
  }
  100% {
    margin-top: 0px;
  }
}

@media only screen and (max-width: 600px) {
  section {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    .content-product-summary {
      max-width: 90vw;

      .text-content {
        h2 {
          font-size: 2.3rem;
        }
      }
    }
  }

  .arrow-up {
    transform: scale(1);
  }
}
</style>
