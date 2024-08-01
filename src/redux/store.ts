import { configureStore } from "@reduxjs/toolkit";
import userApi from "./features/user/userApi";
import userReducer from "./features/user/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { userReducer, [userApi.reducerPath]: userApi.reducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware),
  });
};

// Infer the type of the store
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
