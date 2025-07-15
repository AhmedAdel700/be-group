import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import diplomasReducer from "@/lib/diplomasApiSlice";

export const store = configureStore({
  reducer: {
    diplomas: diplomasReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
