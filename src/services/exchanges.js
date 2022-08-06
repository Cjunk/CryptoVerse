import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // https://redux-toolkit.js.org/rtk-query/api/createApi
const cryptoApiHeaders = {
  "X-RapidAPI-Key": "56a7a13132msh194e4328f2a2d69p198724jsn44df556376bb",
  // "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});