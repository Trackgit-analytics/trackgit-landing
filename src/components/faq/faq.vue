<template>
  <section id="faq">
    <div class="main-text-container">
      <h3 class="title">Why trackgit?</h3>
      <div class="all-bulletins">
        <div
          class="bulletin-container"
          v-for="(item, index) in data"
          :key="index"
        >
          <img
            :src="getImageURL(item.icon)"
            :alt="item.header"
            class="bulletin-icon"
          />
          <h4 class="bulletin-header">{{ item.header }}</h4>
          <p class="bulletin-text" v-html="item.content" />
          <span class="bulletin-number">{{
            `${index + 1}/${data.length}`
          }}</span>
        </div>
        <div class="bulletin-container bulletin-padding-right" />
        <div class="box-end-fade" />
      </div>
      <div class="button-container">
        <CircleButton
          :enabled="this.isPrevActive"
          class="prev-button"
          v-on:click.native="scrollBulletin(-1)"
        >
          <img src="@/assets/arrow-right.svg" alt="prev" />
        </CircleButton>
        <CircleButton
          :enabled="this.isNextActive"
          class="next-button"
          v-on:click.native="scrollBulletin(1)"
        >
          <img src="@/assets/arrow-right.svg" alt="next" />
        </CircleButton>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircleButton from "@/components/buttons/button-circle.vue";
import DeviceHelper from "@/helpers/DeviceHelper";
import { Hyperlinks } from "@/models/data/LinkDirectory";

@Component({ components: { CircleButton } })
export default class FAQ extends Vue {
  data = [
    {
      header: "Audience insights",
      content:
        "Get key insights about your repositories like number of views, traffic location, visits over time, and more.",
      icon: "chart.svg"
    },
    {
      header: "It’s free!",
      content: `Our services are free. You can choose to <a href='${Hyperlinks.donate}'>donate</a>, but we don’t intend on charging you a mandatory fee.`,
      icon: "heart.svg"
    },
    {
      header: "Language independent",
      content:
        "It doesn’t matter whether your project is in Node or Ruby, trackgit works on all code repositories.",
      icon: "code.svg"
    },
    {
      header: "Easy installation",
      content:
        "All it takes to get started is adding one line of code to your repository and we’ll take care of the rest.",
      icon: "plane.svg"
    },
    {
      header: "Tailor your work",
      content:
        "See when and where your visitors are coming from and cater your work to your biggest supporters.",
      icon: "face.svg"
    },
    {
      header: "Know where to priortize",
      content:
        "Use the metrics to decide which of your projects to prioritize and make the most out of your time.",
      icon: "checkbox.svg"
    },
    {
      header: "No JavaScript",
      content:
        "We don't use JavaScript for trackers. JavaScript blockers won't affect the metrics you see.",
      icon: "coffee.svg"
    }
  ];

  isNextActive = true;
  isPrevActive = false;

  bulletinParent: Element | null = null;

  /** Returns true if user device is a phone */
  get isPhone(): boolean {
    return DeviceHelper.isPhone();
  }

  mounted() {
    // set up scroll spy for bulletin list
    this.bulletinParent = document.querySelectorAll(
      ".main-text-container .all-bulletins"
    )[0];

    this.bulletinParent.addEventListener("scroll", this.setActiveButtons);

    // create animations for bulletin items
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#faq",
        start: "center bottom",
        scrub: false
      },
      duration: 1
    });

    const elementsToAnimate = Array.from(
      document.getElementsByClassName("bulletin-container")
    );
    elementsToAnimate.forEach(element => {
      timeline.from(
        element,
        {
          x: this.isPhone ? undefined : 50,
          opacity: 0
        },
        "-=0.4"
      );
    });
  }

  /** Gets the image URL from a given src */
  getImageURL(src: string): string {
    return require("@/assets/" + src);
  }

  /** Performs scroll action on the bulletins
   * @param direction -1 for scrolling towards left, 1 for scrolling towards right
   */
  scrollBulletin(direction: number) {
    if (!this.bulletinParent) {
      return;
    }
    if (direction > 0 && !this.isNextActive) {
      return;
    } else if (direction < 0 && !this.isPrevActive) {
      return;
    }

    const bulletinWidth = document
      .getElementsByClassName("bulletin-container")[0]
      .getBoundingClientRect().width;
    let scrollFactor = Math.round(
      this.bulletinParent.getBoundingClientRect().width / bulletinWidth
    );
    if (scrollFactor > 3) {
      scrollFactor -= 1;
    }
    this.bulletinParent.scroll({
      top: 0,
      left:
        this.bulletinParent.scrollLeft +
        direction * bulletinWidth * scrollFactor,
      behavior: "smooth"
    });
  }

  /** Set the enabled/disabled state for scroll buttons according to scroll position */
  setActiveButtons() {
    if (!this.bulletinParent) {
      return;
    }

    const scrollPercent =
      (100 * this.bulletinParent.scrollLeft) /
      (this.bulletinParent.scrollWidth - this.bulletinParent.clientWidth);

    this.isNextActive = scrollPercent >= 95 ? false : true;
    this.isPrevActive = scrollPercent > 0 ? true : false;
  }
}
</script>
<style lang="scss" scoped>
.all-bulletins {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  max-width: 88vw;
  overflow: scroll;
  scroll-snap-type: x mandatory;
}

.all-bulletins::-webkit-scrollbar {
  display: none;
}

.box-end-fade {
  width: 200px;
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(255, 255, 255, 0.6) 60%,
    rgba(255, 255, 255, 0.9) 100%
  );
}

.bulletin-padding-right {
  width: 12vw !important;
  margin: 0px !important;
}

.bulletin-container {
  width: calc(300px + 3.3vw);
  padding: 0px calc(10px + 3.3vw) 0px 10px;
  flex-shrink: 0;
  scroll-snap-align: start;
  box-sizing: border-box;

  .bulletin-icon {
    width: 27px;
    max-height: 30px;
    opacity: 0.7;
  }

  .bulletin-header {
    margin-top: 15px;
  }

  .bulletin-text {
    margin-top: 5px;
  }

  .bulletin-number {
    border-radius: 3px;
    padding: 3px 5px;
    text-align: center;
    background: rgba(0, 0, 0, 0.1);
    font-size: 1rem;
    margin: 5px 0px;
    letter-spacing: 1px;
    opacity: 0.5;
    display: none;
    float: right;
  }
}

.button-container {
  margin-top: 30px;

  .prev-button {
    margin-right: 20px;

    img {
      transform: rotate(180deg);
      transform-origin: 40% 50%;
    }
  }
}

@media only screen and (max-width: 600px) {
  .all-bulletins {
    max-width: 100%;
  }

  .box-end-fade {
    width: 0px;
  }

  .bulletin-container {
    width: 100%;
    padding: 0px 10px;

    .bulletin-number {
      display: inline-block;
    }
  }

  .button-container {
    float: right;
    margin-top: 10px;

    .prev-button {
      margin-right: 5px;
    }
  }

  .bulletin-padding-right {
    display: none;
  }
}
</style>
