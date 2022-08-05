import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // https://redux-toolkit.js.org/rtk-query/api/createApi
const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "56a7a13132msh194e4328f2a2d69p198724jsn44df556376bb",
  "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
};
// const axios = require("axios");
const baseUrl = "https://crypto-news16.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest("/news/top/10"),
    }),
  }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;