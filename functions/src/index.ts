/* eslint-disable @typescript-eslint/camelcase */

import * as functions from "firebase-functions";
import Stripe from "stripe";
import {
  STRIPE_KEY,
  paymentMethods,
  descriptionDefault,
  imagesDefault,
  nameDefault,
  currencyDefault,
  amountDefault,
  localeDefault
} from "./data/stripe";

const stripe = new Stripe(STRIPE_KEY, {
  apiVersion: "2020-03-02"
});

export const createCheckout = functions.https.onRequest(
  async (request, response) => {
    const { action } = request.body;
    // wakes server up if asleep
    if (action != null && action === "ping") {
      response.status(200).send("hi!");
      return;
    }

    let { locale, currency, amount, images, name, description } = request.body;

    if (!images) {
      images = imagesDefault;
    }
    if (!name) {
      name = nameDefault;
    }
    if (!description) {
      description = descriptionDefault;
    }
    if (!currency) {
      currency = currencyDefault;
    }

    if (!amount) {
      amount = amountDefault;
    }

    if (!locale) {
      locale = localeDefault;
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: paymentMethods as [],
      mode: "payment",
      locale,
      line_items: [
        {
          amount: amount * 1000,
          currency,
          name,
          description,
          quantity: 1,
          images
        }
      ],
      success_url: `https://${request.headers.host}/donate/{CHECKOUT_SESSION_ID}`,
      cancel_url: `https://${request.headers.host}/donate`
    });

    response.send({
      sessionId: session.id
    });
  }
);
