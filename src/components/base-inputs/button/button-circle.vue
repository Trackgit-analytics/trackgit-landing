<template>
  <div
    :class="
      `circle-button-container no-select ${this.enabled ? '' : 'disabled'}`
    "
  >
    <slot class="icon"></slot>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CircleButton extends Vue {
  @Prop() readonly enabled!: boolean;
}
</script>
<style lang="scss" scoped>
.circle-button-container {
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.03);
  transition: all 100ms ease;
  border-radius: 100%;
  cursor: pointer;

  &:not(.disabled):active {
    background-color: #dfdfdf;
  }

  img {
    max-width: 20px;
    max-height: 20px;
    -webkit-user-select: none;
    opacity: 0.5;
    margin-right: -3px;
  }
}

.disabled {
  opacity: 0.25 !important;
  cursor: unset !important;
}

@media only screen and (max-width: 600px) {
  .circle-button-container {
    transform: scale(0.8);
  }
}
</style>
