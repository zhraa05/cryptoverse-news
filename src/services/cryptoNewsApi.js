import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  //   'x-bingapis-sdk': 'true',
  //   'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  //   'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,

  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': 'f6fc59738emsh48d7440b7c8f06fp1e8298jsn69d3f16fbf01',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'

};
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest
        (`/news/search?q=${newsCategory}
        &safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;


// headers: {
//   'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': 'f6fc59738emsh48d7440b7c8f06fp1e8298jsn69d3f16fbf01',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
// }