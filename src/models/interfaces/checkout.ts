/**
 * The interface expected by the server during donation checkou
 */
export interface Checkout {
  /** Must be a currency accepted by Stripe */
  currency: string;
  /** Amount to be charged (in dollars, NOT CENTS) */
  amount: number;
  /** Specify to personalize checkout page based on location */
  locale?: string;
  /** Array containing url of images displayed at checkout (max 5 MB each) */
  images?: string[];
  /** Name displayed on checkout page */
  name?: string;
  /** Description displayed on checkout page */
  description?: string;
}
