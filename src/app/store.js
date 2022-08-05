// Like a client side mini database
// This is the store object. It is immutable.
// It operates logically like a one way data flow

//                ACTION  ---> REDUCER ---> STORE
//                 /|\                       \|/
//                  L---------- APP <---------
//

import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer
  },
});
