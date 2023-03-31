import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://video-links.onrender.com",
  }),
  tagTypes: ["Links"],
  endpoints: (builder) => ({
    getBucketLinks: builder.query({
      query: () => "/Links",
      providesTags: ["Links"],
    }),
    addBucketLinks: builder.mutation({
      query: (links) => ({
        url: "/Links",
        method: "POST",
        body: links,
      }),
      invalidatesTags: ["Links"],
    }),
    updateBucketLinks: builder.mutation({
      query: (links) => ({
        url: `/Links/${links.id}`,
        method: "PATCH",
        body: links,
      }),
      invalidatesTags: ["Links"],
    }),
    deleteBucketLinks: builder.mutation({
      query: ({ id }) => ({
        url: `/Links/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Links"],
    }),
    getHistoryLinks: builder.query({
      query: () => "/History",
      providesTags: ["History"],
    }),
    addHistoryLinks: builder.mutation({
      query: (links) => ({
        url: "/History",
        method: "POST",
        body: links,
      }),
      invalidatesTags: ["History"],
    }),
    deleteHistoryLinks: builder.mutation({
      query: ({ id }) => ({
        url: `/History/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["History"],
    }),
  }),
});

export const {
  useGetBucketLinksQuery,
  useAddBucketLinksMutation,
  useUpdateBucketLinksMutation,
  useDeleteBucketLinksMutation,
  useGetHistoryLinksQuery,
  useAddHistoryLinksMutation,
  useDeleteHistoryLinksMutation,
} = apiSlice;
