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
        color="purple-border"
        :loading="loading"
        loadingText="Redirecting to secure gateway"
        v-on:click.native="proceedToPayment"
      />
    </div>
    <div class="right-section"></div>
  </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Navbar from "@/components/navbar/navbar.vue";
import RectangleButton from "@/components/base-inputs/button/button-rectangle.vue";
import Currencies from "@/models/data/Currencies";
import Checkout from "@/models/interfaces/checkout";
import DonationService from "@/services/donation";
import {
  loadStripe,
  Stripe,
  RedirectToCheckoutOptions
} from "@stripe/stripe-js";
import StripeConfig from "@/models/data/Stripe.ts";

@Component({ components: { Navbar, RectangleButton } })
export default class DonationPage extends Vue {
  @Prop() readonly receipt!: string;

  currency = "cad";
  amount = 5;

  loading = false;
  stripe: Stripe | null = null;
  serverUp = false;

  mounted() {
    this.initStripe().then(() => {
      this.wakeServer();
    });
  }

  /** Wakes server up, in case it's asleep */
  async wakeServer() {
    /** Uncomment if the firebase servers sleep from inactivity */
    // this.serverUp = await DonationService.wakeServer();
    this.serverUp = true;
  }

  /** Initializes Stripe API */
  async initStripe() {
    this.stripe = await loadStripe(StripeConfig.publicKey);
  }

  /** Triggered when user clicks the proceed button */
  async proceedToPayment() {
    if (this.areInputsValid() === true) {
      this.loading = true;
      const session = await this.createCheckoutSession();
      if (session == null || this.stripe == null) {
        this.loading = false;
        return;
      }
      this.stripe.redirectToCheckout(session);
    }
  }

  /** Checks whether the given inputs are valid or not*/
  areInputsValid(): boolean {
    if (this.amount == null || Number.isNaN(Number(this.amount))) {
      alert("Please select a valid amount");
      return false;
    }

    if (this.currency == null) {
      alert("Please choose a valid currency");
      return false;
    }

    const acceptedCurrencies = Currencies.map(e => e.code.toLowerCase());
    if (!acceptedCurrencies.includes(this.currency.toLowerCase())) {
      alert(`${this.currency} is not an accepted currency`);
      return false;
    }
    return true;
  }

  /** Creates a stripe checkout session
   * @returns The session ID to be used
   */
  async createCheckoutSession(): Promise<RedirectToCheckoutOptions | null> {
    const checkout: Checkout = {
      currency: this.currency,
      amount: this.amount
    };
    const session = await DonationService.createCheckout(checkout);
    if (session != null) {
      return session;
    } else {
      alert("Could not process your request. Please try again.");
      return null;
    }
  }
}
</script>

<style lang="scss" scoped>
#donation {
  margin-top: 4.25rem;
  display: flex;
  padding: 0px;
  height: calc(100vh - 4.25rem);

  .left-section {
    background-color: white;
    width: 60vw;
    box-sizing: border-box;
    height: 100%;
    -webkit-box-shadow: 21px 0px 43px -19px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 21px 0px 43px -19px rgba(0, 0, 0, 0.25);
    box-shadow: 21px 0px 43px -19px rgba(0, 0, 0, 0.25);
    padding: 8vh 12vw;
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
      margin-left: 7px;
      color: rgba(0, 0, 0, 0.4);
      font-weight: 500;
      font-size: 1.1rem;
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
      padding: 8vh 8vw;
      box-shadow: none;
    }

    .right-section {
      display: none;
    }
  }
}
</style>
