import Checkout from "@/models/interfaces/checkout.ts";
import baseService from "@/services/baseService.ts";
import { RedirectToCheckoutOptions } from "@stripe/stripe-js";

export default class DonationService {
  /**
   * Get a stripe checkout session from server
   * @param data The checkout data
   * @returns A stripe sessionID, or null if error occurred
   */
  public static async createCheckout(
    data: Checkout
  ): Promise<RedirectToCheckoutOptions | null> {
    const response = await this.callDonationAPI(data);

    return response?.data;
  }

  /** Retrieve checkout information from a session
   * @param sessionId The session Id to search for
   */
  public static async retrieveCheckout(sessionId: string): Promise<any> {
    const response = await baseService
      .get(`/retrieveCheckout?sessionId=${sessionId}`)
      .catch(error => {
        console.error(`Error when retrieving checkout session: ${error}`);
        return null;
      });

    return response?.data;
  }

  /**
   * Wake the server up, in case it's asleep
   * @returns True if the server is active and ready, false otherwise
   */
  public static async wakeServer(): Promise<boolean> {
    const data = { action: "ping" };

    const response = await this.callDonationAPI(data);

    const status = response?.status;
    if (status === 200) {
      console.log("Server says hi");
      return true;
    }

    return false;
  }

  /** Make a post request to the donation API
   * @param data The data to send in the post request
   */
  private static async callDonationAPI(data: any): Promise<any> {
    return baseService.post("/createCheckout", data).catch(error => {
      console.error(`Error when calling checkout session: ${error}`);
      return null;
    });
  }
}
