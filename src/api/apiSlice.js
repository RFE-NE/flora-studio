import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      providesTags: ["Product"],
    }),
    getProductsById: builder.query({
      query: (id) => `products/${id}`,
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    editProducts: builder.mutation({
      query: ({ id, ...put }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: put,
      }),
      invalidatesTags: ["Product"],
    }),
    addProducts: builder.mutation({
      query: (newCategory) => ({
        url: "products",
        method: "POST",
        body: newCategory,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useDeleteCategoryMutation,
  useEditProductsMutation,
  useAddProductsMutation
} = apiSlice;
