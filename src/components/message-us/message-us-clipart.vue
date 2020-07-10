<template>
  <div class="mailbox-clipart" v-if="this.isDesktop">
    <svg
      viewBox="0 0 493 318"
      class="mailbox-clipart-background"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.7719 144.471C37.7719 144.471 -54.0937 32.9201 48.7083 4.48551C151.51 -23.9491 187.6 91.9766 257.593 95.2575C327.586 98.5384 409.609 51.512 431.482 51.512C453.355 51.512 492.726 53.6992 490.538 91.9766C488.351 130.254 459.916 165.25 458.823 183.842C457.729 202.434 483.977 252.741 488.351 264.772C492.726 276.802 498.194 310.704 474.134 312.892C461.819 313.985 391.564 327.656 296.417 299.768C224.418 278.666 111.724 315.079 85.4491 315.079C76.94 315.1 68.6357 312.47 61.6898 307.555C42.3871 293.824 11.6722 259.336 38.8656 188.217C53.0829 151.033 37.7719 144.471 37.7719 144.471Z"
        fill="#F8F8FF"
      />
      <path
        d="M129.638 162.516C145.04 162.516 157.525 150.031 157.525 134.629C157.525 119.227 145.04 106.741 129.638 106.741C114.236 106.741 101.75 119.227 101.75 134.629C101.75 150.031 114.236 162.516 129.638 162.516Z"
        fill="white"
      />
      <path
        d="M95.7347 158.142C106.003 158.142 114.327 149.818 114.327 139.55C114.327 129.282 106.003 120.958 95.7347 120.958C85.4667 120.958 77.1429 129.282 77.1429 139.55C77.1429 149.818 85.4667 158.142 95.7347 158.142Z"
        fill="white"
      />
      <path
        d="M159.166 158.142C169.132 158.142 177.211 150.063 177.211 140.097C177.211 130.131 169.132 122.052 159.166 122.052C149.2 122.052 141.121 130.131 141.121 140.097C141.121 150.063 149.2 158.142 159.166 158.142Z"
        fill="white"
      />
      <path
        d="M383.909 247.82C399.311 247.82 411.796 235.335 411.796 219.933C411.796 204.531 399.311 192.045 383.909 192.045C368.507 192.045 356.021 204.531 356.021 219.933C356.021 235.335 368.507 247.82 383.909 247.82Z"
        fill="white"
      />
      <path
        d="M349.459 241.258C359.727 241.258 368.051 232.934 368.051 222.666C368.051 212.398 359.727 204.074 349.459 204.074C339.191 204.074 330.867 212.398 330.867 222.666C330.867 232.934 339.191 241.258 349.459 241.258Z"
        fill="white"
      />
      <path
        d="M414.53 242.899C424.496 242.899 432.575 234.82 432.575 224.854C432.575 214.888 424.496 206.809 414.53 206.809C404.564 206.809 396.485 214.888 396.485 224.854C396.485 234.82 404.564 242.899 414.53 242.899Z"
        fill="white"
      />
      <path
        d="M83.1579 275.708C93.4259 275.708 101.75 267.385 101.75 257.117C101.75 246.849 93.4259 238.525 83.1579 238.525C72.8899 238.525 64.566 246.849 64.566 257.117C64.566 267.385 72.8899 275.708 83.1579 275.708Z"
        fill="white"
      />
      <path
        d="M105.031 273.521C112.279 273.521 118.154 267.645 118.154 260.397C118.154 253.149 112.279 247.274 105.031 247.274C97.7827 247.274 91.907 253.149 91.907 260.397C91.907 267.645 97.7827 273.521 105.031 273.521Z"
        fill="white"
      />
      <path
        d="M127.45 215.558C127.45 215.558 140.027 199.7 153.151 217.199C153.151 217.199 165.728 198.607 173.383 214.465"
        stroke="#BAC6F2"
        stroke-width="1.58981"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M96.8284 201.259C96.8284 201.259 105.862 189.858 115.284 202.435C115.284 202.435 124.317 189.081 129.813 200.471"
        stroke="#BAC6F2"
        stroke-width="1.58981"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M388.283 113.221C388.283 113.221 397.316 101.83 406.738 114.396C406.738 114.396 415.772 101.043 421.267 112.433"
        stroke="#BAC6F2"
        stroke-width="1.58981"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M38.3187 57.4451C38.3187 57.4451 47.3522 46.0439 56.7739 58.6208C56.7739 58.6208 65.8073 45.2675 71.3029 56.6577"
        stroke="#BAC6F2"
        stroke-width="1.58981"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <img
      class="mailbox-clipart-image"
      src="@/assets/mailbox-clipart.svg"
      alt="background"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DeviceHelper from "@/helpers/DeviceHelper.ts";

@Component
export default class MessageUsClipart extends Vue {
  /** Returns true if the device is a desktop */
  get isDesktop(): boolean {
    return DeviceHelper.isDesktop();
  }
}
</script>

<style lang="scss" scoped>
.mailbox-clipart {
  width: calc(76vw - 500px);
  padding-left: 10vw;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .mailbox-clipart-background {
    height: 100%;
    width: 100%;
    max-height: 50vh;
    z-index: 0;
  }

  .mailbox-clipart-image {
    position: absolute;
    left: 50%;
    top: 25%;
    max-height: 30vh;
    z-index: 1;
    transform: rotate(5deg);
  }
}

@media only screen and (min-width: 2000px) {
  .mailbox-clipart {
    padding-left: 100px;
    width: 100%;
  }
}
</style>
