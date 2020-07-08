import { API } from "@/models/data/LinkDirectory";
import Currencies, { defaultCurrency } from "@/models/data/currencies";
import axios from "axios";

export default class UserLocaleService {
  /**
   * Get the default currency based on user's region
   * @returns A Currency object containing the code and the country of the currency
   */
  public static async getLocalCurrency(): Promise<Currency> {
    const response = await axios.get(API.userLocale).catch(error => {
      console.error(error);
      return null;
    });

    const localeData = response?.data;

    if (localeData == null) {
      return defaultCurrency;
    }

    const currencyCode = localeData.currency.toLowerCase();
    const acceptedCodes = Currencies.map(e => e.code);

    let localCurrency: Currency;
    if (acceptedCodes.includes(currencyCode)) {
      localCurrency = {
        country: localeData.name,
        code: currencyCode
      };
    } else {
      // fallback for when currency is not detected properly
      localCurrency = defaultCurrency;
    }

    return localCurrency;
  }
}
