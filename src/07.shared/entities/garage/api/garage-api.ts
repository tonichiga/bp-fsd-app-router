import { privateBaseQuery } from "@/07.shared/api";
import GarageEndpoints from "./endpoints";
import { createApi } from "@reduxjs/toolkit/query/react";
import { GarageItem, IGarageItem } from "../model";
import { ItemGroup } from "@/07.shared/const/enums";

export const garageApi = createApi({
  reducerPath: "garage",
  baseQuery: privateBaseQuery,
  endpoints: (builder) => ({
    getItems: builder.query<GarageItem[], ItemGroup>({
      query: (groupEnum) => ({
        url: GarageEndpoints.getItems(groupEnum),
      }),
      transformResponse: (response: IGarageItem[]) => {
        return response.map((el) => new GarageItem(el));
      },
    }),
  }),
});

export const { useGetItemsQuery } = garageApi;
