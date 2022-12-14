import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPost } from "./long-task/postApi";

const initialState = {
  data: [],
  status: "idle",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const loadPostAsync = createAsyncThunk("post/fetchPost", async () => {
  const response = await fetchPost();
  // The value we return becomes the `fulfilled` action payload
  return response;
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addPosts: (state, action) => {
      state.value += action.payload;
    },

    removePost: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(loadPostAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadPostAsync.fulfilled, (state, action) => {
        state.status = "done";
        state.data = action.payload;
      });
  },
});

export const { addPosts, removePost } = postSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const allPosts = (state) => state.post.data;
export const postStatus = (state) => state.post.status;

export default postSlice.reducer;
