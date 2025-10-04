import { store, persistor } from "../../../app/store";
import { theme } from "../../styles/theme";
import { router } from "../../../app/routes/dynamicRoutes";

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

  static getRouter() {
    return router;
  }
}