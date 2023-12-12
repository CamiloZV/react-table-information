import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tasks.free.beeceptor.com' }),
  tagTypes: ['Tasks'],
  endpoints: (builder) => ({
    getAllTasks: builder.query({
      query: () => 'tasks',
      providesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
    createTask: builder.mutation({
      query(newTask) {
        return {
          url: 'tasks',
          method: 'POST',
          body: newTask,
        };
      },
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
  }),
});

export const { useGetAllTasksQuery, useCreateTaskMutation } = tasksApi;
export default tasksApi;
