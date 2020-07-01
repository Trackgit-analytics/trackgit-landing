export default class DeviceHelper {
  /** Determine if the device is a phone
   * @returns true if the device is a phone
   */
  public static isPhone(): boolean {
    const width = window.screen.width;
    if (width <= 600) {
      return true;
    }
    return false;
  }

  /** Determine if the device is a tablet
   * @returns true if the device is a tablet
   */
  public static isTablet(): boolean {
    const width = window.screen.width;
    if (width >= 600 && width <= 1024) {
      return true;
    }
    return false;
  }

  /** Returns the device height in pixels */
  public static getHeight(): number {
    return window.screen.height;
  }

  /** Returns the device width in pixels */
  public static getWidth(): number {
    return window.screen.width;
  }
}
