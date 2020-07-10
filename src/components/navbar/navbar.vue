<template>
  <nav>
    <Logo />

    <div class="links">
      <a :href="dashboardLink">Dashboard</a>
      <a :href="loginLink">Log in</a>
      <a :href="signupLink">Register</a>
      <a :href="donateLink">Donate</a>
      <a :href="contactLink">Contact us</a>
    </div>

    <div class="get-started-button">
      <RectangleButton
        text="Get started"
        :action="getStartedLink"
        color="transparent"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "@/components/logo/logo.vue";
import { Hyperlinks } from "@/models/data/LinkDirectory.ts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DeviceHelper from "@/helpers/DeviceHelper.ts";
import RectangleButton from "@/components/base-inputs/button/button-rectangle.vue";

@Component({ components: { Logo, RectangleButton } })
export default class Navbar extends Vue {
  /** Link to dashboard page */
  get dashboardLink(): string {
    return Hyperlinks.dashboard;
  }

  /** Link to get started page */
  get getStartedLink(): string {
    return Hyperlinks.getStarted;
  }

  /** Link to sign up page */
  get signupLink(): string {
    return Hyperlinks.signup;
  }

  /** Link to log in page */
  get loginLink(): string {
    return Hyperlinks.login;
  }

  /** Link to message section */
  get contactLink(): string {
    return Hyperlinks.contactUs;
  }

  /** Link to donate page */
  get donateLink(): string {
    return Hyperlinks.donate;
  }

  /** Returns true if the device is a phone */
  get isPhone(): boolean {
    return DeviceHelper.isPhone();
  }

  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const navHeight = document
      .getElementsByTagName("nav")[0]
      .getBoundingClientRect().height;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#product-summary",
        start: `top-=${navHeight}px top`,
        end: `+=${navHeight}px`,
        toggleActions: "play none none reset"
      }
    });
    timeline
      .to("nav", {
        duration: 0.1,
        padding: this.isPhone ? "2.5vh 4vw 2.5vh 8vw" : "2vh 12vw",
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.15)",
        color: "#464646"
      })
      .to(
        ".get-started-button",
        {
          opacity: 0.8,
          display: "block"
        },
        0
      );
  }
}
</script>

<style lang="scss" scoped>
nav {
  padding: 3vh 12vw;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  box-sizing: border-box;
  z-index: 101;
  color: white;
  transition: all 120ms ease;
  font-size: 1rem;
  display: flex;
  align-items: center;

  .logo {
    color: inherit;
    font-size: 1.9em;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  .links {
    color: inherit;
    float: right;
    opacity: 0.8;
    font-size: 0.9em;
    transition: opacity 300ms ease;
    margin-left: auto;

    &:hover {
      opacity: 1;
    }

    a {
      color: inherit;
      text-decoration: none;
      height: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      margin: 0px 10px;
      transition: all 120ms ease;
      letter-spacing: 0.3px;
    }
  }

  .get-started-button {
    margin-left: auto;
    display: none;
    color: white;
    font-size: 0.85rem;
  }
}

@media only screen and (max-width: 600px) {
  nav {
    padding: 3vh 4vw 3vh 8vw;

    .links {
      display: none;
    }

    .get-started-button {
      font-size: 0.8rem;
    }
  }
}

@media only screen and (max-width: 900px) and (min-width: 600px) {
  nav {
    font-size: 0.95rem;
    padding: 1.5vh 8vw !important;

    .links > a {
      margin: 0px;
    }

    .get-started-button {
      font-size: 0.5rem;
    }
  }
}

@media only screen and (min-width: 2000px) {
  nav {
    font-size: 1.35rem;
  }
}
</style>
