import { configureStore } from "@reduxjs/toolkit";

import field from "../reducer/fieldReducer";

// ???
const store = configureStore({
  reducer: { field },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;