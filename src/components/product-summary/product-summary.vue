<template>
  <section id="product-summary">
    <a href="#product-summary" class="gg-push-chevron-up arrow-up" />
    <div class="content-product-summary main-text-container">
      <div class="text-content">
        <h2>
          Traffic analytics
          <br />for github repositories
        </h2>
        <p>
          Add a trackgit token inside your repository's Readme.md and get
          instant access to user traffic analytics from the
          <a :href="linkDashboard">dashboard</a>.
        </p>
        <RectangleButton
          text="Sign up for free"
          color="transparent"
          :action="linkSignup"
        />
      </div>
    </div>
    <ProductSummaryClipart />
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hyperlinks } from "@/models/data/LinkDirectory.ts";
import ProductSummaryClipart from "@/components/product-summary/product-summary-clipart.vue";
import RectangleButton from "@/components/base-inputs/button/button-rectangle.vue";

@Component({ components: { ProductSummaryClipart, RectangleButton } })
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
      trigger: "#product-summary",
      start: "top center",
      end: "top top",
      endTrigger: "#product-summary",
      scrub: 0.5,
      toggleActions: "play none none reset"
    };
    gsap.to("#product-summary", {
      scrollTrigger: { ...scrollTriggerConfig, start: "top bottom-=50px" },
      borderRadius: "0px"
    });
    gsap.to(".arrow-up", {
      scrollTrigger: { ...scrollTriggerConfig, start: "top bottom-=50px" },
      opacity: 0,
      scale: 0.7
    });

    // scroll trigger animations for text elements
    const timeline = gsap.timeline({
      scrollTrigger: {
        ...scrollTriggerConfig,
        trigger: ".content-product-summary>.text-content",
        start: "center-=40px bottom",
        toggleActions: "play none none reset",
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
        "-=0.25"
      );
  }
}
</script>
<style lang="scss" scoped>
section {
  margin-top: -30px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  -webkit-box-shadow: 0px -4px 50px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -4px 50px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -4px 50px 0px rgba(0, 0, 0, 0.3);
}

.arrow-up {
  top: -40px;
  left: calc(50% - 13.2px);
  position: absolute;
  color: white;
  transform: scale(1.2);
  animation-name: arrow-pulse;
  animation-duration: 0.6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

.content-product-summary {
  .text-content {
    margin-top: 5px;

    h2 {
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 45px;
    }

    .button {
      font-size: 1.4rem;
    }
  }
}

@keyframes arrow-pulse {
  from {
    margin-top: 0px;
  }
  to {
    margin-top: 10px;
  }
}

@media only screen and (max-width: 600px) {
  section {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-bottom: 0px;
    padding-top: 80px;

    .content-product-summary {
      .text-content {
        margin-top: 10px;
      }
    }
  }

  .arrow-up {
    transform: scale(1);
  }
}
</style>
