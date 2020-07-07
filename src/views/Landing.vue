<template>
  <div class="home">
    <Navbar />
    <UserGreeting />
    <ProductSummary />
    <SettingUp />
    <FAQ />
    <MessageUs />
    <DonatePrompt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Navbar from "@/components/navbar/navbar.vue";
import UserGreeting from "@/components/user-greeting/user-greeting.vue";
import ProductSummary from "@/components/product-summary/product-summary.vue";
import SettingUp from "@/components/setting-up/setting-up.vue";
import FAQ from "@/components/faq/faq.vue";
import MessageUs from "@/components/message-us/message-us.vue";
import DonatePrompt from "@/components/donate/donate.vue";
import Footer from "@/components/footer/footer.vue";

@Component({
  components: {
    Navbar,
    UserGreeting,
    ProductSummary,
    SettingUp,
    FAQ,
    MessageUs,
    DonatePrompt,
    Footer
  }
})
export default class Landing extends Vue {}
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  max-width: 100%;
  overflow-x: hidden;
}
</style>
