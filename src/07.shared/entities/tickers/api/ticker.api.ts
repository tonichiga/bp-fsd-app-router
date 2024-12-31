import { privateBaseQuery } from "@/07.shared/api";
import { createApi } from "@reduxjs/toolkit/query/react";
import { Endpoint } from "./ticker.endpoints";
import Ticker from "../model/ticker.model";

export const tickerApi = createApi({
  reducerPath: "ticker",
  baseQuery: privateBaseQuery,
  tagTypes: ["Ticker"],
  endpoints: (builder) => ({
    getTicker: builder.query<Ticker, void>({
      query: () => ({
        url: Endpoint.geTicker(),
      }),

      transformResponse: (response: Ticker) => {
        return new Ticker(response);
      },
      providesTags: ["Ticker"],
    }),
  }),
});

export const { useGetTickerQuery } = tickerApi;
