<template>
  <div class="modal-container" v-if="visible">
    <div class="backdrop" @click="closeModal" />
    <div class="modal">
      <div class="modal-top">
        <span class="modal-close no-select" @click="closeModal">
          <img src="@/assets/arrow-right.svg" alt="close" />
        </span>
        <span class="modal-title">{{ title }}</span>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
  @Prop() readonly title!: string;
  @Prop({ default: true }) readonly visible!: boolean;

  closeModal() {
    this.$emit("update:visible", false);
  }
}
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 102;

  .backdrop {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    background: rgba(255, 2555, 255, 0.7);
    z-index: 9;
  }

  .modal {
    margin-top: 20vh;
    padding: 3vh 3vw;
    min-width: 25vw;
    min-height: 30vh;
    max-height: 45vh;
    border-radius: 7px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.07);
    z-index: 10;
    position: relative;

    .modal-top {
      width: 100%;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      margin-left: -20px;

      .modal-title {
        font-size: 1.1rem;
        font-weight: 500;
        color: #464646;
      }

      .modal-close {
        cursor: pointer;
        transform: rotate(180deg);
        margin-right: 5px;
        height: 50px;
        width: 50px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 120ms ease;

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }

        img {
          max-height: 15px;
          max-width: 15px;
          opacity: 0.7;
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .modal-container {
    .modal {
      padding: 3vh 5vw;

      .modal-top {
        margin-left: -5px;

        .modal-close {
          width: 20px;
          height: 20px;

          img {
            height: 10px;
            width: 10px;
          }
        }
      }
    }
  }
}
</style>
