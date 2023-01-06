import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["Blog"]
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ["Blog"]
    }),
    addBlog: builder.mutation({
      query: (blog) => ({
        url: "/blogs",
        method: "POST",
        body: blog
      }),
      invalidatesTags: ["Blog"]
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
        body: id
      }),
      invalidatesTags: ["Blog"]
    }),
    updateBlog: builder.mutation({
      query: (blog) => ({
        url: `/blogs/${blog.id}`,
        method: "PATCH",
        body: blog
      }),
      invalidatesTags: ["Blog"]
    })
  })
});

export const {
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useAddBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation
} = blogsApi;
