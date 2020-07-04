<template>
  <a
    :href="this.enabled ? action : null"
    :class="
      `button no-select ${this.color}-button 
      ${this.enabled ? '' : 'disabled'}`
    "
  >
    {{ this.text }}
    <img src="@/assets/arrow-right.svg" alt="arrow" />
  </a>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RectangleButton extends Vue {
  @Prop() readonly text!: string;
  @Prop() readonly action!: string;
  @Prop() readonly color!: string;
  @Prop({ default: true }) readonly enabled!: boolean;
}
</script>
<style scoped lang="scss">
.button {
  padding: 15px 25px 15px 30px;
  display: inline-flex;
  align-items: center;
  border-radius: 5px;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
  transition: all 120ms ease;
  font-weight: 500;
  text-decoration: none;

  img {
    width: 0.6rem;
    margin-left: 1rem;
  }
}

.translucent-white-button {
  border: 1px solid white;
  color: white;
  background: rgba(255, 255, 255, 0);

  &:not(.disabled):hover {
    background: rgba(255, 255, 255, 0.05);
  }
  &:not(.disabled):active {
    background: rgba(255, 255, 255, 0.15);
  }

  img {
    filter: invert(100);
  }
}

.transparent-button {
  color: #353535;
  padding: 0px 0px 5px 0px;
  border-radius: 0px;
  letter-spacing: 0px;
  display: unset;

  &:not(.disabled):hover {
    border-bottom: 1px dotted #353535;
  }

  img {
    opacity: 0.8;
  }
}

.disabled {
  opacity: 0.25 !important;
  cursor: unset !important;
}
</style>
