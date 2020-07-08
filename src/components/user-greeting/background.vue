<template>
  <div class="background">
    <svg viewBox="0 0 1440 523" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M177 300.738C44.204 233.59 0 80 0 80V522.408H1435V213.789C1435 213.789 1334.1 83.7525 1198.5 99.2175C1098.2 110.657 1018.87 229.98 920 252.193C731.402 294.562 674.5 216.63 533.5 235.823C392.5 255.015 294.254 360.028 177 300.738Z"
        fill="white"
        fill-opacity="0.03"
      />
      <path
        d="M156.5 0C75 0 0 101.043 0 101.043V521.583H1435V181.41C1435 181.41 1315.6 287.552 1180 304.598C1079.7 317.207 1005.5 325.753 925.5 246.734C774.884 97.9637 693.5 299.006 498.5 246.734C303.5 194.462 238 0 156.5 0Z"
        fill="white"
        fill-opacity="0.04"
      />
      <path
        d="M180.374 305.65C94.0217 305.003 0 423.842 0 423.842V522H1435V318.103C1435 318.103 1188.91 480.735 1017.29 473.764C817.83 465.662 771.466 163.659 577.597 217.403C474.618 245.951 456.963 396.395 351.255 387.215C285.651 381.518 246.17 306.143 180.374 305.65Z"
        fill="white"
        fill-opacity="0.03"
      />
    </svg>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Background extends Vue {}
</script>
<style lang="scss" scoped>
.background {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  overflow: hidden;

  svg {
    width: 100%;
    min-width: 1500px;
  }
}
</style>
