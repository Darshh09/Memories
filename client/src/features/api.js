import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath : 'Posts',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:8000/api/v1/',
    }),
    endpoints :(builder) => ({
        getPosts: builder.query({
            query : () => ({
                method : 'GET',
                url : 'posts',
            }),
            providesTags : ['Posts'],
        }),
        createPost: builder.mutation({
            query : (data) => ({
                method : 'POST',
                url : 'posts',
                body : data,
                headers : {
                    'Content-Type' : 'application/json',
                }
            }),
            invalidatesTags : ['Posts'],
        })
    })
})

export const { useGetPostsQuery , useCreatePostMutation } = postApi;