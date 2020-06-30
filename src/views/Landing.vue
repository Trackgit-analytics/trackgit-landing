<template>
  <div class="home">
    <UserGreeting />
    <ProductSummary />
    <SettingUp />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import UserGreeting from "@/components/user-greeting/user-greeting.vue";
import ProductSummary from "@/components/product-summary/product-summary.vue";
import SettingUp from "@/components/setting-up/setting-up.vue";

@Component({
  components: {
    UserGreeting,
    ProductSummary,
    SettingUp
  }
})
export default class Landing extends Vue {
  // Initial data can be declared as instance properties
  message = "Hello!";

  // Component methods can be declared as instance methods
  onClick(): void {
    window.alert(this.message);
  }
}
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  max-width: 100%;
  overflow-x: hidden;
}
</style>
