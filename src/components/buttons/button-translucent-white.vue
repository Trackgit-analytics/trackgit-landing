<template>
  <a :href="action" class="button no-select translucent-white">{{
    this.text
  }}</a>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TranslucentWhiteButton extends Vue {
  @Prop() readonly text!: string;
  @Prop() readonly action!: string;
}
</script>
<style>
@import "button.css";
</style>
<style scoped lang="scss">
.translucent-white {
  border: 1px solid white;
  color: white;
  text-decoration: none;
  background: rgba(255, 255, 255, 0);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}
</style>
