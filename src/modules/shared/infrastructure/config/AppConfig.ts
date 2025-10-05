import { persistor, store } from "../../../../app/store";
import { theme } from "../../styles/theme";

export class AppConfig {
  static getStore() {
    return store;
  }

  static getPersistor() {
    return persistor;
  }

  static getTheme() {
    return theme;
  }
}