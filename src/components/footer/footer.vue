<template>
  <section id="footer">
    <NewsletterSignup />
    <div class="credits-container">
      <div class="credit">
        <span>Support</span><br />
        <a :href="`mailto:${supportEmail}`">{{ this.supportEmail }}</a>
      </div>

      <div class="credit">
        <span>Join us</span><br />
        <a :href="`mailto:${joinusEmail}`">{{ this.joinusEmail }}</a>
      </div>

      <div class="credit">
        <span>Created by</span><br />
        <a :href="shanzidWebsite">Shanzid Shaiham</a>
      </div>
      <div class="credit">
        <a :href="`mailto:${tosLink}`">Terms of service</a>
      </div>

      <Logo />
    </div>
    <div class="copyright-container">
      <span>{{ copyrightStatement }}</span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Textbox from "@/components/base-inputs/text/textbox.vue";
import RectangleButton from "@/components/base-inputs/button/button-rectangle.vue";
import NewsletterSignup from "@/components/footer/newsletter-signup.vue";
import { Emails, Hyperlinks } from "@/models/data/LinkDirectory.ts";
import Logo from "@/components/logo/logo.vue";

@Component({ components: { Textbox, RectangleButton, NewsletterSignup, Logo } })
export default class Footer extends Vue {
  /**  Get the email address for support */
  get supportEmail(): string {
    return Emails.help;
  }

  /**  Get the email address for join us */
  get joinusEmail(): string {
    return Emails.join;
  }

  /**  Get the link for shanzid's website */
  get shanzidWebsite(): string {
    return Hyperlinks.shanzid;
  }

  /**  Get the link for terms of service page */
  get tosLink(): string {
    return Hyperlinks.tos;
  }

  /** Get the copyright notice */
  get copyrightStatement(): string {
    const date = new Date();
    return `© Copyright ${date.getFullYear()} Trackgit`;
  }
}
</script>

<style lang="scss" scoped>
#footer {
  display: block;
  padding: 10vh 0px 0px 0px;

  div {
    width: 100%;
  }

  .credits-container {
    background-color: #3e3e3e;
    padding: 5vh 8vw;
    box-sizing: border-box;
    display: flex;

    .credit {
      line-height: 1.7rem;
      font-size: 1rem;
      max-width: 300px;

      span {
        color: rgba(255, 255, 255, 0.7);
      }

      a {
        color: rgba(255, 255, 255, 1);
        letter-spacing: 0.2px;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .logo {
      margin-left: auto;
      color: #8f8f8f;
    }
  }

  .copyright-container {
    background-color: #3e3e3e;
    padding: 10px 8vw 20px 8vw;
    margin-top: -2px;
    color: rgb(138, 138, 138);
    font-size: 1rem;
    text-align: center;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 1000px) {
  #footer {
    padding: 0px;

    .credits-container {
      padding: 1rem 8vw;
      display: block;

      .credit {
        text-align: left;
        font-size: 1.2rem;
        width: 100%;
        max-width: unset;
        margin: 2rem 0px;
      }

      .logo {
        margin: 3rem auto 0px auto;
        display: block;
        text-align: center;
      }
    }
  }
}
</style>
