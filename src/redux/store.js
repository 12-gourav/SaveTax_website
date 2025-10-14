import { configureStore } from "@reduxjs/toolkit";
import { analytics, loginReducer, services } from "./reducer";

export const store = configureStore({
  reducer: {
    users: loginReducer,
    analytics: analytics,
    services:services
  },
});
