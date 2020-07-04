<template>
  <div class="textbox-container">
    <span class="textbox-label">{{ this.label }}</span>
    <textarea
      v-if="this.type === 'textarea'"
      class="textbox-input"
      :placeholder="this.placeholder"
      :disabled="!this.enabled"
      :required="this.required"
      :name="this.label"
      v-model="value"
      @keyup="$emit('update:value', value)"
    />

    <input
      v-else
      class="textbox-input"
      :type="this.type"
      :placeholder="this.placeholder"
      :disabled="!this.enabled"
      :required="this.required"
      :name="this.label"
      v-model="value"
      @keyup="$emit('update:value', value)"
    />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Textbox extends Vue {
  @Prop({ default: "" }) readonly label!: string;
  @Prop({ default: "text" }) readonly type!: string;
  @Prop({ default: true }) readonly enabled!: boolean;
  @Prop({ default: true }) readonly required!: boolean;
  @Prop({ default: "" }) readonly placeholder!: string;

  value = "";
}
</script>
<style lang="scss" scoped>
.textbox-container {
  width: 100%;
  max-width: 500px;
  margin-bottom: 2.5rem;
  text-align: left;

  .textbox-label {
    display: block;
    opacity: 0.7;
    font-size: 1rem;
    margin-bottom: 3px;
    font-weight: 500;
  }

  .textbox-input {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #b4b4b4;
    font-size: 1.1rem;
    transition: 120ms all ease;
    background: #fff;
    box-sizing: border-box;

    &:focus {
      border-color: #188fff98 !important;
      box-shadow: 0px 0px 0px 2px #188fff98;
      outline: none;
    }

    &:disabled {
      background-color: rgb(250, 250, 250);
      color: #666666;
    }
  }

  textarea {
    height: 8rem;
    min-height: 8rem;
    max-height: 300px;
    min-width: 100%;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:active,
input:-webkit-autofill:focus {
  background-color: #ffffff !important;
  box-shadow: 0 0 0 1000px white inset !important;
}
</style>
