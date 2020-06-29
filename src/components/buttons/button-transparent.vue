<template>
  <a class="transparent-button" :href="action">
    {{ this.text }}
    <svg viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="1.06066"
        y1="1.93934"
        x2="8.06066"
        y2="8.93934"
        stroke="#505050"
        stroke-width="3"
      />
      <line
        y1="-1.5"
        x2="9.8995"
        y2="-1.5"
        transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0 13)"
        stroke="#505050"
        stroke-width="3"
      />
    </svg>
  </a>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TransparentButton extends Vue {
  @Prop() readonly text!: string;
  @Prop() readonly action!: string;
}
</script>
<style scoped lang="scss">
.transparent-button {
  font-size: 1.3rem;
  text-decoration: none;
  color: #505050;
  font-weight: 500;
  &:hover {
    border-bottom: 1px dotted #505050;
  }

  svg {
    width: 8px;
    margin-left: 10px;
    vertical-align: middle;
  }
}
</style>
