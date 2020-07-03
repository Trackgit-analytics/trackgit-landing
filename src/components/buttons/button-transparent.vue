<template>
  <a class="transparent-button no-select" :href="action">
    {{ this.text }}
    <img src="@/assets/arrow-right.svg" alt="arrow" />
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

  img {
    width: 8px;
    margin-left: 10px;
    vertical-align: middle;
  }
}
</style>
