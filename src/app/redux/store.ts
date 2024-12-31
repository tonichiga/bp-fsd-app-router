import { tickerApi } from "@/07.shared/entities/tickers";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

const combines = combineReducers({
  [tickerApi.reducerPath]: tickerApi.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === "user/logout") {
    state = undefined;
  }
  return combines(state, action as never);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(tickerApi.middleware),
});

setupListeners(store.dispatch);
