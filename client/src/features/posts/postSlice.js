import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    Posts: [],
}

export const postSlice = createSlice({
    name: 'Posts',
    initialState,
    reducers: {
        getPosts: (state, action) => {
            state.Posts.push(action.payload);
        }
    }
});

export const {getPosts} = postSlice.actions;
export default postSlice.reducer;