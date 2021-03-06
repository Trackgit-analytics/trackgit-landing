<template>
  <a
    :href="this.isClickable ? this.action : undefined"
    :class="
      `button no-select ${this.color}-button 
      ${this.isClickable ? '' : 'disabled'}`
    "
  >
    {{ this.loading ? this.loadingText : this.text }}
    <img v-if="!this.loading" src="@/assets/arrow-right.svg" alt="arrow" />
    <div v-else class="spinner" />
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
  @Prop({ default: false }) readonly loading!: boolean;
  @Prop({ default: "Loading.." }) readonly loadingText!: string;

  /** Get button's clickable state */
  get isClickable(): boolean {
    return this.enabled && !this.loading;
  }
}
</script>
<style scoped lang="scss">
.button {
  padding: 1rem 1.5rem 1rem 1.8rem;
  display: inline-flex;
  align-items: center;
  border-radius: 5px;
  font-size: 1.1em;
  letter-spacing: 0.5px;
  transition: all 120ms ease;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  height: fit-content;

  img,
  .spinner {
    width: 0.75rem;
    height: 0.75rem;
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

  img,
  .spinner {
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

.blue-button {
  color: white;
  background-color: #1890ff;

  &:not(.disabled):hover {
    background-color: #2e9aff;
  }
  &:not(.disabled):active {
    background-color: #108bff;
  }

  img,
  .spinner {
    filter: invert(100);
  }
}

.purple-button {
  color: white;
  background-color: #7a5bf5;

  &:not(.disabled):hover {
    background-color: #8568f7;
  }
  &:not(.disabled):active {
    background-color: #6946f7;
  }

  img,
  .spinner {
    filter: invert(100);
  }
}

.purple-border-button {
  border: 1px solid #7a5bf5;
  color: #7a5bf5;
  background-color: transparent;

  &:not(.disabled):hover {
    background-color: #8568f7;
    color: white;

    img,
    .spinner {
      filter: invert(100);
    }
  }
  &:not(.disabled):active {
    background-color: #6946f7;
    color: white;

    img,
    .spinner {
      filter: invert(100);
    }
  }

  img,
  .spinner {
    filter: invert(38%) sepia(63%) saturate(4007%) hue-rotate(236deg)
      brightness(100%) contrast(93%);
  }
}

.disabled::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: default;
}

@media only screen and (max-width: 900px) {
  .button {
    font-size: 1.1rem;
  }
}
</style>
