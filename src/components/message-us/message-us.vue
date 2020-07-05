<template>
  <section id="message-us">
    <div class="main-text-container">
      <div class="title">
        <h3>Send us a message</h3>
        <p>We love to hear from you!</p>
      </div>

      <form id="message-form">
        <Textbox
          :required="true"
          placeholder="Rocky Cactus"
          label="Name"
          :enabled="!loading"
          :value.sync="name"
        />

        <Textbox
          :required="true"
          placeholder="cactus.plant@mars.com"
          label="Email"
          :enabled="!loading"
          type="email"
          :value.sync="email"
        />

        <Textbox
          :required="true"
          placeholder="Hi there..."
          label="Message"
          :enabled="!loading"
          type="textarea"
          :value.sync="message"
        />

        <RectangleButton
          text="Send"
          color="blue"
          :loading="loading"
          loadingText="Sending"
          v-on:click.native="submitForm"
        />

        <span :class="`${this.success ? 'success' : 'error'} feedback`">
          {{ this.feedback }}
        </span>
      </form>
    </div>
    <MessageUsClipart />
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Textbox from "@/components/base-inputs/text/textbox.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RectangleButton from "@/components/base-inputs/button/button-rectangle.vue";
import FormService from "@/services/formSubmit.ts";
import FormInput from "@/models/enums/formInput.ts";
import MessageUsClipart from "@/components/message-us/message-us-clipart.vue";

@Component({ components: { Textbox, RectangleButton, MessageUsClipart } })
export default class MessageUs extends Vue {
  name = "";
  email = "";
  message = "";
  feedback = "";

  loading = false;
  success = true;

  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    // animation for changing sections' background color
    gsap.to("section", {
      scrollTrigger: {
        trigger: "#message-us",
        start: "top center",
        scrub: 1
      },
      backgroundColor: "#f8f9fa"
    });
  }

  /**
   * Validate and submit form
   */
  async submitForm() {
    const form = document.getElementById("message-form") as HTMLFormElement;

    if (!form.reportValidity()) {
      // return if form inputs are not valid
      return;
    }

    const formData = new FormData();
    formData.append(FormInput.name, this.name);
    formData.append(FormInput.email, this.email);
    formData.append(FormInput.message, this.message);

    this.loading = true;
    const status = await FormService.submit(formData);
    this.loading = false;

    if (status === true) {
      this.success = true;
      this.feedback = "Message sent";

      // delay helps UI catch up
      setTimeout(() => {
        form.reset();
        this.name = "";
        this.email = "";
        this.message = "";
      }, 50);
    } else {
      this.success = false;
      this.feedback = "Failed to send message";
    }
    return false;
  }
}
</script>
<style lang="scss" scoped>
.title {
  margin-bottom: 2rem !important;
}
.feedback {
  font-weight: 500;
  float: right;
  font-size: 1.1rem;
}
</style>
