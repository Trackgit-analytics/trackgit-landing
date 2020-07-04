<template>
  <section id="message-us">
    <div class="main-text-container">
      <div class="title">
        <h3>Send us a message</h3>
        <p>We're here to help!</p>
      </div>
      <form>
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
      </form>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Textbox from "@/components/base-inputs/text/textbox.vue";

@Component({ components: { Textbox } })
export default class MessageUs extends Vue {
  name = "";
  email = "";
  message = "";

  loading = false;
}
</script>
<style lang="scss" scoped>
.title {
  margin-bottom: 2rem !important;
}
.main-text-container {
  width: 50vw;
}

@media only screen and (max-width: 600px) {
  .main-text-container {
    width: 100%;
  }
}
</style>
