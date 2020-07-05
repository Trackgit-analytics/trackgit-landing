<template>
  <section id="footer">
    <NewsletterSignup />
    <div class="credits-container">
      <div class="credit">
        <span>Support</span>
        <a :href="`mailto:${supportEmail}`">{{ this.supportEmail }}</a>
      </div>

      <div class="credit">
        <span>Join us</span>
        <a :href="`mailto:${joinusEmail}`">{{ this.joinusEmail }}</a>
      </div>

      <div class="credit">
        <span>Meet the maker</span>
        <a :href="shanzidWebsite">Shanzid Shaiham</a>
      </div>
    </div>
    <div class="copyright-container"></div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Textbox from "@/components/base-inputs/text/textbox.vue";
import RectangleButton from "@/components/base-inputs/button/button-rectangle.vue";
import NewsletterSignup from "@/components/footer/newsletter-signup.vue";
import { Emails, Hyperlinks } from "@/models/data/LinkDirectory";

@Component({ components: { Textbox, RectangleButton, NewsletterSignup } })
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

    .credit {
      margin-top: 0px;
      margin-right: 5vw;
      line-height: 1.6rem;
      max-width: 10vw;
      font-size: 1rem;
      display: inline-block;

      span {
        color: rgba(255, 255, 255, 0.7);
        display: block;
      }

      a {
        color: rgba(255, 255, 255, 1);
        letter-spacing: 0.2px;
        text-decoration: none;
      }
    }
  }

  .copyright-container {
    background-color: #3e3e3e;
  }
}

@media only screen and (max-width: 600px) {
}
</style>
