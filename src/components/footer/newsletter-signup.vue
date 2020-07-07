<template>
  <form id="newsletter-form" class="newsletter-subscribe-container">
    <Textbox
      :label="textboxLabel"
      type="email"
      placeholder="Email"
      :required="true"
      :value.sync="email"
    />
    <RectangleButton
      text="Subscribe"
      color="blue"
      loadingText="Subscribe"
      :loading="loading"
      v-on:click.native="submitForm"
    />
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Textbox from "@/components/base-inputs/text/textbox.vue";
import RectangleButton from "@/components/base-inputs/button/button-rectangle.vue";
import FormInput from "@/models/enums/formInput";
import FormService from "@/services/formSubmit";
import { FormType } from "@/models/data/GetForm.ts";

@Component({ components: { Textbox, RectangleButton } })
export default class NewsletterSignup extends Vue {
  email = "";

  textboxLabel = "Subscribe to our newsletter";

  loading = false;
  /**
   * Validate and submit form
   */
  async submitForm() {
    const form = document.getElementById("newsletter-form") as HTMLFormElement;

    if (!form.reportValidity()) {
      // return if form inputs are not valid
      return;
    }

    const formData = new FormData();
    formData.append(FormInput.type, FormType.message);
    formData.append(FormInput.email, this.email);

    this.loading = true;
    const status = await FormService.submit(formData);
    this.loading = false;

    if (status === true) {
      this.textboxLabel = "Done! We'll keep you updated";

      // delay helps UI catch up
      setTimeout(() => {
        form.reset();
        this.email = "";
      }, 50);
    } else {
      this.textboxLabel = "Failed to subscribe. Please try again";
    }
    return false;
  }
}
</script>

<style lang="scss" scoped>
.newsletter-subscribe-container {
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 2rem 3rem 0px 3rem;
  width: 100vw;
  box-sizing: border-box;

  .button {
    margin: 0px 0px 2.5rem 0.5rem;
  }
}

@media only screen and (max-width: 600px) {
  .newsletter-subscribe-container {
    display: block;
    padding: 2.5rem 8vw;

    .textbox-container {
      margin-bottom: 1rem;
    }

    .button {
      margin: 0px;
    }
  }
}
</style>
