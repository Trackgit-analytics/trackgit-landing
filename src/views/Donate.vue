<template>
  <section id="donation">
    <Navbar />

    <div class="left-section">
      <h3>Choose an amount to donate</h3>
      <div class="amount-options">
        <div class="inputGroup">
          <input
            id="radio1"
            name="radio"
            value="5"
            v-model="amount"
            type="radio"
          />
          <label for="radio1">
            <h3>5</h3>
            <span class="currency">CAD</span>
          </label>
        </div>
        <div class="inputGroup">
          <input
            id="radio2"
            name="radio"
            value="10"
            v-model="amount"
            type="radio"
          />
          <label for="radio2">
            <h3>10</h3>
            <span class="currency">CAD</span>
          </label>
        </div>
        <div class="inputGroup">
          <input
            id="radio3"
            name="radio"
            value="20"
            v-model="amount"
            type="radio"
          />
          <label for="radio3">
            <h3>20</h3>
            <span class="currency">CAD</span>
          </label>
        </div>
        <div class="inputGroup">
          <div class="custom"></div>
        </div>
      </div>
      <RectangleButton
        text="Proceed to payment"
        color="purple"
        :loading="false"
        loadingText="Redirecting to secure gateway"
      />
    </div>
    <div class="right-section"></div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Navbar from "@/components/navbar/navbar.vue";
import RectangleButton from "@/components/base-inputs/button/button-rectangle.vue";

@Component({ components: { Navbar, RectangleButton } })
export default class DonationPage extends Vue {
  currency = "cad";
  amount = 5;
}
</script>

<style lang="scss" scoped>
#donation {
  margin-top: 4.25rem;
  display: flex;
  padding: 0px;
  height: calc(100vh - 4.25rem);

  .left-section {
    width: 50vw;
    box-sizing: border-box;
    height: 100%;
    -webkit-box-shadow: 21px 0px 43px -19px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 21px 0px 43px -19px rgba(0, 0, 0, 0.25);
    box-shadow: 21px 0px 43px -19px rgba(0, 0, 0, 0.25);
    padding: 8vw;
  }

  .right-section {
    width: 50vw;
    height: 100%;
  }

  .amount-options {
    max-width: 100%;
    margin: 5vh 0px 7vh 0px;
  }
}

.inputGroup {
  background-color: #fff;
  display: block;
  margin: 10px 0;
  position: relative;

  label {
    box-sizing: border-box;
    padding: 12px 30px;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    text-align: left;
    color: #3c454c;
    cursor: pointer;
    position: relative;
    z-index: 2;
    transition: color 200ms ease-in;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    .currency {
      margin-left: 5px;
      color: rgba(0, 0, 0, 0.4);
      font-weight: 500;
    }

    &:before {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      content: "";
      background-color: #8267ec;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale3d(1, 1, 1);
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
      z-index: -1;
    }

    &:after {
      width: 32px;
      height: 32px;
      content: "";
      border: 2px solid #d1d7dc;
      background-color: #fff;
      background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
      background-repeat: no-repeat;
      background-position: 4px 5px;
      border-radius: 50%;
      z-index: 2;
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      transition: all 200ms ease-in;
    }
  }

  input:checked ~ label {
    h3 {
      color: #fff;
    }
    .currency {
      color: rgba(255, 255, 255, 0.7);
    }

    &:before {
      transform: translate(-50%, -50%) scale3d(56, 56, 1);
      opacity: 1;
    }

    &:after {
      background-color: #54e0c7;
      border-color: #54e0c7;
    }
  }

  input {
    width: 32px;
    height: 32px;
    order: 1;
    z-index: 2;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    visibility: hidden;
  }
}

@media only screen and (max-width: 600px) {
  #donation {
    .left-section {
      width: 100vw;
      box-shadow: none;
    }

    .right-section {
      display: none;
    }
  }
}
</style>
