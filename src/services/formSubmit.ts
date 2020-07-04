import axios from "axios";
import url from "@/models/data/GetForm.ts";

export default class FormService {
  /**
   * Sends form data to GetForm.io
   * @param data The form data object to submit
   * @returns true if the data was posted successfully, false otherwise
   */
  public static async submit(data: FormData): Promise<boolean> {
    await axios({
      method: "post",
      url,
      data,
      headers: { "Content-Type": "multipart/form-data" }
    }).catch(error => {
      console.error(error);
      return false;
    });

    return true;
  }
}
