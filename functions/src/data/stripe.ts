import * as functions from "firebase-functions";

export const STRIPE_KEY = functions.config().stripe.key;

export const paymentMethods = ["card"];

export const descriptionDefault = "Make a donation to Trackgit";

export const imagesDefault = [];

export const nameDefault = "Trackgit donation";

export const currencyDefault = "cad";

export const amountDefault = 5;

export const localeDefault = "auto";
