import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import diplomasReducer from "@/app/api/diplomas/diplomasApiSlice";
import { emailApi } from "@/app/api/signin/emailApiSlice";

export const store = configureStore({
  reducer: {
    diplomas: diplomasReducer,
    [emailApi.reducerPath]: emailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emailApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
