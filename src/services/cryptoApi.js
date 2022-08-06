// This is the reducer object used by the store to change state of data
// It will return an entire new object with the new state.
import create from "@ant-design/icons/lib/components/IconFont";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // https://redux-toolkit.js.org/rtk-query/api/createApi
const cryptoApiHeaders = {
  "X-RapidAPI-Key": "56a7a13132msh194e4328f2a2d69p198724jsn44df556376bb",
  // "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
// console.log("createRequest",createRequest)
// const customBaseQuery = (args, { signal, dispatch, getState }, extraOptions) => {
//   // omitted
// };
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (id) => createRequest(`/coin/${id}`),
    }),
  }),
});
export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery /* 'use' at the start and 'Query' at the end */
} = cryptoApi;
// const options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   params: {
//     referenceCurrencyUuid: "yhjMzLPhuIDl",
//     timePeriod: "24h",
//     "tiers[0]": "1",
//     orderBy: "marketCap",
//     orderDirection: "desc",
//     limit: "50",
//     offset: "0",
//   },
//   headers: {
//     "X-RapidAPI-Key": "56a7a13132msh194e4328f2a2d69p198724jsn44df556376bb",
//     "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//   },
// };
