// Like a client side mini database
// This is the store object. It is immutable.
// It operates logically like a one way data flow

//                ACTION  ---> REDUCER ---> STORE
//                 /|\                       \|/
//                  L---------- APP <---------
//
//   THE STORE
// import { createStore } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    // [cryptoExchangesApi.reducerPath]: cryptoExchangesApi.reducer, //TODO: FIND EXHCANGE API THAT SERVES THE DATA
  },
});
