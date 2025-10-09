import { configureStore } from "@reduxjs/toolkit";
import { analytics, loginReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    users: loginReducer,
    analytics: analytics,
  },
});
