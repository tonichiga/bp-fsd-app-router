import { inviteReducer, leaderboardReducer, pitstopApi } from "@/05.features";
import { garageApi, userApi } from "@/06.entities";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

const combines = combineReducers({
  leaderboard: leaderboardReducer,
  invite: inviteReducer,
  [garageApi.reducerPath]: garageApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [pitstopApi.reducerPath]: pitstopApi.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === "user/logout") {
    state = undefined;
  }
  return combines(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(garageApi.middleware)
      .concat(userApi.middleware)
      .concat(pitstopApi.middleware),
});

setupListeners(store.dispatch);
