import { createReducer } from "@reduxjs/toolkit";

export const loginReducer = createReducer(
  { isActive: false, user: null },
  (builder) => {
    builder
      .addCase("login", (state, action) => {
        state.isActive = true;
        state.user = action.payload;
      })
      .addCase("load", (state, action) => {
        state.isActive = true;
        state.user = action.payload;
      })
      .addCase("logout", (state, action) => {
        state.isActive = false;
        state.user = null;
      });
  }
);

export const analytics = createReducer({ analytic: null }, (builder) => {
  builder.addCase("addAnalytic", (state, action) => {
    state.analytic = action.payload;
  });
});


export const services = createReducer({ services: [] }, (builder) => {
  builder.addCase("addServices", (state, action) => {
    state.services = action.payload;
  });
});